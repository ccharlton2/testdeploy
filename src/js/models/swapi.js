/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

*/

// "this refers to the first set of braces"
function SwapiModel() {
  this.apiBaseUrl = "https://swapi.dev/api/";

  this.init = function () {
    const result = this.query("https://swapi.dev/api/people?search=luke");
    return result
  };

  this.query = async function (url) {
    const req = await fetch(url)
    const res = await req.json()
    return res
  };

  /*   // arrow functions don't have a concept of the keyword "this"
  document.body.addEventListener("click", (e) => {
    console.log(this.baseURL);
  }); */
}

export default SwapiModel
