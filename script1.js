// fun
function toggleMenu() {
  let menu = document.getElementById("sideMenu");

  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
}





// second section
const data = {
  1: {
    title: "Luxury Residences",
    img: "Images/features1.png",
    num: "01",
    desc: "Experience unparalleled elegance in our luxury residences."
  },

  2: {
    title: "Eco Green Buildings",
    img: "Images/Kitchen.jpg" ,
    num: "02",
    desc: "Sustainable living with modern green technology."
  },

  3: {
    title: "Vacation Homes",
    img: "Images/Vacation.jpg",
    num: "03",
    desc: "Find your perfect getaway in our unique vacation rentals."
  }
};


function switchSlide(id) {

  const display = document.getElementById('mainDisplay');
  const slide = data[id];

  // blur out
  display.classList.add('sliding');

  setTimeout(() => {

    // change content
    document.getElementById('title').innerText = slide.title;
    document.getElementById('description').innerText = slide.desc;
    document.getElementById('label-text').innerText = slide.title;
    document.getElementById('main-img').src = slide.img;
    document.getElementById('slide-num').innerText = slide.num;

    // active nav
    document.querySelectorAll('.nav-item')
      .forEach(el => el.classList.remove('active'));

    document
      .querySelector(`.nav-item:nth-child(${id})`)
      .classList.add('active');

    // bring new card
    display.classList.remove('sliding');

  }, 650);
}







function toggleServicesAccordion(header){

  const currentItem =
    header.parentElement;

  const accordion =
    currentItem.parentElement;

  accordion
    .querySelectorAll('.services-modern-item')
    .forEach(item => {

      if(item !== currentItem){
        item.classList.remove('active');
      }

    });

  currentItem
    .classList.toggle('active');
}


// Trigger morph class on title hover and keep it permanently active
document.querySelector('.luxora-hover-video-box').addEventListener('mouseenter', function() {
  document.querySelector('.luxora-hover-services').classList.add('morphed');
});






/* =========================================
   SIMPLE ACCORDION
========================================= */
function luxoraHoverAccordion(el){
  const item = el.parentElement;
  const parent = item.parentElement;

  parent.querySelectorAll('.luxora-hover-item').forEach(i => {
    if(i !== item){
      i.classList.remove('active');
    }
  });

  item.classList.toggle('active');
}

/////////////////////////////////////////////////



 document.querySelectorAll('.prop-card').forEach(card => {
    const video = card.querySelector('.prop-video');
    card.addEventListener('mouseenter', () => { if(video) video.play(); });
    card.addEventListener('mouseleave', () => { if(video) { video.pause(); video.currentTime = 0; } });
  });

  function run() {
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' })
  }







  //NAV SIDE BAR
  // MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// OPEN MENU
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
});

// CLOSE BUTTON
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});

// CLICK OUTSIDE
menuOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});

//small form 
/* =========================================
   CONTACT MODAL
========================================= */

const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const contactModal = document.getElementById("contactModal");
const contactOverlay = document.getElementById("contactOverlay");

openContact.addEventListener("click", () => {
  contactModal.classList.add("active");
});

closeContact.addEventListener("click", () => {
  contactModal.classList.remove("active");
});

contactOverlay.addEventListener("click", () => {
  contactModal.classList.remove("active");
});

/* =========================================
   LOCAL STORAGE FORM
========================================= */

const luxoraForm = document.getElementById("luxoraForm");
const successMessage = document.getElementById("successMessage");



/* SAVE FORM */
luxoraForm.addEventListener("submit", (e) => {

  e.preventDefault();

  localStorage.setItem(
    "luxora_name",
    document.getElementById("name").value
  );

  localStorage.setItem(
    "luxora_phone",
    document.getElementById("phone").value
  );

  localStorage.setItem(
    "luxora_email",
    document.getElementById("email").value
  );

  localStorage.setItem(
    "luxora_message",
    document.getElementById("message").value
  );

  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

});

console.log(localStorage);