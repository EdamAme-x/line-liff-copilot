import { Permission } from './isPermissionAvailable';
type defaultFnType = (...args: unknown[]) => Promise<unknown>;
export declare function attachChecker<FnType extends defaultFnType>(fn: FnType, permission: Permission): FnType;
export {};
