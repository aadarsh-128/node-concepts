const request = require('postman-request');
const url = "https://catfact.ninja/fact";

request({url: url, json:true}, (error, response)=>{
    if(error){
        console.log('An error occurred');
    }else{
        console.log(response.body);
    }
})

/*
SAMPLE OUTPUT:
{
  fact: 'The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.',    
  length: 120
}
*/