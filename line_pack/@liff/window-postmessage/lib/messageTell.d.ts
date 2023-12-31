export interface TellEvent extends MessageEvent {
    data: {
        name: string;
        body: {} | {}[];
    };
}
export declare function messageTell(target: Window, name: string, body: {} | undefined, targetOrigin: string): void;
