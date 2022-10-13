import axios from "axios";
export default class LancamentosApi {
  async BuscaTodosOsLancamentos() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/latest?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR"
    );
    return response.data;
  }
  async BuscarLancamentos(id) {
    const response = await axios.get(
      `hhttps://api.themoviedb.org/3/movie/latest?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR${id}`
    );
    return response.data.results;
  }
}
