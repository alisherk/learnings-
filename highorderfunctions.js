
var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//one way of filtering and pushing to canDrink array

/*let canDrink = []; //initializing empty array

for(let i=0; i < ages.length; i++) { //simple for loop to iterates throw ages array 

    if(ages[i] >=21) //conditional statement to ensure that only numbers equal or higher than 21 selected
    canDrink.push(ages[i]); //we are pushing these numbers from ages to canDrink array 
} */

//another way this can be achieved is with filter function available on arrays
/* const canDrink = ages.filter(function (age){
if (age >= 21) {
       return true;
   }
});  */

//there is yet a simpler way with to achieve the same with arrow function

/* const canDrink = ages.filter(age => age > 18); 
console.log(canDrink);   */


const companies = [

{name: 'Company 1', category: 'Insurance', founded: 1982},
{name: 'Company 2', category: 'Construction', founded: 1990},
{name: 'Company 3', category: 'Finance', founded: 1990},
{name: 'Company 4', category: 'IT', founded: 1970},
{name: 'Company 5', category: 'IT', founded: 2000},     

]; 

//const retailCompanies = companies.filter(company => company.category === 'IT');
//console.log(retailCompanies);

//map -> create a new array of company names 
//seems like map allows you to copy one array to another array
//const companyNames = companies.map(company => company.name); 
//console.log(companyNames); 

const agesSquare = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);  

console.log(agesSquare);  

/* const sortedCompanies = companies.sort((c1, c2)=>{
      
    if(c1.founded < c2.founded) {
          return -1;
      } else {
          return 1; 
      } 
  
}); 

console.log(sortedCompanies); */


                                                                             
/* const sortedCompanies = companies.sort((a, b) => (a.founded > b.founded ? -1 : 1)); 

console.log(sortedCompanies);   */

//reduce 
const ageSum = ages.reduce((total, age) => total + age); 
console.log(ageSum); 






 



