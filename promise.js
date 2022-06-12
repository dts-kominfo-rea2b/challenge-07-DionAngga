const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {

  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((result) => {
      const [brandTheater1, brandTheater2] = result;
      return [...brandTheater1, ...brandTheater2].filter((item) => item.hasil === emotion).length;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  promiseOutput,
};