import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";


function Home(){

    const [loading, setLoading] = useState(true);

    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
  
      console.log(response);
      setMovies(response.data.data.movies);
      setLoading(false);
  
      // .then((res)=>{
      //   console.log(res);
      //   setMovies(res.data.data.movies);
      //   setLoading(false);
      // })
      // .catch((err)=>{console.log(err)})
    }
  
    useEffect(()=>{
      getMovies();
    },[])


    return(
    <div className="App">
        {loading ? <h1>Loading...</h1>:<h1>Movie List</h1>}
      <hr/>
      {movies.map((movie)=>(
        <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
        />
      ))}
    </div>
    )
}


export default Home;