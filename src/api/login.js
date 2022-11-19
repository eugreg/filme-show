import axios from "axios";
export default class LoginApi {
  async GetToken() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=a37701b7a0845f3785cd83eb23add599"
    );
    return response.data.request_token;
  }
  async Login(username, password, request_token) {
    const response = await axios.post(
      "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=a37701b7a0845f3785cd83eb23add599",
      { username, password, request_token }
    );
    return response.data.request_token
  }
  async Session(request_token) {
    const response = await axios.post(
      "https://api.themoviedb.org/3/authentication/session/new?api_key=a37701b7a0845f3785cd83eb23add599", { request_token }
    );
    return response.data.session_id
  }
  async GetProfile(session_id) {
    const response = await axios.get(`https://api.themoviedb.org/3/account?api_key=a37701b7a0845f3785cd83eb23add599&session_id=${session_id}`)
    return response.data
  }
  async DeleteLogin(session_id) {
    // const info = {
    //   session_id,
    // };
    const response = await axios.delete(
      `https://api.themoviedb.org/3/authentication/session?api_key=a37701b7a0845f3785cd83eb23add599&/${session_id}`,
      
    );
    return response.data;
  }
}
