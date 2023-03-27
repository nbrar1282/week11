// // function greet(user){
// //     console.log(`Hello ${user}`)
// // }

// // greet("nav")


// // let greet = function(user) {
// //              console.log(`hello ${user}`)

// // }

// // greet("nav")


// // let greet = (user, time="day") => {
// //     console.log(`good ${time} ${user}`)
// // };

// // greet("nav")

// const enteredValue = prompt("Enter a value");
   
// function calculatearea(radius){
//     if(isNaN(radius)){
//         resultpara
//         // alert('invalid entry')
// }
//     else{
//         const radiuspara = document.querySelector("#radius")
//         console.log(radiuspara)
//         radiuspara.textContent += enteredValue
//         const area = Math.PI*radius*radius;
//         return area.toFixed(2)
//     }
// }




// let result = calculatearea(enteredValue)
// if (result){
//     const resultpara = document.querySelector("#result")
//     resultpara.textContent =`the result is ${result}`
// }
let shoppingList = ['bread', 'cheese', 'green pepper']

function populatelist(myshoppinglist){
    shopping = document.querySelector('.shopping')

    for(item of myshoppinglist){
      let new1 = document.createElement("li")
      new1.textContent = item
      shopping.appendChild(new1)
        
    }

}

populatelist(shoppingList)


function squareList(){
    const squarelist =document.querySelector("ul")
   squarelist.classList.remove("circleList")
   squarelist.classList.add("squareList")

}

squareList()

function updateImage(){
  const image = document.querySelector("#shoppingCart");
  image.setAttribute("alt", "IMage of my object");
  image.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/263/263142.png");
  image.setAttribute("width", "50");
  image.setAttribute("height", "50");
};

updateImage()

function changeListGreen(){
 const li = document.querySelectorAll("li");
 for (const element of li) {
     if (element.textContent.includes("green")) {
      element.classList.add("green")
      
      
     } 
    
  
 }

}

changeListGreen()