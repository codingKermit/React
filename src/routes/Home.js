import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function Home(){

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
    });

    const [loading, setLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    const [page, setPage] = useState(1);
  
    const getMovies = async() => {
      const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&page=${page}`);
  
      console.log(response);
      setMovies([...movies, ...response.data.data.movies]);
      setLoading(false);
      setPage((current)=>current+1);
  
      // .then((res)=>{
      //   console.log(res);
      //   setMovies(res.data.data.movies);
      //   setLoading(false);
      // })
      // .catch((err)=>{console.log(err)})
    }
  
    useEffect(()=>{
      getMovies();
    },[inView])

    return(
    <div className="App">
      <Container>
        <div style={{textAlign:'center'}}>
          {loading ? <h1>Loading...</h1>:<h1>Movie List</h1>}
        </div>
        <hr/>
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
        <div style={{textAlign:'center'}}>
          <Spinner animation="grow" ref={ref} />
        </div>
      </Container>
    </div>
    )
}


export default Home;