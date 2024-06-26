import * as libsignal from 'libsignal';
import { SenderKeyRecord } from '../Signal/sender_key_record';

export type SignalStorage = {
  loadSession(id: string): Promise<libsignal.SessionRecord | undefined>;
  storeSession(id: string, session: libsignal.SessionRecord): Promise<void>;
  isTrustedIdentity(): boolean;
  loadPreKey(id: number | string): Promise<{ privKey: Buffer, pubKey: Buffer } | undefined>;
  removePreKey(id: number): Promise<void>;
  loadSignedPreKey(): { privKey: Buffer, pubKey: Buffer };
  loadSenderKey(keyId: string): Promise<SenderKeyRecord | undefined>;
  storeSenderKey(keyId: string, key: SenderKeyRecord): Promise<void>;
  getOurRegistrationId(): number;
  getOurIdentity(): { privKey: Buffer, pubKey: Buffer };
}