// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stake", id.toString(), this);
  }

  static load(id: string): Stake | null {
    return store.get("Stake", id) as Stake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NFT entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NFT entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NFT", id.toString(), this);
  }

  static load(id: string): NFT | null {
    return store.get("NFT", id) as NFT | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get card(): string {
    let value = this.get("card");
    return value.toString();
  }

  set card(value: string) {
    this.set("card", Value.fromString(value));
  }

  get mintedBy(): string {
    let value = this.get("mintedBy");
    return value.toString();
  }

  set mintedBy(value: string) {
    this.set("mintedBy", Value.fromString(value));
  }

  get mintedTimestamp(): BigInt {
    let value = this.get("mintedTimestamp");
    return value.toBigInt();
  }

  set mintedTimestamp(value: BigInt) {
    this.set("mintedTimestamp", Value.fromBigInt(value));
  }
}

export class Card extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Card entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Card entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Card", id.toString(), this);
  }

  static load(id: string): Card | null {
    return store.get("Card", id) as Card | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get pineappleCost(): BigInt {
    let value = this.get("pineappleCost");
    return value.toBigInt();
  }

  set pineappleCost(value: BigInt) {
    this.set("pineappleCost", Value.fromBigInt(value));
  }
}
