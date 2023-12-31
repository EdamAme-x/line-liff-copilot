/// <reference types="node" />
import { Readable } from "stream";
import * as Types from "./types";
import { AxiosRequestConfig } from "axios";
declare type RequestOption = {
    retryKey: string;
};
export default class Client {
    config: Types.ClientConfig;
    private http;
    private requestOption;
    constructor(config: Types.ClientConfig);
    setRequestOptionOnce(option: Partial<RequestOption>): void;
    private generateRequestConfig;
    private parseHTTPResponse;
    pushMessage(to: string, messages: Types.Message | Types.Message[], notificationDisabled?: boolean): Promise<Types.MessageAPIResponseBase>;
    replyMessage(replyToken: string, messages: Types.Message | Types.Message[], notificationDisabled?: boolean): Promise<Types.MessageAPIResponseBase>;
    multicast(to: string[], messages: Types.Message | Types.Message[], notificationDisabled?: boolean): Promise<Types.MessageAPIResponseBase>;
    narrowcast(messages: Types.Message | Types.Message[], recipient?: Types.ReceieptObject, filter?: {
        demographic: Types.DemographicFilterObject;
    }, limit?: {
        max?: number;
        upToRemainingQuota?: boolean;
    }, notificationDisabled?: boolean): Promise<Types.MessageAPIResponseBase>;
    broadcast(messages: Types.Message | Types.Message[], notificationDisabled?: boolean): Promise<Types.MessageAPIResponseBase>;
    getProfile(userId: string): Promise<Types.Profile>;
    private getChatMemberProfile;
    getGroupMemberProfile(groupId: string, userId: string): Promise<Types.Profile>;
    getRoomMemberProfile(roomId: string, userId: string): Promise<Types.Profile>;
    private getChatMemberIds;
    getGroupMemberIds(groupId: string): Promise<string[]>;
    getRoomMemberIds(roomId: string): Promise<string[]>;
    getBotFollowersIds(): Promise<string[]>;
    getGroupMembersCount(groupId: string): Promise<Types.MembersCountResponse>;
    getRoomMembersCount(roomId: string): Promise<Types.MembersCountResponse>;
    getGroupSummary(groupId: string): Promise<Types.GroupSummaryResponse>;
    getMessageContent(messageId: string): Promise<Readable>;
    private leaveChat;
    leaveGroup(groupId: string): Promise<any>;
    leaveRoom(roomId: string): Promise<any>;
    getRichMenu(richMenuId: string): Promise<Types.RichMenuResponse>;
    createRichMenu(richMenu: Types.RichMenu): Promise<string>;
    deleteRichMenu(richMenuId: string): Promise<any>;
    getRichMenuAliasList(): Promise<Types.GetRichMenuAliasListResponse>;
    getRichMenuAlias(richMenuAliasId: string): Promise<Types.GetRichMenuAliasResponse>;
    createRichMenuAlias(richMenuId: string, richMenuAliasId: string): Promise<{}>;
    deleteRichMenuAlias(richMenuAliasId: string): Promise<{}>;
    updateRichMenuAlias(richMenuAliasId: string, richMenuId: string): Promise<{}>;
    getRichMenuIdOfUser(userId: string): Promise<string>;
    linkRichMenuToUser(userId: string, richMenuId: string): Promise<any>;
    unlinkRichMenuFromUser(userId: string): Promise<any>;
    linkRichMenuToMultipleUsers(richMenuId: string, userIds: string[]): Promise<any>;
    unlinkRichMenusFromMultipleUsers(userIds: string[]): Promise<any>;
    getRichMenuImage(richMenuId: string): Promise<Readable>;
    setRichMenuImage(richMenuId: string, data: Buffer | Readable, contentType?: string): Promise<any>;
    getRichMenuList(): Promise<Array<Types.RichMenuResponse>>;
    setDefaultRichMenu(richMenuId: string): Promise<{}>;
    getDefaultRichMenuId(): Promise<string>;
    deleteDefaultRichMenu(): Promise<{}>;
    getLinkToken(userId: string): Promise<string>;
    getNumberOfSentReplyMessages(date: string): Promise<Types.NumberOfMessagesSentResponse>;
    getNumberOfSentPushMessages(date: string): Promise<Types.NumberOfMessagesSentResponse>;
    getNumberOfSentMulticastMessages(date: string): Promise<Types.NumberOfMessagesSentResponse>;
    getNarrowcastProgress(requestId: string): Promise<Types.NarrowcastProgressResponse>;
    getTargetLimitForAdditionalMessages(): Promise<Types.TargetLimitForAdditionalMessages>;
    getNumberOfMessagesSentThisMonth(): Promise<Types.NumberOfMessagesSentThisMonth>;
    getNumberOfSentBroadcastMessages(date: string): Promise<Types.NumberOfMessagesSentResponse>;
    getNumberOfMessageDeliveries(date: string): Promise<Types.NumberOfMessageDeliveriesResponse>;
    getNumberOfFollowers(date: string): Promise<Types.NumberOfFollowersResponse>;
    getFriendDemographics(): Promise<Types.FriendDemographics>;
    getUserInteractionStatistics(requestId: string): Promise<Types.UserInteractionStatistics>;
    createUploadAudienceGroup(uploadAudienceGroup: {
        description: string;
        isIfaAudience?: boolean;
        audiences?: {
            id: string;
        }[];
        uploadDescription?: string;
    }): Promise<{
        audienceGroupId: number;
        type: string;
        description: string;
        created: number;
    }>;
    createUploadAudienceGroupByFile(uploadAudienceGroup: {
        description: string;
        isIfaAudience?: boolean;
        uploadDescription?: string;
        file: Buffer | Readable;
    }): Promise<{
        audienceGroupId: number;
        type: "UPLOAD";
        description: string;
        created: number;
    }>;
    updateUploadAudienceGroup(uploadAudienceGroup: {
        audienceGroupId: number;
        description?: string;
        uploadDescription?: string;
        audiences: {
            id: string;
        }[];
    }, httpConfig?: Partial<AxiosRequestConfig>): Promise<{}>;
    updateUploadAudienceGroupByFile(uploadAudienceGroup: {
        audienceGroupId: number;
        uploadDescription?: string;
        file: Buffer | Readable;
    }, httpConfig?: Partial<AxiosRequestConfig>): Promise<{}>;
    createClickAudienceGroup(clickAudienceGroup: {
        description: string;
        requestId: string;
        clickUrl?: string;
    }): Promise<{
        audienceGroupId: number;
        type: string;
        created: number;
    } & {
        description: string;
        requestId: string;
        clickUrl?: string;
    }>;
    createImpAudienceGroup(impAudienceGroup: {
        requestId: string;
        description: string;
    }): Promise<{
        audienceGroupId: number;
        type: string;
        created: number;
    } & {
        requestId: string;
        description: string;
    }>;
    setDescriptionAudienceGroup(description: string, audienceGroupId: string): Promise<{}>;
    deleteAudienceGroup(audienceGroupId: string): Promise<{}>;
    getAudienceGroup(audienceGroupId: string): Promise<Types.AudienceGroup>;
    getAudienceGroups(page: number, description?: string, status?: Types.AudienceGroupStatus, size?: number, createRoute?: Types.AudienceGroupCreateRoute, includesExternalPublicGroups?: boolean): Promise<{
        audienceGroups: Types.AudienceGroups;
        hasNextPage: boolean;
        totalCount: number;
        readWriteAudienceGroupTotalCount: number;
        page: number;
        size: number;
    }>;
    getAudienceGroupAuthorityLevel(): Promise<{
        authorityLevel: Types.AudienceGroupAuthorityLevel;
    }>;
    changeAudienceGroupAuthorityLevel(authorityLevel: Types.AudienceGroupAuthorityLevel): Promise<{}>;
    getBotInfo(): Promise<Types.BotInfoResponse>;
    setWebhookEndpointUrl(endpoint: string): Promise<{}>;
    getWebhookEndpointInfo(): Promise<Types.WebhookEndpointInfoResponse>;
    testWebhookEndpoint(endpoint?: string): Promise<Types.TestWebhookEndpointResponse>;
}
export declare class OAuth {
    private http;
    constructor();
    issueAccessToken(client_id: string, client_secret: string): Promise<Types.ChannelAccessToken>;
    revokeAccessToken(access_token: string): Promise<{}>;
    verifyAccessToken(access_token: string): Promise<Types.VerifyAccessToken>;
    verifyIdToken(id_token: string, client_id: string, nonce?: string, user_id?: string): Promise<Types.VerifyIDToken>;
    issueChannelAccessTokenV2_1(client_assertion: string): Promise<Types.ChannelAccessToken>;
    getChannelAccessTokenKeyIdsV2_1(client_assertion: string): Promise<{
        key_ids: string[];
    }>;
    revokeChannelAccessTokenV2_1(client_id: string, client_secret: string, access_token: string): Promise<{}>;
}
export {};
