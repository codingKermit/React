import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";


export async function loader({params}){
    const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`);
    return {response};
}

export function Detail() {

    const [loading, setLoading] = useState(true);

    const [movie, setMovie] = useState({});

    const { id } = useParams();


    
    useEffect(() => {
        const getDetail = async () => {
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    
            console.log(response);

            setLoading(false);
            setMovie(response.data.data.movie);
        };
        
        getDetail();
    }, [id]);

    const navigate = useNavigate();

    return (
        <div>
            <Container className="mt-5 mb-5">
                <h2 className="mb-3"><Link style={{textDecoration : 'none'}} onClick={()=>navigate(-1)}>Back</Link></h2>
                <Row>
                    <Col className="justify-content-center d-flex">
                        <img src={movie?.large_cover_image} alt="대체 텍스트" />
                    </Col>
                    <Col>
                        {loading ? <h1>Loading...</h1> : <h1>{movie.title_long}</h1>}
                        <hr/>
                        <h3>genres</h3>
                        <ul>
                            {movie?.genres?.map((genre) => (
                                <li key={genre} style={{display:'inline-block'}} className="me-3">{genre}</li>
                            ))}
                        </ul>
                        <hr/>
                        <p>
                            Link Count : {movie?.like_count}
                        </p>
                        <hr/>
                        {movie?.description_intro !== "" ? 
                        <div>
                            <h4>description_intro</h4>
                            <p>{movie?.description_intro}</p>
                            <hr />
                        </div>:null}

                        {movie?.description_full !== "" ? 
                        <div>
                            <h4>description_full</h4>
                            <p>{movie?.description_full}</p>
                            <hr />
                        </div>:null}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
