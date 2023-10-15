
// step:1 - create the XHR Object / constructor
var req=new XMLHttpRequest();

//step:2 - Open a connection (3 Parameters)
req.open('GET','https://restcountries.com/v3/all',true);

// step:3 - Initiate a connection (give req to server)
req.send();

//setp:4 once the data loaded from the server successfully
req.onload=function(){
    //here we are coverting
    var result=JSON.parse(req.response);
    console.log(result[i].currencies.name);
    for(var i=0; i<result.length; i++){
        var names=result[i].name.official;
        var lat=result[i].latlng[0];
        var long=result[i].latlng[1];
        console.log(`${names}:${lat}:${long}`);


    }
}