# Lifecycle of a Deal

Here's a high-level view of the lifecycle of an ArFleet deal:

## Assignments and Placements

When a user of ArFleet client software wants certain data stored, they queue it for storage. This is called a **Storage Assignment**, a storage job for the client.

Along with the pointer to the data to store, they specify to the client software:
- How much they are willing to pay for the storage.
- The duration of the storage.
- The redundancy factor they desire for their data to have (meaning how many copies of the data they want to be stored).

It is the client's job to match the storage assignment with providers based on the requirements, provider's availability, provider's capacity, and so on.

When a potential match between an Assignment and Provider is found, this is called a **Storage Placement**.

The goal is for each Assignment to have *N* successful Placements, where *N* is the redundancy factor of the Assignment.

## Marketplace

Clients have to find providers on the decentralized network. This could be done in a variety of ways; for convenience, ArFleet network designates a global *ao* process called **Marketplace**, which is used only as a place to discover providers and their services.

Providers use Marketplace to advertise their services to the network.

They can create, update and delete **Announcements**, which contain, at minimum:

- the version of the ArFleet protocol they are using.
- connection information (Arweave wallet address, acting as the provider's ID, and IP address/port pairs).
- the prices they offer for storage.
- the duration limits placed on new deals.
- the verification challenge duration limits placed on new deals.

Clients query Marketplace to find providers that meet their storage assignment requirements.

It is not a guarantee that such providers are:

- online
- they still have the capacity to accept new storage assignments
- they haven't changed their announcement recently.

Therefore, it is the client's responsibility to directly contact the providers to verify their availability and capacity. Once a suitable provider is identified, a placement is initiated and progresses through several stages.

## Placement States

The following is an ideal progression of a placement. Throughout this process, error handling is in place. If any step fails, the placement status may change to `FAILED` or `UNAVAILABLE`, depending on the nature of the error (`FAILED` meaning something went wrong with the steps, and `UNAVAILABLE` meaning the provider couldn't be reached or stopped responding).

1. **Creation**: A new placement is created with the status `CREATED`.

2. **Initialization**:
   - The client connects to the provider and sends a placement request.
   - If accepted, the status changes to `INITIALIZED`.
   - The client starts encrypting the data chunks.
   
   :::info
   To find more about the encryption process, see the [Replica Encryption](./30-replica-encryption.md) section.
   :::

3. **Encryption**:
   - All data chunks are encrypted.
   - A Merkle tree is calculated for the encrypted chunks.
   - The status changes to `ENCRYPTED`.

4. **Process Spawning**:
   - An *ao* process is created for the deal, based on known Module source code, adjusted for the deal parameters.
   - The status changes to `PROCESS_SPAWNED`.

5. **Funding**:
   - The client funds the deal with the required reward.
   - The status changes to `FUNDED`.

6. **Acceptance**:
   - The provider is notified to accept the funded deal.
   - If accepted, the status changes to `ACCEPTED`. At this point, the deal is atomically activated from both sides.

7. **Data Transfer**:
   - Encrypted data chunks are transferred to the provider.
   - Once all chunks are sent, the status changes to `TRANSFERRED`.

8. **Completion**:
   - The provider is requested to complete the deal setup.
   - The provider sends the required collateral.
   - The *ao* process is verified to be in the "Activated" state.
   - If successful, the status changes to `COMPLETED`.

This concludes the placement part, and the verifications start.

## Verification Challenges

After the deal is activated, the provider has to provide verification challenges to the deal process, for the duration of the deal.

For each verification challenge, the deal process generates a random bit string of "0"s and "1"s.

This string establishes a Merkle path to the chunk that the provider has to provide for verification. "0" means "go left at this branch" and "1" means "go right at this branch"; this continues until the provider hits a leaf, then the rest of the string is discarded.

The provider has to provide as verification proof:

- The Merkle path to the chunk (the actual hashes on each level).
- The chunk data.

The deal process verifies the path, starting with the root hash which is part of the deal contract, and down until the leaf. If the provided leaf data matches the hash, the challenge is considered as passed.

If the verification is unsuccessful, part of the provider's collateral is slashed.

If the provider fails to present the proof within the verification period, part of the provider's collateral is slashed.

Multiple consecutive failures can result in complete forfeiture of the collateral. This mechanism incentivizes Providers to maintain data integrity and adhere to the agreed-upon storage terms.

:::info
To see why this verification game is effective despite only requiring a small chunk at each verification step, see [Verification Game](./40-verification-game.md) section.
:::