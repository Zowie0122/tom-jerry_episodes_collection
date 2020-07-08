import React, { useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);
  return (
    <div>
      <header className="header">
        <div>
          {" "}
          <h1>Tom and Jerry</h1>
          <p>Pick your favourite episode !!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/fav">
            My Favourite episodes: {state.favourites.length}
          </Link>
        </div>
      </header>
      {props.children}
    </div>
  );
}
