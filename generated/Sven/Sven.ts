// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CardAdded extends ethereum.Event {
  get params(): CardAdded__Params {
    return new CardAdded__Params(this);
  }
}

export class CardAdded__Params {
  _event: CardAdded;

  constructor(event: CardAdded) {
    this._event = event;
  }

  get card(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get points(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Redeemed extends ethereum.Event {
  get params(): Redeemed__Params {
    return new Redeemed__Params(this);
  }
}

export class Redeemed__Params {
  _event: Redeemed;

  constructor(event: Redeemed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Sven extends ethereum.SmartContract {
  static bind(address: Address): Sven {
    return new Sven("Sven", address);
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cards(param0: BigInt): BigInt {
    let result = super.call("cards", "cards(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_cards(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cards", "cards(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earned(account: Address): BigInt {
    let result = super.call("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_earned(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastUpdateTime(param0: Address): BigInt {
    let result = super.call(
      "lastUpdateTime",
      "lastUpdateTime(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_lastUpdateTime(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdateTime",
      "lastUpdateTime(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  meme(): Address {
    let result = super.call("meme", "meme():(address)", []);

    return result[0].toAddress();
  }

  try_meme(): ethereum.CallResult<Address> {
    let result = super.tryCall("meme", "meme():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  memes(): Address {
    let result = super.call("memes", "memes():(address)", []);

    return result[0].toAddress();
  }

  try_memes(): ethereum.CallResult<Address> {
    let result = super.tryCall("memes", "memes():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  periodStart(): BigInt {
    let result = super.call("periodStart", "periodStart():(uint256)", []);

    return result[0].toBigInt();
  }

  try_periodStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("periodStart", "periodStart():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  points(param0: Address): BigInt {
    let result = super.call("points", "points(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_points(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("points", "points(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _memesAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _memeAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCardCall extends ethereum.Call {
  get inputs(): AddCardCall__Inputs {
    return new AddCardCall__Inputs(this);
  }

  get outputs(): AddCardCall__Outputs {
    return new AddCardCall__Outputs(this);
  }
}

export class AddCardCall__Inputs {
  _call: AddCardCall;

  constructor(call: AddCardCall) {
    this._call = call;
  }

  get cardId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddCardCall__Outputs {
  _call: AddCardCall;

  constructor(call: AddCardCall) {
    this._call = call;
  }
}

export class ExitCall extends ethereum.Call {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get card(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
