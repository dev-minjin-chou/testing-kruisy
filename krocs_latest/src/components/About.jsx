import aboutImg from "../assets/images/arts/about.png";
import crocks from "../assets/images/logos/swim.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../nfts/components/redux/data/dataActions";
import { connect } from "../nfts/components/redux/blockchain/blockchainActions";
import "../assets/css/app.css";
import "tailwindcss/tailwind.css";

const About = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState(`Click MINT to mint your NFT.`);
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, error occured. Please try again!");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Successfully minted ${CONFIG.NFT_NAME} !!! Visit your new artwork at Opensea.io!`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <section id="home" className="not-margin">
      <div className="cs_container cs_row" data-aos="fade-up">
        <div className="description" data-aos="fade-up">
          <div className="sec-heading-wrapper text-left">
            <h2 className="sec-heading" data-aos="zoom-out">
              {" "}
              WELCOME{" "}
            </h2>
          </div>
          <p data-aos="fade-up">
            Amidst the jungle, you've come to an undiscovered swamp, filled with
            9,999 Kruisy Krocs vibing away on the Ethereum blockchain
          </p>
          <p data-aos="fade-up">
            Kruisy Krocs are a collection of randomly generated NFTs with
            millions of possible combinations.
            <br />
            These Krocs are waiting to be adopted, to unlock their true
            potential ~ working together to create a DAO.
          </p>
          <br />
          <div className="sec-heading-wrapper text-left">
            <h2 className="sec-heading" data-aos="zoom-out">
              {" "}
              LEGENDARY KROCS{" "}
            </h2>
          </div>
          <p>
            The Legendary Krocs are the 36 Krocs that look after the other
            Krocs. Each owner of these Legendary Kroc NFTs will stand the chance
            to walk away with a $20,000 bonus. Once all Kruisy Krocs are sold
            out, the Stonk Kroc will walk away with a bonus of $30,000.
          </p>
        </div>
        <div className="examples" data-aos="fade-down">
          <img
            loading="lazy"
            className="about-img"
            src={aboutImg}
            alt="KRUICY KROCS"
          />
          <img
            loading="lazy"
            className="about-img about-swim"
            src={crocks}
            alt="KRUICY KROCS"
          />
        </div>
      </div>
      <div className="cs_container cs_row">
        <div className="sec-heading-wrapper text-center">
          <div>
            <div className="wallet">
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <div className="text-center align-middle text-5xl xl:text-5xl font-kroc">
                  <br />
                  <br />
                  <br />
                  <button
                    className="buttonwal"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT TO WALLET
                  </button>
                  {blockchain.errorMsg !== null ? (
                    <div className="text-center align-middle text-2xl xl:text-2xl font-kroc">
                      <p className="errorMessage">{blockchain.errorMsg}</p>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="text-center align-middle text-3xl xl:text-3xl font-kroc">
                  <br />
                  <br />
                  <br />
                  <div className="inline-flex">
                    <button
                      className="buttonwal"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      DECREASE
                      <br />-
                    </button>
                    <button
                      className="buttonwal"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "MINTING.." : "MINT"}
                      <br />
                      {mintAmount}
                    </button>
                    <button
                      className="buttonwal"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      INCREASE
                      <br />+
                    </button>
                  </div>
                  <p className="feedbackmint">{feedback}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
