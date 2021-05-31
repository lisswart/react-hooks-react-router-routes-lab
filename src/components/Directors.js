import { directors } from "../data";

function Directors() {
  return (
    <div>{/*{code here}*/}
      <h1 style={{color: "honeydew", marginLeft: "6px"}}>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div style={{color: "honeydew", padding: "2px", marginLeft: "6px"}} key={index}>
            {director.name}
            <ul>
              {(director.movies).map((movie, index) => {
                return (
                  <li key={index}>{movie}</li>
                );
              })}
            </ul>           
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
