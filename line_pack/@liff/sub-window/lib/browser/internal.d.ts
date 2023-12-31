import { EventType, SubWindowMessage, PostResponse } from '../def';
import { MessageBus, WindowType } from '@liff/message-bus';
export declare const TIMER_FOR_UNEXPECTED_CLOSE = 500;
export declare function setOpenedWindow(w: Window | null): void;
export declare function getOpenedWindow(): Window | null;
export declare function setMonitorTimerId(newTimerId: number): void;
export declare function getMonitorTimerId(): number;
export declare function setHealthCheckTimerId(newTimerId: number): void;
export declare function getHealthCheckTimerId(): number;
export declare function setFetchedOrigin(origin: string): void;
export declare function getFetchedOrigin(): string;
export declare function initMessageBus(windowType?: WindowType): Promise<MessageBus>;
export declare function getMessageBus(): MessageBus | undefined;
export declare function setMainWindowOrigin(origin: string): void;
export declare function getMainWindowOrigin(): string | null;
export declare function emit(status: EventType, message?: SubWindowMessage): Promise<PostResponse>;
