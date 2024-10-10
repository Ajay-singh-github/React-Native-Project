import axios from "axios";

var serverURL = "http://172.20.10.2:5000";
const getData = async (url) => {
  try {
  /*  let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }*/
    var response = await axios.get(`${serverURL}/${url}`);
    var result = await response.data;

    return result;
  } catch (e) {
    if (e.response.status == 401) {
      localStorage.clear();
      window.location.replace("/loginpage");
    }
  }
};

const postData = async (url, body) => {
  try {
  /*  alert(localStorage.getItem("TOKEN"));
    let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }*/
    var response = await axios.post(`${serverURL}/${url}`, body);
    var result = await response.data;

    return result;
  } catch (e) {
    if (e.response.status == 401) {
      localStorage.clear();
      window.location.replace("/loginpage");
    }
  }
};

export { serverURL, getData, postData };
