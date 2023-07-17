'use strict';

class LiffCopilot {
    constructor(_liffid, _debug, _callback) {
        this.liffid = _liffid;
        this.debug = _debug;

        liff.init({
            liffId: this.liffid,
            withLoginOnExternalBrowser: true
        }).then(() => {
            this.init(_callback);
        }).catch((err) => {
            this.error("LIFF-COPILOT | Error \n", err);
        });
    }

    init(_callback) {
        if (_callback && typeof _callback === "function") {
            _callback();
        }

        function isUse(value) {
            if (typeof value === "undefined" || value === null) {
                return false;
            } else {
                return value;
            }
        }

        this.State = liff.state;
        if (isUse(true)) {
            this.BeforeURL = "https://twitter.com/macl2189";
        }
        this.OS = liff.getOS();
        this.Lang = liff.getLanguage();
        this.Version = liff.getVersion();
        this.LineVersion = liff.getLineVersion();
        this.InClient = liff.isInClient();
        this.InLogin = liff.isLoggedIn();
        this.AccessToken = liff.getAccessToken();
        this.IDToken = liff.getIDToken();

        this.Friendship = liff.getFriendship();

        this.Info = liff.getDecodedIDToken();

        this.Context = liff.getContext();
        this.CtxType = isUse(this.Context.type);
        this.CtxUserID = isUse(this.Context.userId);
        this.CtxLiffID = isUse(this.Context.liffId);
        this.CtxEndpoint = isUse(this.Context.endpointUrl);
        this.CtxAccessToken = isUse(this.Context.accessTokenHash);
        this.CtxView = isUse(this.Context.viewType);

        this.Profile = {
            "uid": isUse(liff.getProfile().userId),
            "name": isUse(liff.getProfile().displayName),
            "status": isUse(liff.getProfile().statusMessage),
            "picture": isUse(liff.getProfile().pictureUrl)
        };

        this.CanUseApi = (_apiName) => {
            return liff.isApiAvailable(_apiName);
        };

        this.ApiInfo = (_apiName) => {
            return liff.getContext.availability[_apiName];
        };
    }

    log(message) {
        if (this.debug) {
            console.log(message);
            alert("Log: " + message);
        }
    }

    error(message) {
        if (this.debug) {
            console.error(message);
            alert("Error: " + message);
        }
    }

    async Send(message) {
        await liff.sendMessages([{
            type: "text",
            text: message
        }]);
    }

    async SendFlex(content) {
        await liff.sendMessages([{
            type: "flex",
            altText: "FlexMessage",
            contents: content
        }]);
    }

    async PowerSend(array) {
        await liff.sendMessages(array);
    }

    Share(message) {
        liff.shareTargetPicker([{
            type: "text",
            text: message
        }]);
    }

    PowerShare(array) {
        liff.shareTargetPicker(array);
    }

    Open(url, external) {
        liff.openWindow({
            url: url,
            external: external
        });
    }

    Close() {
        liff.closeWindow();
    }

    Reload() {
        window.location.reload();
    }

    Debug(text) {
        if (document.querySelector('#liff-debug')) {
            let debug_el = document.querySelectorAll('#liff-debug');

            for (let i = 0; i < debug_el.length; i++) {
                debug_el[i].innerHTML += "<br />" + text;
            }
        }
    }
}
