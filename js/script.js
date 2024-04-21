// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function submitForm() {
  let formData = {};
  formData.first_name = document.getElementById('first_name').value;
  formData.last_name = document.getElementById('last_name').value;
  formData.password = document.getElementById('password').value;
  formData.email = document.getElementById('email').value;
  console.log("Form Data Submitted: ", formData);
}
const cardList = [
  {
    image: "./images/Rose 1.jpg",
    title: "Rose Flower      :",
    link: "About Kitten 2",
    
  },
  {
    image: "./images/rose 2.jpg",
    title: "Rose Flower 2    :",
    link: "About Kitten 3",
   
  },
  {
    image: "./images/Rose 3.jpg",
    title: "Rose Flower 3   :",
    link: "About Kitten 3",
   
  }
];

// Generate HTML for each card
const cardContainer = document.getElementById("cardContainer");
cardList.forEach(card => {
  const cardHTML = `
    <div class="card">
      <img src="${card.image}" alt="${card.title}">
      <h5>${card.title}</h5>
      <a href="${card.link}" target="_blank">More Info</a>
    </div>
  `;
  cardContainer.innerHTML += cardHTML;
});

$(document).ready(function () {
  $("#formSubmit").click(() => {
    // submitForm();
  });

  addCards(cardList);
});

