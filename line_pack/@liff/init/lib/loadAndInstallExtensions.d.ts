import { ExtendableKeys, PermissionChecker } from '@liff/extensions';
export declare const permissionCheckers: Record<ExtendableKeys, PermissionChecker>;
export declare function loadAndInstallExtensions(liff: unknown): Promise<void>;
