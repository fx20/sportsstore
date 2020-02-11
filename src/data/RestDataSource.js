import Axios from "axios";
import {RestUrls} from "./Urls";

const RestDataSource = () => {
  const getData = (dataType) => {
    SendRequest('get', RestUrls[dataType])
  };

  const SendRequest = (method, url) => Axios.request({method, url});
};

export default RestDataSource;
