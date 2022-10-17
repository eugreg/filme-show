import axios from "axios";
export default class LancamentosApi {
  async BuscaTodosOsLancamentos() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1"
    );
    return response.data.results;
  }
  async BuscarLancamentos(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1${id}`
    );
    return response.data.results;
  }
}
