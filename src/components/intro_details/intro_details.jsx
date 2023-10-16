import castAva from "../../assets/ava.jpg"


const castMock = [
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    },
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    },
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    },
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    },
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    },
    {
        avatar: castAva,
        name: "Cristiano Ronaldo",
        nameInMovie: "GOAT",
    }
]


const IntroDetails =()=>{

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWRmYTQ2ODk0ZTc3NzllMzU0ODQ4NWMyMTI5NWVkOSIsInN1YiI6IjY1MjA0NzY0NzQ1MDdkMDBjNTdiMjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO0gL_kymgWH74zr6uUdl7Pfpa0BlIaT75Yuii1r0xY'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return(
        <>
            <section className="p-10">
                <div className="container mx-auto">
                    <h3 className="text-white mb-4 text-lg">
                        Story Line
                    </h3>
                    <p className="line-clamp-3 text-white font-medium mb-6">
                    The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO.
                    Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by
                    a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society.
                    The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across
                    a post-apocalyptic United States
                    </p>

                    <h3 className="text-white mb-4 text-lg">
                        Top Cast
                    </h3>

                    <ul className="list-none flex items-center justify-between">
                        {castMock.map((cast, index) =>(
                        <li key={index} className="flex items-center">
                            <img className="rounded-full" src={cast.avatar} alt="avatar" width={48} height={48}/>
                            <div className="ms-3">
                                <p className="font-semibold text-white">
                                    {cast.name}
                                </p>
                                <p className="font-medium text-[#9ca4ab]">
                                    {cast.nameInMovie}
                                </p>
                            </div>
                        </li>

                        ))}
                    </ul>

                </div>
            </section>
        </>
    )
}

export default IntroDetails;