import SearchView from "../views/search-view";

function SearchController(model, searchView, resultsView) {
    this.model = model;
    this.serchView = searchView;
    this.resultsView = resultsView;

    this.configUI = async function () {
        const data = await model.init();
        // pass the data to the view
        this.resultsView.configUI(data.results[0])

        const radios = this.serchView.view.querySelectorAll('input[type=radio]')
        radios.forEach(radio => {
            radio.addEventListener('change', this.onCheckedHandler);
        });
    }

    this.onCheckedHandler = function (e) {
        console.log(this)
    }
/* 
    demonstrates "this" and arrow functions (compare to above)

    this.onCheckedHandler = (e)=> {
        console.log(this)
    }
 */
    this.configUI()

    return this
}

export default SearchController