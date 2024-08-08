# Replica Encryption

This section explains how ArFleet leverages RSA encryption to encrypt data replicas.

## Introduction

The end goal of ArFleet assignment is to store data in several locations, ensuring high availability and redundancy.

Consider several solutions to this problem.

## 1: Multiple Replicas

If there are $N$ storage providers storing a replica of the data, and all of them pass verification challenges, the likelihood of the data loss is minimized.

However, this introduces a problem, known as a Sybil attack: one provider can pose as several different providers, and store the replica in one place, while getting rewards for all of them. This is undesirable, at minimum because the expectations of highly redundant storage turn out to be illusory, and because the client pays for replicas that are not actually stored.

## 2: AES encryption

An improvement over the previous solution is to encrypt each replica with a different AES key.

$$
Replica1 = AESEncrypt(Data, AESKey1)
$$
$$
Replica2 = AESEncrypt(Data, AESKey2)
$$
$$
Replica3 = AESEncrypt(Data, AESKey3)
$$
$$
...
$$
$$
ReplicaN = AESEncrypt(Data, AESKeyN)
$$

This way, all $N$ replicas look completely different both to the provider and to the deal process. It becomes impossible to save on storage, because the final replicas are not identical.

However, this precludes the provider from serving the original data, since it is encrypted and the key is not known.

The data can no longer be available publicly in applications such as decentralized social media. This mode of operation is more akin to a decentralized private Dropbox, rather than decentralized Youtube or Reddit.

### What if we publish the AES key?

If the AES key is publicly known, here's how it can compromise the redundancy guarantee:

- The provider can also access the published key
- The provider can not only use it to decrypt the original data, but can store only 1 replica of that original data + N AES keys
- When the verification challenge starts, the provider can encrypt that chunk on the fly with the required key:

$$
ReplicaX = AESEncrypt(OriginalData, AESKeyX)
$$

It brings back the original Sybil attack problem, where the provider can pose as several different providers and get rewards for all of them, while storing only one replica.

There are multiple ways to solve this problem, many of them cumbersome and requiring more complex verification setups; ArFleet uses a different approach, swapping AES for RSA.

## 3: RSA encryption

**AES** and **RSA** encryption schemes are similar in use, but belong to different categories.

**AES** is a symmetric encryption scheme, meaning the same key is used for encryption and decryption.

**RSA** is an asymmetric encryption scheme, meaning a *key pair* is generated, consisting of **a public key** and **a private key**.

### Normal RSA operation

Normally, RSA allows for 2 different modes: encryption/decryption and signing/verifying.

**RSA Encryption** is done by **encrypting** the data with the **public key**, which can be **decrypted** with the **private key**:

$$
Enc = RSAEncrypt(Data, pubkey)
$$

Only the owner of the private key can decrypt the data:

$$
Data = RSADecrypt(Enc, privkey)
$$

**RSA Signing** is done by **signing** the data with the **private key**, which can be **verified** with the **public key**:

$$
Sign = RSASign(Data, privkey)
$$

Everyone has the public key to verify that it matches the original data; however, RSA ensures that no one could have created the $Sign$ blob without the knowledge of the private key, such that it would yield the original data when decrypted with the public key:

$$
RecoveredData = RSAVerify(Sign, pubkey)
$$
$$
ExpectedData == RecoveredData
$$

### Using Sign/Verify for Replica Encryption

Mathematically, RSAEncrypt/RSADecrypt and RSASign/RSAVerify are equivalent.

ArFleet uses RSA encryption in the reverse mode: **encrypting** with the **private key** and **decrypting** with the **public key**, which is analogous to signing and verifying.

When we say we RSA encrypt the replica, it means we are signing the data with the private key, and extracting the original data with the public key. Here's how it works.

For each replica, we first encrypt it with the private key (analogous to signing):

$$
Replica1 = RSAEncrypt(Data, privkey1)
$$
$$
Replica2 = RSAEncrypt(Data, privkey2)
$$
$$
Replica3 = RSAEncrypt(Data, privkey3)
$$
$$
...
$$
$$
ReplicaN = RSAEncrypt(Data, privkeyN)
$$

The deals are signed on each packed replica separately.

### Serving the data

Unlike with AES, we can freely publish the public key, for instance by giving it directly to the providers, which allows them to serve decrypted data on the network to anyone asking for it:

$$
OriginalData = RSADecrypt(ReplicaX, pubkeyX)
$$

(operation analogous to recovering the data from a signed RSA blob)

However, unlike with AES: having 1) encrypted replica, 2) the original data, and 3) the public key is still not enough information for the colluding providers to be able to recreate replicas on the fly.

The ability to recreate such a replica on the fly from the original data would mean that the provider can independently produce such a blob $ReplicaX$, which, when RSA signature verification is applied, would yield the original data.

From RSA guarantees, we know this is not possible in practical time constraints without having access to the private key, which is kept secret by the client (and can be discarded after the replica is packed).

As such, the provider's only way to respond to the verification challenges, is to keep every replicas stored, as intended.

### Notes on RSA key strength

Since we are not using RSA here for actual encryption (keeping data secret), nor for signing (identifying data source), but only for ensuring redundancy, the RSA key strength is not a concern.

Not only the private key can be discarded after the replica is packed, but the strength of the key can be chosen to optimize for performance (note that we are not using RSA+AES hybrid mode, which means the original RSA algorithm has to be run on the whole replica).

In typical scenarios, it's possible to use significant computational resources to brute-force RSA keys, potentially compromising encrypted data.

However, in our use case, the incentives are different. Even if a provider were to successfully brute-force the key, the only benefit would be saving storage space for a few chunks.

As long as the cost of brute-forcing significantly exceeds this minimal storage benefit, the system remains secure. This unique dynamic ensures that providers are economically incentivized to store the data properly rather than attempt to circumvent the system.