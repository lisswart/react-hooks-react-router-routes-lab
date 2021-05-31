import { actors } from "../data";

function Actors() {
  return (
    <div>{/*{code here}*/}
      <h1 style={{color: "honeydew", marginLeft: "6px"}}>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div style={{color: "honeydew", marginLeft: "6px"}} key={index}>
            {actor.name}
            <ul>
              {(actor.movies).map((movie, index) => {
                return(
                  <li style={{color: "honeydew", padding: "0 2px"}} key={index}>{movie}</li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
