import { PERMISSION_NAMES } from '@liff/consts';
import { ElementType } from '@liff/util';
export type Permission = ElementType<typeof PERMISSION_NAMES>;
export default function isPermissionAvailable(permission: Permission): boolean;
