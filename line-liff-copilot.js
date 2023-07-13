/**
 * @Author amex / @macl2189
 * @Repo "https://github.com/EdamAme-x/line-liff-copliot"
 * @Version 1.00
 * @For LINE LIFF SDK
 * @Contact "https://twitter.com/macl2189"
 */

'use strict';

class LiffCopilot {
    /**
     * @rule {variable} _{variableName}
     * @param {string} _liffid liffid
     * @param {boolean} _debug エラーメッセージ・デバッグメッセージを表示するか
     * @param {function} _callback 初期化時に呼び出すコールバック関数
     */
    constructor(_liffid, _debug, _callback) {
        this.liffid = _liffid;
        this.debug = _debug;

        liff.init({
            liffId: this.liffid, // liffid
            withLoginOnExternalBrowser: true // 外部ブラウザの際自動ログイン
        }).then(() => {
            this.init(_callback);
        }).catch((err) => {
            this.error("LIFF-COPILOT | Error \n" , err);
        })
    }

    /**
     * @param {function} init liff初期化時に呼び出し
     * @param {function} _callback 初期化時に呼び出すコールバック関数
     */
    init(_callback) {
        if (_callback) {
            _callback();
        } // 存在するなら

        // 情報を取得
        this.State = liff.state; // URLに指定した情報(クエリ)
        if (true) {
            this.BeforeURL = "https://twitter.com/macl2189";
        } // LIFFに遷移する前のURL
        this.OS = liff.getOS(); // OS => ios | android | ...
        this.Lang = liff.getLanguage(); // LINEの使用言語 => ja | en | ...
        this.Version = liff.getVersion(); // LIFFのバージョン 2.21.4 | X.XX.X | ...
        this.LineVersion = liff.getLineVersion(); // LINEのバージョン 13.10.0 | XX.XX.X | ...
        this.InClient = liff.isInClient(); // LIFFブラウザ上で動作しているか。
        this.InLogin = liff.isLoggedIn(); // LIFFブラウザ上でログインしているか。 true | false
        this.AccessToken = liff.getAccessToken(); // LIFFブラウザ上でログインしている生IDToken　ブラウザを消すとリセット
        this.IDToken = liff.getIDToken(); // LIFFブラウザ上でログインしているIDToken @near AccessToken

        this.Friendship = liff.getFriendship(); // liffを1VS1で開いている場合に友達で有るかを返す

        // ユーザーの情報 for OC => Error
        this.Info = liff.getDecodedIDToken();

        //this.InfoIss = this.Info.iss; // access.line.me 用途不明
        //this.InfoSub = this.Info.sub; // mid風の物 用途不明
        //this.InfoAuth = this.Info.amr[0] // lineauthlogin 用途不明

        //this.Name = this.Info.name; // ユーザーの名前

        //this.Icon = this.Info.picture; // ユーザーのアイコンのcdnURL

        // Context
        this.Context = liff.getContext(); // LIFFブラウザが起動された場所の情報
        this.CtxType = this.Context.type; // external | internal / 外部ブラウザ　| 内部ブラウザ

        this.CtxUserID = this.Context.userId; // uid midとは異なる為注意 this.InfoSubとおそらく等しい
        this.CtxLiffID = this.Context.liffId; // liffid
        this.CtxEndpoint = this.Context.endpointUrl; // endpointUrl https://~.~/~
        this.CtxAccessToken = this.Context.accessTokenHash; // 用途不明

        this.CtxView = this.Context.viewType; // full | compact | ...
        
        // Profile
        this.Profile = {
            "uid": liff.getProfile().userId, // uid
            "name": liff.getProfile().displayName, // ユーザーの名前
            "status": liff.getProfile().statusMessage, // ユーザーのステメ
            "picture": liff.getProfile().pictureUrl, // ユーザーのアイコンのcdnURL
        }

        // Methods

        this.CanUseApi = (_apiName) => {
            return liff.isApiAvailable(_apiName); // apiが使用可能か
        }

        this.ApiInfo = (_apiName) => {
            return liff.getContext.availability[_apiName]; // apiの情報を返す {permission: true | false , minVer: XX.XX.X}
        }
        
    }

    /**
     * @param {string} message コンソールに流すメッセージ 
     * @param {function} log ログ出力
     */
    log(message) {
        if (this.debug) {
            console.log(message);
            alert("Log: " + message);
        }
    }

    /**
     * @param {string} message コンソールに流すメッセージ 
     * @param {function} error エラー出力
     */
    error(message) {
        if (this.debug) {
            console.error(message);
            alert("Error: " + message);
        }
    }

    async Send(type, message) {
        await liff.sendMessages([{
            type: type,
            text: message
        }]) // 開いている場所に送信
    } // async

    async PowerSend(array) {
        await liff.sendMessages(array)
    } // [{type: type, text: message},...]

    Share(type, message) {
        liff.shareTargetPicker([{
            type: type,
            text: message
        }])
    } // シェア処理
    
    PowerShare(array) {
        liff.shareTargetPicker(array)
    } // シェア処理 [{type: type, text: message},...]
    

    Open(url, external) {
        liff.openWindow({
            url: url,
            external: external
        });
    } // Windowを開く urlが遷移先 externalは外部ブラウザに遷移するかどうか

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
