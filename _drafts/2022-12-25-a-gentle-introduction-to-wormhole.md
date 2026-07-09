---
layout: post
title: A gentle introduction to Wormhole
date: 1980-01-01 00:00:00 -0800
excerpt: <p>I've spent the last several months contributing to Wormhole, a web3 protocol that allows blockchains to communicate and bridge assets to one another. I've found it difficult to explain what I've been working on to my friends and family, most of whom have a rudimentary understanding of blockchains and crypto, if at all. This post is an ELI5 attempt to explain Wormhole from the ground up.</p>
permalink: /drafts/:title
---

I've spent the last several months contributing to <a style="--color: #be8ed0" href="https://wormhole.com/" target="_blank">Wormhole</a>, a web3 protocol that allows blockchains to communicate and bridge assets to one another. I've found it difficult to explain what I've been working on to my friends and family, most of whom have a rudimentary understanding of blockchains and crypto, if at all. This post is an attempt at a holistic explanation of Wormhole from the ground up.

# What is a blockchain?

It's difficult to understand what Wormhole accomplishes without knowing what a blockchain is first. Think of a blockchain as a ledger or Excel table that contains a list of accounts, their balances, and any transactions that move funds between these accounts. For example, the following diagram represents a blockchain with four accounts and eight transactions that are grouped into _blocks_. Each block is linked to the next block, forming a chain, hence the name blockchain.

<figure>
  <img src="/assets/images/basic-ledger5.svg" alt="Simple blockchain">
  <figcaption align="center">
    Fig 1. A blockchain with 3 blocks. New accounts are given 50 tokens that they can then transfer to other users. Balances update after every transaction—otherwise, Carol would not be able to send 75 tokens to Bob in block #2. Note that blocks can have any number of transactions.
  </figcaption>
</figure>

So how does a blockchain differ from a bank ledger? Because of its most important property: _decentralization_. Blockchains are stored simultaneously on many computers, called _nodes_, around the world. Because every node has a copy of the chain's history and can verify that new transactions are valid, it's impossible for a single entity to introduce invalid transactions or tamper with account balances.

Since no node can modify a blockchain by itself, let's discuss how changes are made. While it can differ from chain to chain, usually a node in the network of computers is elected through a weighted lottery and proposes a block which the rest of the network votes on. If the majority of the network agrees that the transactions are valid and achieves _consensus_, those transactions are added to the blockchain. This is powerful because it gives us shared global state that is robust against attacks by malicious actors.

<figure>
  <img src="/assets/images/consensus17.svg" alt="Consensus diagram">
  <figcaption align="center">
    Fig 2. A blockchain with three nodes achieving consensus. For brevity, blocks have one transaction. At first, a proposer broadcasts a new block C that the other nodes vote on. If the majority of nodes agree that the block is valid, it is added to the end of the chain so that all nodes share the same history.
  </figcaption>
</figure>

Many popular blockchains today, like Ethereum and Solana, enable additional functionality by allowing users to run code, called _smart contracts_, in addition to sending and receiving funds. This allows use cases such as stablecoins which allow users to transfer money instantly across borders, automated escrows (e.g. pay Bob if and only if he sends me a specific <a href="https://nftnow.com/guides/what-is-nft-meaning/" target=_blank>NFT</a>), and trustless voting.

Blockchains are useful because they allow for **trustless** and transparent interactions between multiple parties. When it comes to things like money, votes, and personal data, we can create systems and decentralized applications, _dapps_, on top of this sensitive information that are secure and fair in the absence of a centralized authority like a bank or the government. But as powerful as blockchains are, there are still some serious limitations that become apparent in a multi-chain environment.

# Why does Wormhole exist?

Imagine if every bank's ledger was independent of one another and transferring funds to yourself or someone else with an account at a different bank was impossible. This is quite literally the state of blockchain--without external infrastructure, it's impossible to transfer funds or run code across chains.

If Alice wants to use her funds on chain X to buy an NFT from Bob on chain Y, she needs to somehow move tokens from chain X to chain Y. But how does chain Y know if Alice has the tokens on chain X that she claims to? How does chain X know if those tokens have been successfully transferred so that it can prevent Alice from double spending? If an external third party mediator is involved, how do we trust that they are correct or won't steal Alice's funds?

[diagrams of things going wrong]

Wormhole allows blockchains to send **verifiable** messages to one another. This means that a dapp on chain X can take the money Alice wants to send Bob and send a message to chain Y to release an equivalent amount of funds to her. Chain Y can then verify that the message is valid and complete the bridging process, allowing Alice to transfer funds to Bob. Although it seems simple, implementing this functionality securely is quite difficult.

