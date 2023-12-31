import { Config } from '@liff/types';
interface ConfigInStore extends Partial<Config> {
    redirectUri?: string;
}
declare global {
    interface Window {
        __liffConfig?: ConfigInStore;
    }
}
export declare function getConfig(): ConfigInStore;
export declare function setConfig(value: ConfigInStore): void;
export {};
