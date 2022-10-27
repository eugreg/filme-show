import axios from "axios";
export default class FilmeApi {
  async BuscaTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1"
    );
    return response.data.results;
  }
  async BuscarFilmes(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1${id}`
    );
    return response.data.results;
  }
  async BuscarVideos (id){
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`);
      return response.data.results;
  }
}
