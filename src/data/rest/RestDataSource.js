import Axios from "axios";
import RestUrls from "../Urls";

const GetData = async (dataType, params) =>
  SendRequest("get", RestUrls[dataType], params);

const StoreData = (dataType, data) => {
  SendRequest("post", RestUrls[dataType], {}, data);
};

const SendRequest = (method, url, params, data) =>
  Axios.request({method, url, params, data});


export default {
  GetData,
  StoreData
}
