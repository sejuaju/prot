import React from "react";
import Layout from "../components/layout";

function Whitepaper() {
  return (
    <Layout>
      <div className="w-full h-[15vh] bg-primary"></div>
      <div className="p-5 lg:p-12 bg-primary flex flex-col space-y-5 items-center justify-center text-white font-semibold">
        <div className="flex flex-col space-y-3">
          <div className="font-bold text-[1.5rem]">INTRODUCTION</div>
          <div>
            This whitepaper is addressed to our tight-knit community of
            blockchain developers, partners, and token holders to explain
            Daomerge global strategy in 2022 and beyond industry. DMG consists
            of a full suite of decentralized products and services that serve as
            the critical infrastructure behind Web3 growth. This document covers
            all aspects of DMG, including a new decentralized DMG Network, an
            updated pay-as-you-go service model, DMG token staking, DMG DAO, DMG
            Grants, DMG App Chains, DMG Gaming, and more. We've also included a
            bit of historical context about where DMG started, how we got where
            we are today, and how we are constantly evolving with the industry.
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="font-bold text-[1.5rem]">DAOMERGE STORY</div>
          <div>
            DMG was founded in 2022 with the idea of harnessing the cloud
            computing power lek idle in data centers all over the world and
            reallocating it to power bitcoin mining, node hosting, the Internet
            of Things (loT), and more. The team grew quickly and accumulated a
            global supply of bare metal servers, which enabled DMG to provide
            services like node hosting and API access. During the past two
            years, DMG shifted focus to providing the underlying node
            infrastructure for a movement that would become known as Web3. As
            Proof-of-Stake (PoS) blockchains began to ofler exciting new
            possibilities for smart contracts built on blockchain rails in the
            form of decentralized applications (dApps), DMG stepped in to serve
            the vast needs for increased node infrastructure necessary to
            develop and operate dApps. DMG combined developer infrastructure
            (full nodes) with staking infrastructure (validator nodes) as the
            development on these various blockchains went hand in hand with PoS
            security and incentives. As DMG began to focus on PoS
            infrastructure, our services increased 25- fold over the last year
            as we powered a growing portion of Web3, and we saw incredible
            expansion in a number of areas with In response to this growth, DMG
            became one of the top most- traded tokens on Pancakeswap and DMG
            became known as a critical infrastructure provider for the Web3
            stack and Proof-of-Stake networks. However, as DMG evolved alongside
            the Web3 industry, the importance of decentralization - especially
            in the infrastructure layer- has become increasingly clear. A
            dependence on centralized infrastructure creates single points of
            failure, unexpected downtimes, and an increased threat of
            censorship, which are antithetical to the core principles behind
            decentralization. As the fastest-growing infrastructure provider in
            Web3, DMG is laser-focused on decentralization utility. This means
            doing our part to transition more blockchains, and the dApps built
            on them, to more distributed and resilient node networks supported
            by independent node providers. Additionally, this means formalizing
            the system of community governance over DMG Network and upgrading
            the protocol to ensure the DMG token is the heart of the entire
            ecosystem with brand new utility.
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="font-bold text-[1.5rem]">OUR FOCUSED</div>
          <div>
            The importance of node infrastructure cannot be overstated.
            Everything that's a part of Web3 relies on nodes - including
            layer-2too blockchains, DeFi protocols, virtual worlds,
            decentralized games, and NFT projects. Therefore the growth of
            demand for reliable, secure, and efFicient node infrastructure
            should continue to increase alongside Web3 development as a whole.
            With this in mind, DMG has a clear calling: provide the node
            infrastructure necessary to make Web3 development easy and prolific.
            DMG provides the multi-chain tools and node infrastructure that
            developers need to build new projects on Web3. And we're
            accomplishing this in a way that is true to the Web3 movement, with
            the end goal of completely decentralizing infrastructure and
            governance. Providing services for these movements places DMG as a
            central utility player providing the critical infrastructure for the
            growth of Web3 as a whole. If we think of DeFi, the metaverse,
            decentralized gaming, and other Web3 industries as burgeoning new
            cities, then DMG is like an underlying power grid that makes all the
            operations possible and when these movements expand, DMG will too.
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="font-semibold text-[1.5rem]">OVERVIEWS</div>
          <div>
            DMG Network is the gateway through which Web3 developers, projects,
            and protocols connect to the node infrastructure and development
            tools they need to build Web3 applications. In the months ahead, we
            plan to improve the decentralization of the DMG Network node
            marketplace, expand the scope and variety of services ofiered
            through the protocol, remove central points of failure and promote
            consensus- based decision-making with the launch of DAO MERGE. We
            believe these changes will radically transform the DMG ecosystem,
            significantly improve the utility of DMG token, and provide
            tremendous value to the DMG community.
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="font-bold text-[1.5rem]">USECASES</div>
          <div className="flex flex-col space-y-2">
            <li className="text-[1.25rem]">STAKING</li>
            <div>
              Staking is a when you lock crypto assets for a set period of time
              to help support the operation of a blockchain. In return for
              staking your crypto, you earn more cryptocurrency.
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <li className="text-[1.25rem]">CHAIN</li>
            <div>
              A blockchain bridge, otherwise known as a cross-chain bridge,
              connects two blockchains and allows users to send cryptocurrency
              from one chain to the other. Basically, if you have bitcoin but
              want to spend it like Ethereum, you can do that through the
              bridge.
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <li className="text-[1.25rem]">POS EXPLORE</li>
            <div>
              Block explorers are one of the most important tools in a crypto
              enthusiast’s arsenal. They provide an online interface for
              searching a blockchain, and enable you to retrieve data about
              transactions, addresses, blocks, fees, and more.
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <li className="text-[1.25rem]">WALLET</li>
            <div>
              A cryptocurrency wallet is a device, physical medium, program or a
              service which stores the public and/or private keys for
              cryptocurrency transactions. In addition to this basic function of
              storing the keys, a cryptocurrency wallet more often also offers
              the functionality of encrypting and/or signing information
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Whitepaper;
