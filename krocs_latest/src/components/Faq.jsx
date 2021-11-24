import { useState } from 'react';
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const faqData = [
    {
        id: 0,
        qs: 'HOW MUCH IS A KRUISY KROCS NFT?',
        ans: 'A Kruisy Krocs NFT will cost 0.045 = gas in Whitelist presale and 0.06 ETH + gas during publicsale. We strongly believe in having a low mint amount as it is vital in building a strong community.'
    },
    {
        id: 1,
        qs: 'WHERE CAN I ACCESS MY KRUISY KROCS NFT?',
        ans: 'After minting a Kruisy Krocs NFT, you will be able to access it by connecting to OpenSea with the same crypto wallet.'
    },
    {
        id: 2,
        qs: 'WILL THERE BE A WHITELIST PRESALE?',
        ans: 'Yes. Please join our Discord to learn how you can join the Presale Whitelist. Slots will be very limited and rewards for Whitelisted individuals will be guaranteed.'
    },
    {
        id: 3,
        qs: 'WHEN WILL I BE ABLE TO MINT KRUISY KROCS?',
        ans: 'The public launch will be held on November 26th, 2021, at 8pm EST, whilst the Whitelist Presale will be held earlier, info will be posted in our Discord.'
    },
    {
        id: 4,
        qs: 'DOES KRUISY KROCS NFT HAVE ANY UTILITY?',
        ans: 'You can resell your Kruisy Krocs for a profit, and you can also use your Kruisy Krocs as a profile picture online. Once  the staking contract is deployed, you will be able to earn $TOKEN that represents fractional shares of assets owned by the DAO. There will be 50 Legendary Krocs, its holders will unlock benefits that are out of this world. As our community grows, so will the benefits.'
    },
    {
        id: 5,
        qs: 'WHAT IS A DAO?',
        ans: 'DAO stands for Decentralized Autonomous Organization. It is represented by members of this organization. Our DAO will be named KrocDAO and to be part of it, you need to hold at least one Kruisy Krocs NFT.  In this community, Kruisy Kroc holders will gain access to the private discord channels that will have alpha calls; as well as the ability to vote for where you want the direction of the KrocDAO to go in the future. This extends from voting how the community funds are used. E.g. deciding which Blue Chip NFTs investment to buy to real life ventures.'
    },
    {
        id: 6,
        qs: 'WHAT WILL THE SECONDARY SALE ROYALTIES BE USED ON?',
        ans: '50% of the proceeds from the secondary sales will be deposited into the DAO. A portion of royalties will be used to focus on to growth and longevity of the project.'
    },
    {
        id: 7,
        qs: 'DO I OWN THE KRUISY KROCS AFTER MINTING IT?',
        ans: 'Yes, you will be the owner of the Kruisy Kroc NFT you mint. This will be all proven on the blockchain. '
    },
]

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    return (
        <section id="faq">
            <div className="cs_container">
                    <div className="sec-heading-wrapper">
                        <h1 className="sec-heading" data-aos="fade-down">FAQs</h1>
                    </div>
                    <div className="" data-aos="fade-up">
                        {faqData.map((data, i) => {
                            return (
                                <div
                                 key={i} className={`faq-wrapper ${activeFaq === i ? 'active-faq' : ''}`}>
                                    <div className="faq-qs" onClick={() => setActiveFaq(prev => prev === i ? null : i)}>
                                        <h6>{data.qs}</h6><span className="faq-arrow"><ArrowForwardIosIcon /></span>
                                    </div>
                                    <div className="faqs-answer text-white">
                                        <p>
                                            {data.ans}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </section>
    )
}

export default Faq
