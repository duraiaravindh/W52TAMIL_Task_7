// step:1 - create the XHR Object / constructor
var req = new XMLHttpRequest();

//step:2 - Open a connection (3 Parameters)
req.open("GET","https://restcountries.com/v3/all",true)

// step:3 - Initiate a connection (give req to server)
req.send();

//setp:4 once the data loaded from the server successfully
req.onload=function(){
    // here we are converting string to JSON object
    var result = JSON.parse(req.response);
    console.log(result);

    // all the countries from Asia continent /region using Filter function
    var asia = result.filter(elem => elem['region'] === 'Asia')
    console.log(asia);

    // all the countries with a population of less than 2 lakhs using Filter function
    var countries = result.filter(country => country['population'] < 200000)
    console.log(countries);


    // details name, capital, flag using forEach function
    result.forEach((elem,i) => {
        console.log('Name : ', elem.name.common)
        if(elem.capital){
            console.log('Capital : ', elem.capital[0])
        }
        console.log('Flag : ', elem.flag)
    })


    // total population of countries using reduce function


    var tot_pop = result.reduce((total,current) => {
        return total + current.population
    },0)
    console.log(tot_pop);


};

