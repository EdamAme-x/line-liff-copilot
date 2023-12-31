import { EventBase, Event, EventContext, EncryptedEvent, EventHandler, ActionType, EventNameType, Identification, WindowType } from './types';
export declare const isSameEvent: (a: EventBase, b: EventBase) => boolean;
export declare const getUniqId: (event: Event | EventBase) => string;
export declare const getEventAction: (eventName: EventNameType) => ActionType;
export declare function loadMessageHandlerPage(): void;
export declare class MessageBus {
    identification: Identification;
    private messageHandlerInstance;
    private listeners;
    private sentMessages;
    private windowType;
    constructor(windowType?: WindowType);
    generateIdentification: () => Promise<void>;
    hasIdentification: () => boolean;
    isReady: () => boolean;
    setup: () => Promise<void>;
    teardown: () => Promise<void>;
    listen: (handler: EventHandler) => void;
    listenRepliedEvent: (target: Event | EncryptedEvent, handler: EventHandler) => void;
    send: (context: EventContext) => Promise<EventContext>;
    reply: (target: Event, context: EventContext) => Promise<void>;
    setData: (key: string | undefined, data: object) => void;
    getData: (key?: string) => Promise<EventContext>;
    private proxyToListeners;
    private getEncryptedContext;
    private getDecryptedContext;
}
export * from './types';
export * from './consts';
