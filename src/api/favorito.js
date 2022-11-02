import axios from "axios";
export default class FavoritoApi {
  async Postfav(session_id) {
    const response = await axios.post(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=a37701b7a0845f3785cd83eb23add599&session_id=${session_id}`
    );
    return response.data;
  }
}
