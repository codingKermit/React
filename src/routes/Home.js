import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Col, Container, Row } from "react-bootstrap";

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
      <Container>
        <Row xs={1} sm={2} md={4}>
        {movies.map((movie)=>
          (
            <Col className="mb-5 justify-content-center d-flex" key={movie.id}>
                <Movie 
                    id={movie.id}
                    coverImg={movie.medium_cover_image} 
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    year={movie.year}
                    />
              </Col>
          )
        )}
        </Row>
      </Container>
    </div>
    )
}


export default Home;