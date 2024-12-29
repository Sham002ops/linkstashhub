import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Config";
import { createBrowserHistory } from "history";

const apiClient = axios.create({
  baseURL: `${BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

const history = createBrowserHistory();


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && error.response?.data?.message === "Session expired") {
      history.push("/session-expired");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
