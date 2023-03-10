import React from "react";
import Banner from "../../../images/ColaBanner.png";
import {useNavigate} from "react-router-dom";

const Article = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center space-y-10">
        <img src={Banner} alt="Cola-Banner" />
        <h1 className="font-body text-5xl text-center max-sm:hidden">
          From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment
        </h1>

        <h1 className="font-body text-3xl pr-2 pl-2 text-center sm:hidden">
          From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment
        </h1>
      </div>

      <div className="mt-10 flex flex-col pr-14 pl-14 space-y-9">
        <p className="font-poppins">
          Coca-Cola is one of the largest beverage companies in the world, and
          like many businesses, they are always looking for new and innovative
          ways to market their products. In recent years, they have turned to
          NFTs as a way to engage with their customers and promote their brand.
          In this blog, we will explore how Coca-Cola benefited from their
          NFT-based marketing campaign. The Campaign Coca-Cola launched a
          limited edition collection of NFTs in March 2021, in partnership with
          Tafi, a 3D design and avatar company. The NFTs were based on Coke's
          iconic brand assets, such as the polar bear mascot and the contour
          bottle, and were made available for purchase on the OpenSea NFT
          marketplace. The NFTs were sold in a Dutch auction format, meaning
          that the price of each NFT would decrease over time, encouraging
          buyers to act quickly.
        </p>

        <h2 className="font-poppins text-2xl font-bold">The Metrics </h2>

        <p className="font-poppins">
          The campaign was a huge success, with all of the NFTs selling out
          within hours of their release. In total, there were 2,000 NFTs
          available, with prices ranging from 1 ETH (approximately $1,800 at the
          time) to 2.5 ETH (approximately $4,500 at the time). <br/><br/>Here are some key
          metrics from the campaign:<br/><br/>&#10003; Total sales: 1,288.5 ETH (approximately
          $1.5 million at the time) <br/>&#10003; Total buyers: 621 Average price per NFT: 1.7
          ETH (approximately $3,000 at the time) <br/>&#10003; Top-selling NFT: a polar bear
          NFT, which sold for 3.17 ETH (approximately $5,700 at the time)
        </p>

        <h2 className="font-poppins text-2xl font-bold">The Impact</h2>

        <p className="font-poppins">
          The success of Coca-Cola's NFT campaign was due in part to the fact
          that it was one of the first major brands to embrace NFTs. By
          leveraging the popularity of NFTs, Coca-Cola was able to generate
          significant buzz and publicity for their brand. In addition, the
          limited availability of the NFTs created a sense of urgency among
          buyers, driving up demand and prices. But the impact of the campaign
          went beyond just sales and buzz. By using NFTs, Coca-Cola was able to
          reach a new and highly engaged audience. The buyers of the NFTs were
          not just fans of Coke, but also fans of NFTs and cryptocurrency. By
          engaging with this audience, Coca-Cola was able to strengthen its
          brand among a group of highly influential and tech-savvy consumers.
          Finally, the campaign demonstrated Coca-Cola's ability to adapt and
          innovate in the face of new challenges. As the world becomes more
          digital, traditional marketing methods are becoming less effective. By
          embracing new technologies such as NFTs, Coca-Cola is positioning
          itself for success in the future.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Conclusion</h2>

        <p className="font-poppins">
          Coca-Cola's NFT-based marketing campaign was a resounding success,
          generating significant buzz, sales, and engagement. By embracing NFTs,
          Coca-Cola was able to reach a new and highly engaged audience, and
          position itself for success in the future. The campaign serves as an
          excellent example of how businesses can adapt and innovate in the face
          of new challenges, and leverage new technologies to stay ahead of the
          curve.
        </p>

        <h3 onClick={() => navigate('/casestudies')} className="font-hero underline text-[#2F3FD4] cursor-pointer">Read other case studies</h3>
      </div>
    </div>
  );
};

export default Article;
