import query from './query';
import requestAll from './requestAll';
import { LiffModule } from '@liff/use';
export * from './attachChecker';
interface PermissionMethods {
    query: typeof query;
    requestAll: typeof requestAll;
}
export interface ExtendLiffCore {
    permission: PermissionMethods;
}
export declare class PermissionModule extends LiffModule<PermissionMethods, never, unknown> {
    get name(): string;
    install(): PermissionMethods;
}
export declare const module: PermissionModule;
