import axios from "axios";
export default class GeneroApi {
  async BuscaTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR"
    );
    return data.genres;
  }
  async BuscaGeneroPorId(id) {
    console.log('iiii')
    console.log(id)
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR"
    );
    return data.genres.find(g => g.id === id);
  }
  async BuscarGeneros(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR${id}`
    );
    return response.data.results;
  }
}
