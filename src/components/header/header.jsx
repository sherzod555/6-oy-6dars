import "./header.scss"
import Logo from "../../assets/logo.svg"
import Notify from "../../assets/bell.svg"
import Search from "../../assets/search.svg"
import Acc from "../../assets/account.png"


const Header =() =>{

    return(
        <header className="p-10 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <img src={Logo} alt="logo" />
                <nav>
                    <ul className="nav_links flex items-center list-none gap-8">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Discover</a></li>
                        <li><a href="/">Movie Release</a></li>
                        <li><a href="/">Forum</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>
                <div className="nav_auth flex items-center gap-x-6">
                    <button><img src={Search} alt="search" /></button>
                    <button><img src={Notify} alt="notificayion" /></button>
                    <button><img src={Acc} alt="account" /></button>

                </div>

            </div>
        </header>
    )

}

export default Header;