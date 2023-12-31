import { Permission } from './isPermissionAvailable';
interface PermissionStatus {
    state: 'granted' | 'prompt' | 'unavailable';
}
export default function query(permission: Permission): Promise<PermissionStatus>;
export {};
