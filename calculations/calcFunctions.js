// - Take a base price of £120 / year (£10 a month)
// - Add an increase of 5% to the price for each year up to 5 and 10% for each year past that up to 10
// - Apply a 10% lower price to 3 breeds
// - Apply a 15% higher price to 3 address areas
// - Apply the multi-pet discount at 10% for each pet when 2 or more pets are included



// DATA STRUCTURE
// Array[
// {	Pet: String
//   Year Age:  Integer
//   Month Age: Integer
//   Breed : String
//   Address : String
//   }, 
//   {	Pet: cat || dog
//   Year Age:  1-20yrs
//   Month Age: 1-12months
//   Breed : search
//   Address : search
//   }
//   ]
  
// PLAN 
// Create functions for each of the calculations 

// e.g. base price = 120
// 0-5 years = 120*1.05^(n)
// 6-10 years = 120*1.05^(5)*1.1^(n)


function getCalc(n){
    let calc = 120*1.05^(5)*1.1^(n)
    console.log(calc);
    return calc;
}
getCalc(10);