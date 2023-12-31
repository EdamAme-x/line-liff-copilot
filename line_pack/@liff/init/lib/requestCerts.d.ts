export interface CertKey {
    kid: string;
    alg?: string;
}
interface Certs {
    keys: CertKey[];
}
export declare function requestCerts(): Promise<Certs>;
export {};
