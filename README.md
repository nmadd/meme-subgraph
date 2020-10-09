# Don't Buy MEME Subgraph
Subgraph for [Don't Buy Meme](https://dontbuymeme.com/)

## Contracts Info
- GenesisPool: 0xaD97C2fcca6Bc28dD2Dd20F6C28aB76Ab35D3601
- LPGenesisPool: 0x3321568445206E9311565A2C5397FC776BA71dde
- Sven: 0x7e7b4509e4ee79d27ddf969deed261d4754ec395
    - CardAdded(card,points) 
    - Redeemed(address,amount) - address of card minter, amount in pineapples
    - Staked(user,amount) address of staker, amount in MEME
    - Withdrawn(user,amount)
- MemeLtd: 0xe4605d46fd0b3f8329d936a8b258d69276cba264
    - URI(_uri,_id)
    - TransferSingle(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _amount) 
        - Emitted when an NFT card is redeemed
        - _operator is the contract of the card's pool 
        - _id is card id 
        - _amount is quantity of cards
    - TransferBatch(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _amounts);

