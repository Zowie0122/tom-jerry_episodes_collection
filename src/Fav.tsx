import React from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function Fav(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  console.log(state.favourites);
  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <div>
      <React.Suspense fallback={<div>Loading</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </div>
  );
}
