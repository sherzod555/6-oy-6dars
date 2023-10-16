import { useState } from "react";
import "./episodes.scss";
import { useEffect } from "react";




const Episodes = ()=>{
    const [data, setData] = useState();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWRmYTQ2ODk0ZTc3NzllMzU0ODQ4NWMyMTI5NWVkOSIsInN1YiI6IjY1MjA0NzY0NzQ1MDdkMDBjNTdiMjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO0gL_kymgWH74zr6uUdl7Pfpa0BlIaT75Yuii1r0xY'
          }
      };

      useEffect(() =>{
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
      }, [])
      


    return(
        <section className="py-16">
            <div className="container px-10 mx-auto">
                <h3 className="text-white text-2xl mb-6 font-bold">
                    Top Movies
                </h3>
                <div className="grid gap-4 grid-cols-4">

                    {data && data?.results.map(element => (
                        <div key={element.id} className="w-[300px] h-[197px] episode_item rounded-3xl">
                                <img className="absolute rounded-3xl -z-10" 
                                src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`} alt="episode" width={300} height={197}/>
        
                                <div className="p-5 flex flex-col h-full">
                                    <h4 className="font-bold text-white mt-auto">
                                        {element.title}
                                    </h4>
                                    <p className="text-sm text-[#78828a] line-clamp-2">
                                        {element.overview}
                                    </p>
                                </div>
                        </div>
                    ))}

                    
                            
                    
                  

                </div>
            </div>
        </section>
    )
}

export default Episodes