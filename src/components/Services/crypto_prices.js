import axios from "axios";

export default function getBTC() {
  return axios
    .get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad"
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
