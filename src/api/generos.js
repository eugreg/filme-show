import axios from "axios";
export default class GeneroApi {
  async BuscaTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR"
    );
    return data.genres;
  }
  async BuscaFilmesPorGeneroP(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=${id}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
  
}
