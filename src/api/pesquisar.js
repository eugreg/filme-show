import axios from "axios";
export default class PesquisarApi {
  async BuscaTodasAsPesquisa() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&page=1&include_adult=false"
    );
    return data;
  }
  async BuscaPesquisaPorId(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=en-US&query=${id}&page=1&include_adult=false`
    );
    return data;
  }
  
}
