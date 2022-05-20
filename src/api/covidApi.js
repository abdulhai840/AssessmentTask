import axios from 'axios';

export const getData = () => {
    let result = axios
      .get(`https://disease.sh/v3/covid-19/countries`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return { status: "error", message: "Some issue occured" };
      });
    return result;
  };

  export const getGlobal = () => {
    let result = axios
      .get(`https://disease.sh/v3/covid-19/all`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return { status: "error", message: "Some issue occured" };
      });
    return result;
  };