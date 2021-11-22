import "../assets/css/roadMap.css"
import placeholder1 from "../assets/images/arts/1_Of_1-1.jpg";
import placeholder2 from "../assets/images/arts/1_Of_1-2.jpg";
import placeholder3 from "../assets/images/arts/1_Of_1-3.jpg";
import placeholder4 from "../assets/images/arts/1_Of_1-4.jpg";
import placeholder5 from "../assets/images/arts/1_Of_1-33.jpg";
import placeholder6 from "../assets/images/arts/1_Of_1-16.jpg";
import placeholder8 from "../assets/images/arts/1_Of_1-27.jpg";
import swim from "../assets/images/logos/swim.png"

const RoadMAP = () => {
    const dataArray = [
        {title: "PHASE - 1", bodyText: <p>Join our Discord. Being early will have its perks. Raffling of Kruisy Krocs NFT will take place at each milestone we reach in our Discord member count.</p>},
        {title: "PHASE - 2", bodyText: <p>Amidst the Ethereum blockchain jungle. You have come to an undiscovered swamp, filled with 9,999 Kruisy Krocs vibing away. There will be 36 Legendary Krocs, holders of Legendary Krocs will unlock benefits that are out of this world. As our community grows, so will the benefits. <br />Minting begins.</p>},
        {title: "PHASE - 3", bodyText: <p>Once all 9,999 Krocs have been minted, the reveal will happen 48 hours after. Followed by the creation of a DAO. We will set aside 10% of mint sales and 50% of secondary sales royalty into the DAO wallet. This will be secured via multiple signature wallets.</p>},
        {title: "PHASE - 4", bodyText: <p>An exclusive Discord role for Kruisy Kroc Holders will be used to establish voting via a snapshot, to decide on which Blue Chip NFT the DAO will purchase or which real life venture should the community invest in. <br/> <br/> We plan to branch out and invest in mining farms, as this is where part of our team specialises in having existing mining farms. Mining profits in return will go back to our holders or reinvested into bigger future projects, again holders in the DAO will decide based on votes. <br/><br/>This is where we strongly believe we have the ability to set ourselves apart from other DAO projects that either promise benefits such as future project whitelists or that only purchase Blue Chip NFTs and fractionalise it amongst holders, we strive to not only be different, but also stronger than the competition.</p>},
        {title: "PHASE - 5", bodyText: <p>To be fair and transparent, through a livestream event, $120,000 will be given back to our loyal supporters. USD$110,000 will be given back to 22 lucky holders of Kruisy Krocs, each walking away with USD$5000. The remaining USD$10,000 will be given to our followers and active members. <br/><br/> The process to be part of the giveaway will be simple, holding 1 Kruisy Krocs NFT will grant 1 entry, the more you hold the better your odds. This in return will allow us to hold a steady floor price.</p>},
        {title: "PHASE - 6", bodyText: <p>Staking contract will be deployed, allowing holders of Kruisy Krocs to earn $SWAMP. The tokens represent fractionalised shares of each NFT as well as the assets held within the DAO's vault. Each Kruisy Krocs generates 5 $SWAMP per day.</p>},
        {title: "PHASE - 7", bodyText: <p>A real life getaway outside the Ethereum blockchain jungle will be hosted, free for our holders. The date and location will be chosen via a democratic DAO vote.</p>},
        {title: "PHASE - 8", bodyText: <p>We have a shortlist of future projects & ideas for Kruisy Krocs, but we want to have our community vote on the future of this project to decide what happens next!</p>},
    ];
    return (
        <section id="roadmap" className="roadmap-main">
             <div className="roadmap-swim-img top-im">
                <img loading="lazy"  src={swim} alt="" data-aos="fade-down"/>
            </div>
            <div className="cs_container">
                <div className="sec-heading-wrapper">
                    <h1 data-aos="zoom-out" className="sec-heading">RoadMap</h1>
                </div>
                <div className="rd-timeline">
                    <div className="timeline-left">
                        {dataArray.map((data,index)=> {
                            return(
                                <div key={index} className="container-map">
                                <div className="content" data-aos="fade-up">
                                    <h3 className="roadmap-section-heading">{data.title}</h3>
                                        {data.bodyText}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="timeline-right">
                        <img loading="lazy"  data-aos="zoom-out" src={placeholder8} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="fade-left" src={placeholder3} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="zoom-out" src={placeholder5} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="zoom-out" src={placeholder6} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="fade-right" src={placeholder2} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="fade-up" src={placeholder4} alt="KRUICY KROCS" />
                        <img loading="lazy"  data-aos="fade-down" src={placeholder1} alt="KRUICY KROCS" />
                    </div>
                </div>
            </div>
            <div className="roadmap-swim-img bottom-im">
                <img loading="lazy"  src={swim} alt="" data-aos="fade-up"/>
            </div>
        </section>
    )
};





export default RoadMAP
