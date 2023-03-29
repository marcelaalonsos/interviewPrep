//something here
//hello i'm here

/*
1. import at the top of that document react, and other dependencies
2. building component
3. building a component that is a landing page
 const LandingPage = () => {
  grabbing elements from the dom
  create your hooks
  sample useState :
  const [on, setOn] = useState(true);


  return {
  html
  <h1>hello landing page </h1>
  button onClick = setOn = false
  }
 }




nth...at the end, you export that function - that can be used anywhere
*/

/*
.querySelector(grabs element);
.querySelectorAll();
.getElementByClass();
document.getElementById()
document.getElements();
*/

// What is this function doing?
/*
1. recursive function
2. plug in numbers
3. right if its
4. returning what n is the index -> you are trying it figure out what number is on that index
5. 0112
ind0123
*/
function whatAmI(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return whatAmI(n - 1) + whatAmI(n - 2);
}

/*
Given an array of cart objects with these properties:
 {name: 'string', quantity: number, price: number}
Write a function that returns the total cost of all items.
Ex. of cart array:
*/
let cart = [
  { name: "1 lb potatoes", quantity: 2, price: 3 },
  { name: "6pk Mtn. Dew", quantity: 1, price: 5 },
  { name: "chocolate cake", quantity: 1, price: 12 },
];

/*
function checkout (cart) --done
totl price = 0; --done
loop over these elements ==> extract the quantities and prices
quantity of each name * price of each name
add to total
end return that total
*/

function checkout(cart) {
  let total = 0;
  for (let elem of cart) {
    //console.log(elem);
    let sub = elem.quantity * elem.price;
    //console.log(sub);
    total += sub;
  }
  return total;
}
console.log(checkout(cart)); // returns 23
