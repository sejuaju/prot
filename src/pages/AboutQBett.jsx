import React from "react";
import Layout from "../components/layout";

function Roadmap() {
  return (
    <Layout>
      <div className="bg-primary flex flex-col items-center justify-center text-white font-semibold">
        <div className="w-full h-[15vh]"></div>
        <div className="w-full text-left flex flex-col space-y-5 p-12 text-[1.25rem]">
          {/* Phase 1 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 1</div>
            <ul>
              <li>Built The Community</li>
              <li>Initial Marketing</li>
              <li>Deploying The Contract</li>
              <li>FireLaunch On Pancakeswap</li>
              <li>Roadmap released</li>
            </ul>
          </div>
          {/* Phase 2 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 2</div>
            <ul>
              <li>Website released</li>
              <li>Built Staking</li>
              <li>Staking Released</li>
              <li>Marketing Campaign</li>
              <li>Shilling Contest</li>
            </ul>
          </div>
          {/* Phase 3 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 3</div>
            <ul>
              <li>Start Built the POS Explore</li>
              <li>Testnet about POS</li>
              <li>Released The Explore</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          {/* Phase 4 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 4</div>
            <ul>
              <li>1000 Holders</li>
              <li>Build The Bridge Multichain</li>
              <li>Apply To Coingecko</li>
              <li>Apply To Coinmarketcap</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          {/* Phase 5 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 5</div>
            <ul>
              <li>Start Build The Farming</li>
              <li>Testnet Farming & Multichain</li>
              <li>Farming Released</li>
              <li>3000 Holders</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          {/* Phase 6 */}
          <div className="flex flex-col space-y-3">
            <div className="font-semibold text-[1.5rem]">Phase 6</div>
            <ul>
              <li>Bridge / Swap Released</li>
              <li>5000 Holders</li>
              <li>Apply To Cex Listing</li>
              <li>0% Tax Buy/Sell</li>
              <li>Contract Reannounced</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;
