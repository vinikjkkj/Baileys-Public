import * as curve from 'libsignal/src/curve'
import * as nodeCrypto from 'node:crypto'
import { KeyPair } from '../Types';

export function generateSenderKey() {
    return nodeCrypto.randomBytes(32);
}

export function generateSenderKeyId() {
    return nodeCrypto.randomInt(2147483647);
}

export function generateSenderSigningKey(key): KeyPair {
    if (!key) {
        key = curve.generateKeyPair();
    }

    return {
        public: key.pubKey,
        private: key.privKey,
    };
} 
