// function current_nav(pos) {
//     let navElms = document.getElementsByClassName("nav-elements")
//     console.log(navElms)
//     for ( let i = 0 ; i < navElms.length ; i++ ) {
//       if ( i == pos ) {
//         navElms[i].style.color = "Black"
//       }
//       else {
//         navElms[i].style.color = "White"
//       }
//     }
//     console.log(pos)
//     if ( pos == 0 ) {
//         // console.log('here')
//         // let aboutUs = document.getElementById("about-container")
//         // console.log(aboutUs)
//         // // aboutUs.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
//         // // aboutUs.scrollTo({top:0})
//         // aboutUs.scrollIntoView()
//         // console.log(aboutUs.scrollHeight)
        
//     }
//   }

// function scrolldiv() {
//   console.log('in func')
//     window.scrollTo(0, findPosition(document.getElementById("aboutContainer")));
// }
// function findPosition(obj) {
//     var currenttop = 0;
//     if (obj.offsetParent) {
//         do {
//             currenttop += obj.offsetTop;
//         } while ((obj = obj.offsetParent));
//         console.log(currenttop)
//         return [currenttop];
//     }
// }