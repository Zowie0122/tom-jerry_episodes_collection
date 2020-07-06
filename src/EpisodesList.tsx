import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={
            episode.image === null
              ? "http://static.tvmaze.com/uploads/images/medium_landscape/119/299513.jpg"
              : episode.image.medium
          }
          alt={`${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>
            Season: {episode.season} Number:{episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(episode, state, dispatch)}
          >
            {favourites.find((ele: IEpisode) => ele.id === episode.id)
              ? "Remove from My Favourite"
              : "Add to My Favourite"}
          </button>
        </section>
      </section>
    );
  });
}
