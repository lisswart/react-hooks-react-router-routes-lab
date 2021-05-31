import { movies } from "../data";

function Movies() {
  return (
    <div>{/*{code here}*/}
      <h1 style={{color: "honeydew", marginLeft: "6px"}}>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div style={{color: "honeydew", marginLeft: "6px"}} key={index}>
            {movie.title}; length: {movie.time} minutes
            {(movie.genres).map((genre, index) => {
              return (
                <li style={{color: "honeydew", marginLeft: "6px"}} key={index}>{genre}</li>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
