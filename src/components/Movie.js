import propTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardCss from '../css/Card.module.css';

function Movie({coverImg, title, summary, genres, id, year}){
    return(
        <Card className="rounded-3 w-100">
            <Link to={`/movie/${id}`} style={{textDecoration:'none'}} className="text-body">
                <Card.Img variant="top-center" src={coverImg} className="p-3 rounded-2 mb-0 w-100"/>
                <Card.Body>
                    <h5>
                        {title}
                    </h5>
                    <small>{year}</small>
                    <ol>
                        {genres.map((genre)=>(
                            <li key={genre} style={{display: 'inline-block'}}>
                                <small className="me-2">
                                    {genre}
                                </small>
                            </li>
                        )
                        )}

                    </ol>
                    <Card.Text className={CardCss.text}>
                        {summary}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

Movie.propTypes={
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;