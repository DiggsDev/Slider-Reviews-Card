// These objects were provided in the lesson.

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


// Below begins my coding. Goal of this lesson is to understand
// creating a slider with buttons using JavaScript.

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set first item to be loaded.
let currentItem = 0; // Global variable avaialbe in functions

// Load the initial item.
window.addEventListener('DOMContentLoaded', function () {
    showPerson(); // Calling the reusable function we created.
});

function showPerson () {
    const item = reviews[currentItem]; // Grab the first object in the array.
    img.src = item.img; // Set the img on the DOM to the img from the object in the array.
    author.textContent = item.name; // Same as above.
    job.textContent = item.job; // ...
    info.textContent = item.text; // ...
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){ // If try to click past the last item in array, start over.
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){ // If try to click past the first item, start back at the end.
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Extra challenge
randomBtn.addEventListener('click', function(){
    // get random number between 0 and array.length using Math floor and random
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
