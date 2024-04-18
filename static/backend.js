
var autoSlidesInt  

let slideIndex = 1;
let n
show_slides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  show_slides(slideIndex += n);
}


function show_slides(n) {
    
  let slides = document.getElementsByClassName("slide-img-container");
  let dots = document.getElementsByClassName("img-position-indication");

  // set slide index
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // remove all images 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove all thumbnail activity status 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // display intended photo and thumbnail 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// run an auto scroll for images on display 
// interval is cleared and restarted if user interacts with thumbnails 
// calls show_slides function to increment scroll
function run_auto(SI, interval){
    let slides = document.getElementsByClassName("slide-img-container");
    

    // if running automatically, start with n = 1
    if (SI == null) {
        n = 1 
    }
    // if running after user interaction, start with n = currentpic + 1
    else {
        n = SI + 1
    }
    
    if (interval == false) {
      // interval assigned to variable for clearing
      autoSlidesInt = setInterval(()=>{

          // if the interval increases above the number of photos, reset the interval 
          if (n > slides.length) {
              n = 1
          }

          // call show_slides to interval the photos 
          show_slides(slideIndex = n)

          // increase the index
          n = n+1

      }, 4000)
    }
}


// Thumbnail image controls
// when user presses circular ack control 
// display the correlated slide, then resume sequence 
function current_slide(n) {
    show_slides(slideIndex = n);
    clearInterval(autoSlidesInt)
    setTimeout(()=>{run_auto(slideIndex, true)}, 3000)
  }
  


// alter the menu bar on small screens 
// toggle between the X shape (where change == true) and hamburger menu (where change == false)
function menuBarChange(x) {
  x.classList.toggle("change");
}