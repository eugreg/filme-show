import axios from "axios";
export default class FavoritoApi {
  async Postfav(session_id, media_id) {
    const info = {
      media_type: "movie",
      media_id,
      favorite: true,
    };
    const response = await axios.post(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=a37701b7a0845f3785cd83eb23add599&session_id=${session_id}`,
      info
    );
    return response.data;
  }
  async GetMovies(session_id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=a37701b7a0845f3785cd83eb23add599&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=1`
    );
    return response.data.results;
  }
  
  async GetWatch(session_id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR&session_id=${session_id}&sort_by=created_at.asc&page=1`
    );
    return response.data.results;
  }
  async PostWatch(session_id, media_id) {
    const info = {
      media_type: "movie",
      media_id,
      watchlist: true
    };
    const response = await axios.post(
      `
      https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=a37701b7a0845f3785cd83eb23add599&session_id=${session_id}`,
      info
    );
    return response.data;
    } 
}
