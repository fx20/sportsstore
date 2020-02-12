import Axios from "axios";
import RestUrls from "../Urls";

const RestDataSource = async (dataType, params) =>
  SendRequest("get", RestUrls[dataType], params);

const SendRequest = (method, url, params) =>
  Axios.request({method, url, params});

export default RestDataSource;
