import { IState, IEpisode, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=tom-jerry-hanna-barbera-era&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  episode: IEpisode,
  state: IState,
  dispatch: any
): IAction => {
  const episodeInFav = state.favourites.includes(episode);
  console.log(episodeInFav);
  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter((ele: IEpisode) => {
      return ele.id !== episode.id;
    });
    return dispatch({
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    });
  } else {
    return dispatch({
      type: "ADD_FAV",
      payload: episode,
    });
  }
};
