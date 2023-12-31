"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth = void 0;
const http_1 = require("./http");
const Types = require("./types");
const utils_1 = require("./utils");
const endpoints_1 = require("./endpoints");
class Client {
    constructor(config) {
        this.requestOption = {};
        if (!config.channelAccessToken) {
            throw new Error("no channel access token");
        }
        this.config = config;
        this.http = new http_1.default(Object.assign({ defaultHeaders: {
                Authorization: "Bearer " + this.config.channelAccessToken,
            }, responseParser: this.parseHTTPResponse.bind(this) }, config.httpConfig));
    }
    setRequestOptionOnce(option) {
        this.requestOption = option;
    }
    generateRequestConfig() {
        const config = { headers: {} };
        if (this.requestOption.retryKey) {
            config.headers["X-Line-Retry-Key"] = this.requestOption.retryKey;
        }
        // clear requestOption
        this.requestOption = {};
        return config;
    }
    parseHTTPResponse(response) {
        const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
        let resBody = Object.assign({}, response.data);
        if (response.headers[LINE_REQUEST_ID_HTTP_HEADER_NAME]) {
            resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] =
                response.headers[LINE_REQUEST_ID_HTTP_HEADER_NAME];
        }
        return resBody;
    }
    pushMessage(to, messages, notificationDisabled = false) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/message/push`, {
            messages: utils_1.toArray(messages),
            to,
            notificationDisabled,
        }, this.generateRequestConfig());
    }
    replyMessage(replyToken, messages, notificationDisabled = false) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/message/reply`, {
            messages: utils_1.toArray(messages),
            replyToken,
            notificationDisabled,
        });
    }
    async multicast(to, messages, notificationDisabled = false) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/message/multicast`, {
            messages: utils_1.toArray(messages),
            to,
            notificationDisabled,
        }, this.generateRequestConfig());
    }
    async narrowcast(messages, recipient, filter, limit, notificationDisabled) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/message/narrowcast`, {
            messages: utils_1.toArray(messages),
            recipient,
            filter,
            limit,
            notificationDisabled,
        }, this.generateRequestConfig());
    }
    async broadcast(messages, notificationDisabled = false) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/message/broadcast`, {
            messages: utils_1.toArray(messages),
            notificationDisabled,
        }, this.generateRequestConfig());
    }
    async getProfile(userId) {
        const profile = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/profile/${userId}`);
        return utils_1.ensureJSON(profile);
    }
    async getChatMemberProfile(chatType, chatId, userId) {
        const profile = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/${chatType}/${chatId}/member/${userId}`);
        return utils_1.ensureJSON(profile);
    }
    async getGroupMemberProfile(groupId, userId) {
        return this.getChatMemberProfile("group", groupId, userId);
    }
    async getRoomMemberProfile(roomId, userId) {
        return this.getChatMemberProfile("room", roomId, userId);
    }
    async getChatMemberIds(chatType, chatId) {
        let memberIds = [];
        let start;
        do {
            const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/${chatType}/${chatId}/members/ids`, start ? { start } : null);
            utils_1.ensureJSON(res);
            memberIds = memberIds.concat(res.memberIds);
            start = res.next;
        } while (start);
        return memberIds;
    }
    async getGroupMemberIds(groupId) {
        return this.getChatMemberIds("group", groupId);
    }
    async getRoomMemberIds(roomId) {
        return this.getChatMemberIds("room", roomId);
    }
    async getBotFollowersIds() {
        let userIds = [];
        let start;
        do {
            const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/followers/ids`, start ? { start, limit: 1000 } : { limit: 1000 });
            utils_1.ensureJSON(res);
            userIds = userIds.concat(res.userIds);
            start = res.next;
        } while (start);
        return userIds;
    }
    async getGroupMembersCount(groupId) {
        const groupMemberCount = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/group/${groupId}/members/count`);
        return utils_1.ensureJSON(groupMemberCount);
    }
    async getRoomMembersCount(roomId) {
        const roomMemberCount = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/room/${roomId}/members/count`);
        return utils_1.ensureJSON(roomMemberCount);
    }
    async getGroupSummary(groupId) {
        const groupSummary = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/group/${groupId}/summary`);
        return utils_1.ensureJSON(groupSummary);
    }
    async getMessageContent(messageId) {
        return this.http.getStream(`${endpoints_1.DATA_API_PREFIX}/message/${messageId}/content`);
    }
    leaveChat(chatType, chatId) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/${chatType}/${chatId}/leave`);
    }
    async leaveGroup(groupId) {
        return this.leaveChat("group", groupId);
    }
    async leaveRoom(roomId) {
        return this.leaveChat("room", roomId);
    }
    async getRichMenu(richMenuId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/${richMenuId}`);
        return utils_1.ensureJSON(res);
    }
    async createRichMenu(richMenu) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu`, richMenu);
        return utils_1.ensureJSON(res).richMenuId;
    }
    async deleteRichMenu(richMenuId) {
        return this.http.delete(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/${richMenuId}`);
    }
    async getRichMenuAliasList() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/alias/list`);
        return utils_1.ensureJSON(res);
    }
    async getRichMenuAlias(richMenuAliasId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/alias/${richMenuAliasId}`);
        return utils_1.ensureJSON(res);
    }
    async createRichMenuAlias(richMenuId, richMenuAliasId) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/alias`, {
            richMenuId,
            richMenuAliasId,
        });
        return utils_1.ensureJSON(res);
    }
    async deleteRichMenuAlias(richMenuAliasId) {
        const res = this.http.delete(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/alias/${richMenuAliasId}`);
        return utils_1.ensureJSON(res);
    }
    async updateRichMenuAlias(richMenuAliasId, richMenuId) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/alias/${richMenuAliasId}`, {
            richMenuId,
        });
        return utils_1.ensureJSON(res);
    }
    async getRichMenuIdOfUser(userId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/user/${userId}/richmenu`);
        return utils_1.ensureJSON(res).richMenuId;
    }
    async linkRichMenuToUser(userId, richMenuId) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/user/${userId}/richmenu/${richMenuId}`);
    }
    async unlinkRichMenuFromUser(userId) {
        return this.http.delete(`${endpoints_1.MESSAGING_API_PREFIX}/user/${userId}/richmenu`);
    }
    async linkRichMenuToMultipleUsers(richMenuId, userIds) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/bulk/link`, {
            richMenuId,
            userIds,
        });
    }
    async unlinkRichMenusFromMultipleUsers(userIds) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/bulk/unlink`, {
            userIds,
        });
    }
    async getRichMenuImage(richMenuId) {
        return this.http.getStream(`${endpoints_1.DATA_API_PREFIX}/richmenu/${richMenuId}/content`);
    }
    async setRichMenuImage(richMenuId, data, contentType) {
        return this.http.postBinary(`${endpoints_1.DATA_API_PREFIX}/richmenu/${richMenuId}/content`, data, contentType);
    }
    async getRichMenuList() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/richmenu/list`);
        return utils_1.ensureJSON(res).richmenus;
    }
    async setDefaultRichMenu(richMenuId) {
        return this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/user/all/richmenu/${richMenuId}`);
    }
    async getDefaultRichMenuId() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/user/all/richmenu`);
        return utils_1.ensureJSON(res).richMenuId;
    }
    async deleteDefaultRichMenu() {
        return this.http.delete(`${endpoints_1.MESSAGING_API_PREFIX}/user/all/richmenu`);
    }
    async getLinkToken(userId) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/user/${userId}/linkToken`);
        return utils_1.ensureJSON(res).linkToken;
    }
    async getNumberOfSentReplyMessages(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/delivery/reply?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfSentPushMessages(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/delivery/push?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfSentMulticastMessages(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/delivery/multicast?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getNarrowcastProgress(requestId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/progress/narrowcast?requestId=${requestId}`);
        return utils_1.ensureJSON(res);
    }
    async getTargetLimitForAdditionalMessages() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/quota`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfMessagesSentThisMonth() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/quota/consumption`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfSentBroadcastMessages(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/message/delivery/broadcast?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfMessageDeliveries(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/insight/message/delivery?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getNumberOfFollowers(date) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/insight/followers?date=${date}`);
        return utils_1.ensureJSON(res);
    }
    async getFriendDemographics() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/insight/demographic`);
        return utils_1.ensureJSON(res);
    }
    async getUserInteractionStatistics(requestId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/insight/message/event?requestId=${requestId}`);
        return utils_1.ensureJSON(res);
    }
    async createUploadAudienceGroup(uploadAudienceGroup) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/upload`, Object.assign({}, uploadAudienceGroup));
        return utils_1.ensureJSON(res);
    }
    async createUploadAudienceGroupByFile(uploadAudienceGroup) {
        const file = await this.http.toBuffer(uploadAudienceGroup.file);
        const body = utils_1.createMultipartFormData(Object.assign(Object.assign({}, uploadAudienceGroup), { file }));
        const res = await this.http.post(`${endpoints_1.DATA_API_PREFIX}/audienceGroup/upload/byFile`, body, {
            headers: body.getHeaders(),
        });
        return utils_1.ensureJSON(res);
    }
    async updateUploadAudienceGroup(uploadAudienceGroup, 
    // for set request timeout
    httpConfig) {
        const res = await this.http.put(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/upload`, Object.assign({}, uploadAudienceGroup), httpConfig);
        return utils_1.ensureJSON(res);
    }
    async updateUploadAudienceGroupByFile(uploadAudienceGroup, 
    // for set request timeout
    httpConfig) {
        const file = await this.http.toBuffer(uploadAudienceGroup.file);
        const body = utils_1.createMultipartFormData(Object.assign(Object.assign({}, uploadAudienceGroup), { file }));
        const res = await this.http.put(`${endpoints_1.DATA_API_PREFIX}/audienceGroup/upload/byFile`, body, Object.assign({ headers: body.getHeaders() }, httpConfig));
        return utils_1.ensureJSON(res);
    }
    async createClickAudienceGroup(clickAudienceGroup) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/click`, Object.assign({}, clickAudienceGroup));
        return utils_1.ensureJSON(res);
    }
    async createImpAudienceGroup(impAudienceGroup) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/imp`, Object.assign({}, impAudienceGroup));
        return utils_1.ensureJSON(res);
    }
    async setDescriptionAudienceGroup(description, audienceGroupId) {
        const res = await this.http.put(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/${audienceGroupId}/updateDescription`, {
            description,
        });
        return utils_1.ensureJSON(res);
    }
    async deleteAudienceGroup(audienceGroupId) {
        const res = await this.http.delete(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/${audienceGroupId}`);
        return utils_1.ensureJSON(res);
    }
    async getAudienceGroup(audienceGroupId) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/${audienceGroupId}`);
        return utils_1.ensureJSON(res);
    }
    async getAudienceGroups(page, description, status, size, createRoute, includesExternalPublicGroups) {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/list`, {
            page,
            description,
            status,
            size,
            createRoute,
            includesExternalPublicGroups,
        });
        return utils_1.ensureJSON(res);
    }
    async getAudienceGroupAuthorityLevel() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/authorityLevel`);
        return utils_1.ensureJSON(res);
    }
    async changeAudienceGroupAuthorityLevel(authorityLevel) {
        const res = await this.http.put(`${endpoints_1.MESSAGING_API_PREFIX}/audienceGroup/authorityLevel`, { authorityLevel });
        return utils_1.ensureJSON(res);
    }
    async getBotInfo() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/info`);
        return utils_1.ensureJSON(res);
    }
    async setWebhookEndpointUrl(endpoint) {
        return this.http.put(`${endpoints_1.MESSAGING_API_PREFIX}/channel/webhook/endpoint`, { endpoint });
    }
    async getWebhookEndpointInfo() {
        const res = await this.http.get(`${endpoints_1.MESSAGING_API_PREFIX}/channel/webhook/endpoint`);
        return utils_1.ensureJSON(res);
    }
    async testWebhookEndpoint(endpoint) {
        const res = await this.http.post(`${endpoints_1.MESSAGING_API_PREFIX}/channel/webhook/test`, { endpoint });
        return utils_1.ensureJSON(res);
    }
}
exports.default = Client;
class OAuth {
    constructor() {
        this.http = new http_1.default();
    }
    issueAccessToken(client_id, client_secret) {
        return this.http.postForm(`${endpoints_1.OAUTH_BASE_PREFIX}/accessToken`, {
            grant_type: "client_credentials",
            client_id,
            client_secret,
        });
    }
    revokeAccessToken(access_token) {
        return this.http.postForm(`${endpoints_1.OAUTH_BASE_PREFIX}/revoke`, { access_token });
    }
    verifyAccessToken(access_token) {
        return this.http.get(`${endpoints_1.OAUTH_BASE_PREFIX_V2_1}/verify`, { access_token });
    }
    verifyIdToken(id_token, client_id, nonce, user_id) {
        return this.http.postForm(`${endpoints_1.OAUTH_BASE_PREFIX}/verify`, {
            id_token,
            client_id,
            nonce,
            user_id,
        });
    }
    issueChannelAccessTokenV2_1(client_assertion) {
        return this.http.postForm(`${endpoints_1.OAUTH_BASE_PREFIX_V2_1}/token`, {
            grant_type: "client_credentials",
            client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
            client_assertion,
        });
    }
    getChannelAccessTokenKeyIdsV2_1(client_assertion) {
        return this.http.get(`${endpoints_1.OAUTH_BASE_PREFIX_V2_1}/tokens/kid`, {
            client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
            client_assertion,
        });
    }
    revokeChannelAccessTokenV2_1(client_id, client_secret, access_token) {
        return this.http.postForm(`${endpoints_1.OAUTH_BASE_PREFIX_V2_1}/revoke`, {
            client_id,
            client_secret,
            access_token,
        });
    }
}
exports.OAuth = OAuth;
