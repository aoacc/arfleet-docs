# ArFleet Protocol

ArFleet is a protocol designed to facilitate the purchase of time-limited data storage from permissionless peers, eliminating the requirement of a third-party for enforcement.

Here's a quick overview of how it works.

## Parties

ArFleet has two types of parties:

- **Provider**: A node that offers storage space and commits to storing data for a specified period.
- **Client**: An entity that needs data storage and is willing to pay for the service.

They communicate as much as possible off-chain (with Clients reaching out to Provider nodes), while using [ao](https://ao.arweave.dev/) to handle critical paths that need to minimize trust: holding collateral and rewards in *ao* processes, verifying storage proofs, and enforcing the protocol.

## Collateral, Rewards, and Deals

ArFleet monetary transactions are token-agnostic: they can use any mutually agreed-upon tokens between Provider and Client.

*Clients* purchase time-limited storage from *Providers*, and offer *rewards* in return.

*Providers* guarantee the storage of data for the duration of the storage lease, and put up *collateral*.

Both rewards and collateral are held in an *ao* process called a *Deal*.

## Verification

After a deal is activated, Provider has to continuously prove that they are storing the data for the duration of the deal.

This is done by submitting a storage proof to the Deal process.

✅ If the proof is valid and the verification challenge is passed:
   - The rewards are paid to the Provider.

❌ If the proof is invalid or not submitted within the verification interval:
   - A portion of the Provider's collateral is slashed.
   - Multiple consecutive failures can result in complete forfeiture of the collateral.

This mechanism incentivizes Providers to maintain data integrity and adhere to the agreed-upon storage terms.

All this verification happens between the Deal process and the Provider, and doesn't require the Client's involvement.