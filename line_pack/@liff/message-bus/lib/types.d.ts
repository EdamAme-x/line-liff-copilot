import { EVENT_NAME, ACTION, WINDOW } from './consts';
export type ActionType = (typeof ACTION)[keyof typeof ACTION];
export type EventNameType = (typeof EVENT_NAME)[keyof typeof EVENT_NAME];
export type EventContext = {
    eventName: EventNameType;
    key?: string;
    data?: object | string;
};
export type EventBase = {
    timestamp: number;
    identifier: string;
    action: ActionType;
};
export interface Event extends EventBase {
    context: EventContext;
    replyTarget?: EventBase;
}
export interface EncryptedEvent extends EventBase {
    context: string;
    replyTarget?: EventBase;
}
export type EventHandler = (event: Event) => void | Promise<void>;
export type WindowType = (typeof WINDOW)[keyof typeof WINDOW];
export type Identification = {
    identifier: string;
    cryptoKey: string;
};
