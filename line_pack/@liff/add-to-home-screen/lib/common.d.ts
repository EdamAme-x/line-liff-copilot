export interface AddToHomeScreenParams {
    name: string;
    iconUrl: string;
    state: string;
    lineResourcePath?: string;
}
export type AddToHomeScreen = (params: AddToHomeScreenParams) => Promise<number>;
export declare const SCHEME_HEADER = "app/";
export declare const ADD_TO_HOME_SCREEN_RESULT: {
    UNKNOWN: number;
};
export declare function verification(params: AddToHomeScreenParams): boolean;
