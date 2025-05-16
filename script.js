
let scrolldiv = document.querySelector(".scroll-div");

let scrollleft = document.querySelector(".scroll-left");
let scrollright =document.querySelector(".scroll-right");

console.log(scrolldiv)
console.log(scrollleft)
console.log(scrollright)




if (scrollleft) {
  scrollleft.addEventListener("click", () => {
    console.log("Hii");
    scrolldiv.scrollBy({ left: -100, behavior: "smooth" });
  });
}

if (scrollright) {
  scrollright.addEventListener("click", () => {
    // alert("Hii");
    // console.log("Hii");
    scrolldiv.scrollBy({ left: 100, behavior: "smooth" });
  });
}


//2
let scrolldiv1 = document.querySelector(".scroll-div1");

let scrollleft1 = document.querySelector(".scroll-left1");
let scrollright1 =document.querySelector(".scroll-right1");

console.log(scrolldiv1)
console.log(scrollleft1)
console.log(scrollright1)




if (scrollleft1) {
  scrollleft1.addEventListener("click", () => {
    console.log("Hii");
    scrolldiv1.scrollBy({ left: -100, behavior: "smooth" });
  });
}

if (scrollright1) {
  scrollright1.addEventListener("click", () => {
    // alert("Hii");
    // console.log("Hii");
    scrolldiv1.scrollBy({ left: 100, behavior: "smooth" });
  });
}

// Scrollleft.addEventListener("click", () => {
    
//     console.log("Hii");
//     Scrolldiv.scrollBy({ left: -100, behavior: "smooth" });
//   });

 
//   Scrollright.addEventListener("click", () => {
//     alert("Hee")
//     console.log("Hii");
//     // scrollableDiv.scrollBy({ left: 100, behavior: "smooth" });
//   });




// let Scrolldiv = document.querySelector(".scroll-div");
// let Scrollleft = document.querySelectorAll(".scroll-left"); // Use querySelectorAll for consistency
// let Scrollright = document.querySelectorAll(".scroll-right");

// // Add event listener to all "scrollleft" buttons
// Scrollleft.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log("Scrolling left");
//     alert("hii");
//     Scrolldiv.scrollBy({ left: -100, behavior: "smooth" });
//   });
// });

// // Add event listener to all "scrollright" buttons
// Scrollright.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log("Scrolling right");
//     alert("jkdhf")
//     Scrolldiv.scrollBy({ left: 100, behavior: "smooth" });
//   });
// });


