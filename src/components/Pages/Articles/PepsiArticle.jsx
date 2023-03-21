import React,{useEffect} from "react";
import PepsiBanner from "../../../images/PepsiBanner.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const PepsiArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center space-y-10">
        <img src={PepsiBanner} alt="pepsi-Banner" />
        <h1 className="font-body text-5xl text-center max-sm:hidden pl-5 pr-5">
          NFTs and Pepsi: How Digital Collectibles Boosted Customer Engagement
          and Sales
        </h1>

        <h1 className="font-body text-3xl pr-2 pl-2 text-center sm:hidden">
          NFTs and Pepsi: How Digital Collectibles Boosted Customer Engagement
          and Sales
        </h1>
      </div>

      <div className="mt-10 flex flex-col pr-14 pl-14 space-y-9">
        <h2 className="font-poppins text-2xl font-bold">Introduction</h2>
        <p className="font-poppins">
          Pepsi is one of the world&#39;s most recognizable beverage
          brands,known for its iconic logo and marketing campaigns. In August
          2021, Pepsi launched its first- ever NFT collection, called
          &quot;Pepsi Loot.&quot; The virtual collectibles were designed to
          celebrate the brand&#39;s legacy and featured unique designs inspired
          by Pepsi&#39;s advertising history. In this blog post, we&#39;ll take
          a closer look at Pepsi&#39;s NFT marketing strategy and execution,
          analyzing the revenue generated from sales, buzz created on social
          media, media mentions, and overall impact of the campaign.
        </p>

        <h2 className="font-poppins text-2xl font-bold">The Metrics</h2>

        <p className="font-poppins">
          Pepsi&#39;s NFT marketing campaign generated significant buzz on
          social media platforms like Twitter and Instagram. The brand leveraged
          its massive following to promote the campaign, creating a hashtag
          (#PepsiLoot) and sharing videos and images of the virtual
          collectibles. The campaign attracted over 4,000 followers on Twitter
          and generated over 7,000 social media mentions in the first week
          alone.
          <br />
          <br />
          In terms of revenue, the Pepsi Loot NFTs were sold in two rounds, with
          the highest bidder receiving a unique virtual collectible that they
          could keep or trade. The auctions generated a total of $1.4 million in
          sales, with the most expensive NFT selling for $35,000. This revenue
          demonstrated the potential of NFTs as a viable market for brands and
          created a new revenue stream for Pepsi.
          <br />
          <br /> The media also picked up on Pepsi&#39;s NFT marketing campaign,
          with major outlets like CNBC, Adweek, and The Drum covering the story.
          This helped to further promote the campaign and attract more attention
          to the brand&#39;s innovative use of blockchain technology.
        </p>

        <h2 className="font-poppins text-2xl font-bold">The Impact</h2>

        <p className="font-poppins">
          Pepsi&#39;s NFT marketing campaign had a significant impact on the
          brand&#39;s reputation and standing in the beverage industry. By
          embracing blockchain technology and NFTs, Pepsi showed that it was
          willing to experiment with new ideas and stay ahead of the curve. The
          campaign also helped to attract a younger, tech- savvy audience to the
          brand and generated positive brand sentiment on social media.
          <br />
          <br />
          Pepsi&#39;s NFTs helped to create a new revenue stream for the brand,
          with the $1.4 million in sales demonstrating the potential of NFTs as
          a market for collectibles. The campaign also helped to drive traffic
          to Pepsi&#39;s website, with many people curious to learn more about
          the NFTs and the technology behind them.
          <br />
          <br /> Overall, Pepsi&#39;s NFT marketing campaign was a success, both
          in terms of generating buzz and creating a new revenue stream. It
          showed the potential of NFTs as a powerful marketing tool and
          underscored the importance of staying ahead of the curve in the
          rapidly evolving beverage industry.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Conclusion</h2>

        <p className="font-poppins">
          Pepsi&#39;s NFT marketing campaign was a bold and innovative move for
          the brand, and it paid off in terms of generating buzz, revenue, and
          media coverage. By leveraging its massive following and embracing
          blockchain technology, Pepsi was able to attract a younger, tech-savvy
          audience to the brand and create a new revenue stream. The success of
          Pepsi&#39;s NFT marketing campaign shows the potential of NFTs as a
          powerful marketing tool and underscores the importance of staying
          ahead of the curve in the rapidly evolving beverage industry. If
          you&#39;re looking to create your own NFT marketing campaign, consider
          using a no-code NFT API platform to help you build and execute your
          strategy without the need for blockchain developers.
        </p>

        <h3
          onClick={() => navigate("/casestudies")}
          className="font-hero underline text-[#2F3FD4] cursor-pointer"
        >
          Read other case studies
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default PepsiArticle;
