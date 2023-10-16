import playIcon from "../../assets/play.svg"
import savedIcon from "../../assets/izbranniy.svg"


const Intro = () => {

    return(

        <section className="p-10">
            <div className="container mx-auto pt-[282px] pb-16">
                <div>
                    <div className="px-4 py-1 bg-black text-white w-[69px] rounded-2xl flex items-center justify-center">
                        Movies
                    </div>
                    <h1 className="bold text-3xl py-4 text-white mb-2">
                        The Last of Us Season 1                        
                    </h1>
                    <p className="text-sm text-[#9ca4ab]">
                    9 Episodes • 2022 • Fantasy • Actions
                    </p>

                </div>

                <div className="mt-6 flex items-center gap-x-6">
                    <button className="flex items-center gap-x-3 px-6 py-3 bg-[#00925D] rounded-2xl text-white">
                        <img src={playIcon} alt="playicon" />
                        Continue Watching
                    </button>
                    <button className="flex items-center gap-x-3 px-6 py-3 border border-white bg-[#00925d00] rounded-2xl text-white">
                        <img src={savedIcon} alt="izbranniy" />
                        Add Watchlist
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Intro;