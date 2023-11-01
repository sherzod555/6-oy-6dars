import Insta from "../../assets/Instagram.svg"
import Facebook from "../../assets/Facebook.svg"
import Twiter from "../../assets/Twitter.svg"
import Google from "../../assets/Google.svg"



const Footer =() =>{
    return(
        <>
            <footer className="container mx-auto px-10 text-white">
                <div className="pt-[70px] pb-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[40px] font-medium leading-[48px] w-[444px]">
                        Our platform is trusted by millions & features best updated movies all around the world.
                        </h2>

                        <div className="flex flex-col items-end gap-y-[138px]">
                            <div>
                                <ul className="flex items-center justify-between gap-x-3">
                                    <li> <a href="/">
                                        Home
                                    </a>
                                    </li>
                                    <p>/</p>
                                    <li> <a href="/">
                                        Discover
                                    </a>
                                    </li>
                                    <p>/</p>
                                    <li> <a href="/">
                                        Influence
                                    </a>
                                    </li>
                                    <p>/</p>
                                    <li> <a href="/">
                                        Release
                                    </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-x-10">
                                <button>
                                    <img src={Insta} alt="instagram" />
                                </button>
                                <button>
                                    <img src={Facebook} alt="facebook" />
                                </button>
                                <button>
                                    <img src={Twiter} alt="twitter" />
                                </button>
                                <button>
                                    <img src={Google} alt="google" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;