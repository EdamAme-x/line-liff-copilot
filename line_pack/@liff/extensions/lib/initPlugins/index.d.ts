import { InitialLiff } from '@liff/types';
type PluginName = 'bluetooth';
interface PluginModule {
    default: (liff: InitialLiff) => {} | Promise<{}>;
}
export interface Plugin {
    checkSupport: (liff: InitialLiff) => boolean;
    load: () => Promise<PluginModule> | PluginModule;
    errorMessage: string;
}
export type InitPlugins = (plugins: PluginName[]) => Promise<void[]>;
export declare function createInitPlugins(liff: InitialLiff, verification?: {}): InitPlugins;
export {};