# How does Wormhole work?

The verifiability of messages that Wormhole sends is what makes the protocol as useful as it is. I, as an independent third party, can claim that Alice has the funds she claims to and submit a message to chain Y attesting to this, but how can chain Y verify that I'm telling the truth? Until we achieve the holy grail: completely trustless bridging powered by <a href="https://ethereum.org/en/zero-knowledge-proofs/" target="_blank">zero-knowledge proofs</a>, every cross-chain bridging solution must use a trusted third party to observe origin chains and attest to the validity of messages to be submitted to target chains.

Wormhole's implementation of this third party is the _guardian network_, a <a href="https://www.coindesk.com/learn/what-is-proof-of-authority/" target="_blank">proof-of-authority</a> network of 19 of the biggest infrastructure providers in web3. Each guardian runs a node for **every** chain that Wormhole supports and is responsible for observing those chains for messages emitted by dapps. As soon as 13 (more than 2/3rds of the 19 total) guardians have seen and attested to a message, it is submitted to the destination chain by a _relayer_. Any user or dapp can act as a relayer by taking the message from the guardian network and submitting it to the specified target chain.

[diagram]

Guardians are incentivized to be honest because they are all independent and are staking their reputations. In addition, Wormhole may potentially have a tokenomics model in the future that may be used compensate guardians for their contributions to the Wormhole network. Guardians have been carefully chosen based on their track record and standing in the community and it would take 13 of them to collude to forge a malicious message, making this third party solution much more trustworthy and robust than a single centralized entity.

# Why is Wormhole important?

Because Wormhole provides generic messaging capabilities (i.e. a blockchain can send an arbitrary verifiable message to any other supported chain), developers can build dapps on top of Wormhole that allow users to bridge their tokens and assets.

1. _Convenience_: users can bridge their assets and use their funds on one chain to interact with dapps and pay for services on _any_ chain (e.g. bridge ETH to Solana to buy an NFT or transfer SOL to Gnosis to play a game of <a href="https://zkga.me/" target="_blank">Dark Forest</a>).
2. _Developer freedom_: developers can choose chains that are performant and cheap to use instead of being forced to adopt whichever chains have the most usage. This is critical for newer chains such as Aptos and Sui that have technical infrastructure but lack users and liquidity.
3. _Scalability_: cross-chain messaging allows for the rise of blockchains with intensely specific purposes. Games like Dark Forest and oracles such as Pyth may publish millions of messages per day. Rather than broadcast these messages to every chain, dapps on other chains can use Wormhole to subscribe to the appropriate messages (e.g. game results).

Because of the delicacy of creating a secure cross-chain protocol, most cross-chain bridges are integrated with 1 or 2 ecosystems at most. However, Wormhole currently integrates with <a href="https://book.wormhole.com/dapps/architecture/2_ecosystems.html" target="_blank">**6 ecosystems**</a> and 20+ chains across all of them. As a result, Wormhole plays a pivotal role in providing a unified web3 bridging experience.

# Parting thoughts

It's not easy building protocols that facilitate the movement of trillions of dollars since they have quickly become attractive targets for hackers. In 2022 alone, almost <a href="https://www.forbes.com/sites/mariagraciasantillanalinares/2022/08/18/over-2-billion-stolen-this-year-in-blockchain-bridge-hacks-expose-defis-achilles-heel/?sh=4b31b1a0e50b" target="_blank">$2 billion was stolen from bridges</a> such as Ronin, Harmony, and Wormhole itself. As a result, working on Wormhole is quite the balancing act between security and usability.

Nevertheless, bridges are crucial infrastructure in a decentralized world.

I believe that a multi-chain future in which many prominent chains are used is inevitable. Already, some of the most popular chains are struggling to scale with the amount of activity, prompting app developers to create blockchains expressly for their app! These app-specific chains can handle much more load, but still need to be able to communicate with layer 1 blockchains such as Ethereum and Solana. Such a future is not possible without generic messaging protocols and bridges as the glue between them.

Admittedly, the audience for this post may be a bit narrow given that people looking to learn more about Wormhole typically have a good grasp of blockchain, but it's interesting to condense such a complicated project down to its core principles. I will likely write a follow up piece that dives much deeper into Wormhole, how it's implemented, and all of its technical complexity.

<a href="/writing" style="--color: #bbb;"><code style="background: none; border: none; padding: 0 2.5px 0 1px;"><<</code>Back to Writing</a>
