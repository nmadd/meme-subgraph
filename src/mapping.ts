import { CardAdded, Staked, Withdrawn} from '../generated/Sven/Sven'
import { TransferSingle} from '../generated/MemeLtd/MemeLtd'
import { Stake, User, NFT, Card } from '../generated/schema'
import { Address, Bytes, BigInt, log } from '@graphprotocol/graph-ts'

export function handleCardAdded(event: CardAdded): void {
  let id = event.params.card
  let card = new Card(id.toString())
  card.pineappleCost = event.params.points
  card.pool = event.transaction.to as Bytes
  card.save()
}

export function handleStaked(event: Staked): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let stake = new Stake(id)
  getOrCreateUser(event.params.user)
  stake.user = event.params.user.toHex()
  stake.amount = event.params.amount
  stake.timestamp = event.block.timestamp
  stake.pool = event.transaction.to as Bytes
  stake.transactionHash = event.transaction.hash.toString()
  stake.save()
}

export function handleWithdrawn(event: Withdrawn): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let stake = new Stake(id)
  stake.user = event.params.user.toHex()
  /// Unstake event amounts are represented as negative balances 
  stake.amount = -(event.params.amount as BigInt)
  stake.timestamp = event.block.timestamp
  stake.pool = event.transaction.to as Bytes
  stake.transactionHash = event.transaction.hash.toString()
  stake.save()
}

// Card is minted as a new NFT
export function handleTransferSingle(event: TransferSingle): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let nft = new NFT(id)
  let card_id = event.params._id
  let card = Card.load(card_id.toString())
  nft.mintedBy = event.params._to.toHex()
  nft.mintedTimestamp = event.block.timestamp
  nft.card = card_id.toString()
  nft.transactionHash = event.transaction.hash.toString()
  nft.save()
}

function getOrCreateUser(address: Address): User {
  let userAddress = address.toHex()
  let user = User.load(userAddress)

  if (user == null) {
    user = new User(userAddress)
    user.address = address
    user.save()
  }

  return user as User
}


////
// Does this even need an event handler, or is it covered by handleTransferSingle?
////
// Pineapples are redeemed for an NFT
// export function handleRedeemed(event: Redeemed): void {
//   let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   let nft = new NFT(id)
//   nft.mintedBy = event.params.user
//   stake.amount = event.params.amount
//   stake.save()
// }


