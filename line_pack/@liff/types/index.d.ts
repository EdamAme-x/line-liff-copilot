// analytices
export interface AnalyticsOption {
  context: UtsRequiredContext;
  options?: UtsInitOptions;
}

export declare type UtsInitOptions = {
  endpoint?: string;
  sampleRate?: number;
  sessionDomain?: string;
  sessionDuration?: number;
  version?: string;
  logLevel?: string;
};

export declare type UtsRequiredContext = {
  utsId: string;
  appName: string;
  appEnv: string;
};

export declare class LiffUTS {
  setExtra: (name: string, options: object) => void;
  sendCustom: (options: object) => void;
  init: (context: UtsRequiredContext, options: object) => void;
  setMid: (mid: string) => void;
  setTid: (tid: string) => void;
  setSessionParams: (referrer: undefined | Record<string, string>) => void;
  setUrl: (url: string) => void;
}

// init
export interface Config {
  liffId: string;
  analytics?: AnalyticsOption;
  withLoginOnExternalBrowser?: boolean;
}

export interface LiffMenuColorSetting {
  iconColor: string;
  statusBarColor: 'BLACK' | 'WHITE';
  titleTextColor: string;
  titleSubtextColor: string;
  titleButtonColor: string;
  titleBackgroundColor: string;
  progressBarColor: string;
  progressBackgroundColor: string;
  // ARGB. Need to convert this to RGBA
  titleButtonAreaBackgroundColor: string;
  titleButtonAreaBorderColor: string;
}

// window._liff
export type _Liff = {
  features: string[];
  postMessage(
    type: string,
    featureToken: string,
    callbackId?: string,
    json?: string,
  ): void;
};

type LiffInitialProperties = {
  id: null | string;
};

// js-native bridge methods
type LiffInternalAPIs = {
  _dispatchEvent: (json: string) => void;
  _call(
    type: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
    options?: {
      callbackId?: string;
      once?: boolean;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any>;
  _addListener(type: string, callback: (e: CustomEvent) => void): void;
  _removeListener(type: string, callback: (e: CustomEvent) => void): void;
  _postMessage(type: string, params?: unknown, callbackId?: string): void;
};

// このAPIを持つタイミングはいつ？
export type InitialLiff = LiffInternalAPIs & LiffInitialProperties;
