export interface ReceiveEvent extends MessageEvent {
    data: {
        name: string;
        body: {} | {}[];
    };
}
export declare function verifyCallback(name: string, callback: Function, targetOrigin: string): (event: ReceiveEvent) => void;
export declare function messageReceive(target: Window, name: string, callback: Function, targetOrigin: string): void;
