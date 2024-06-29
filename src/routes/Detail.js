import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";


export async function loader({params}){
    const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`);
    return {response};
}

export function Detail() {

    const {response} = useLoaderData();   
    
    const movie = response.data.data.movie;

    return (
        <div>
            <h2><Link to="/">Back</Link></h2>
            <img src={movie.medium_cover_image} alt="대체 텍스트" />
            <h3>genres</h3>
            <ul>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
            <hr />
            <h4>description_intro</h4>
            <p>{movie.description_intro}</p>
            <hr />
            <h4>description_full</h4>
            <p>{movie.description_full}</p>
        </div>
    );
}
