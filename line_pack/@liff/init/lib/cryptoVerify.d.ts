import { CertKey } from './requestCerts';
export declare function cryptoVerify(pub: CertKey, encodedBuf: ArrayBuffer, signatureBuf: ArrayBuffer): Promise<boolean>;
