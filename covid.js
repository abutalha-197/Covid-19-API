
const searchCountry = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    if (searchText == '') {
        document.getElementById('error-massage').style.display = 'block';
        document.getElementById('error-massage2').style.display = 'none';
        document.getElementById('search-result').style.display = 'none';
    }
    else {
        //load data
        const url = `https://coronavirus-19-api.herokuapp.com/countries/${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => dispaysearchresult(data))
            .catch(error => {
                document.getElementById('error-massage2').style.display = 'block'
                document.getElementById('error-massage').style.display = 'none'
                document.getElementById('search-result').style.display = 'none'
            })
    }

}

const dispaysearchresult = data => {
    document.getElementById('error-massage2').style.display = 'none';
    document.getElementById('error-massage').style.display = 'none';
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `
        <h5 class="cName">${data.country}</h5>
        <h5 class="cName1">Total Tests : ${data.totalTests}</h5>
         <h5 class="cName2">Total Active : ${data.active}</h5>
         <h5 class="cName3">Total Cases : ${data.cases}</h5>
         <h5 class="cName4">Total Deaths : ${data.deaths}</h5>
         <h5 class="cName5">Total Recoverd: ${data.recovered}</h5>
         <h5 class="cName6">Today Cases : ${data.todayCases}</h5>
         <h5 class="cName7">Today Deaths : ${data.todayDeaths}</h5>
         `;
        searchResult.appendChild(div);
}