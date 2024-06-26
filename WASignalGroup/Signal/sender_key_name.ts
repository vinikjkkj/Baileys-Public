import { hashCode } from "../Utils";

export class SenderKeyName {
  constructor(groupId, sender) {
    this.groupId = groupId;
    this.sender = sender;
  }

  getGroupId() {
    return this.groupId;
  }

  getSender() {
    return this.sender;
  }

  serialize() {
    return `${this.groupId}::${this.sender.id}::${this.sender.deviceId}`;
  }

  toString() {
    return this.serialize();
  }

  equals(other) {
    if (other === null) return false;
    if (!(other instanceof SenderKeyName)) return false;
    return this.groupId === other.groupId && this.sender.toString() === other.sender.toString();
  }

  hashCode() {
    return hashCode(this.groupId) ^ hashCode(this.sender.toString());
  }
}
