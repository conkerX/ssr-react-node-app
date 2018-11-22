import axios from "axios";

const fetchRepos = () => {
  return axios
    .get("https://api.github.com/users/conkerX/repos")
    .then(data => {
      // console.log("data --->", data.data);
      return data.data;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

export default fetchRepos;
