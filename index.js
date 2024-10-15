// $(".fa-atom").click(function () {
//   $("#popup").slideToggle(500);
//   $("#popup").css({ display: "flex" });
// });

// let x = 0;
// $("#button_1").click(function () {
//   $("#loader").show("600");
//   if ((x == 0)) {
//     let z = setInterval(() => {
//       x++;
//       $("#start").text(x);
//       if (x >= 100) {
//         clearInterval(z);
//         setTimeout(()=>{
//           window.open("https://www.google.com.eg/?hl=ar");
//         } , 1000)
//       }
//     }, 100);
//   }
// });

// let x = 0;
// $("#button_1").click(function () {
//   $("#loader").show("600");
//   if (x == 0) {
//     let z = setInterval(() => {
//       x++;
//       $("#start").text(x);
//       if (x >= 100) {
//         $("#start").text("finished");
//         $("#start").css({ backgroundColor: "black" });
//         clearInterval(z);
//         $("#wrapper").css({ display: "flex" });
//         $("iframe").attr(
//           "src",
//           "https://www.youtube.com/embed/nrckAxCjtUc?si=0qhF6S9nwAc44_W-"
//         );
//       }
//     }, 100);
//   }
// });

// $("#cancel").click(function () {
//   $("#loader").hide("600");
// })

window.addEventListener("scroll", () => {
  if (scrollY > 4060) {
    let d = document.querySelector("#perfect");

    d = 0;

    if (d == 0) {
      setInterval(() => {
        if (d < 100) {
          d++;
          $("#perfect").text(d);
        }
      }, 100);
    }
  }
});

window.addEventListener("scroll", () => {
  if (scrollY >= 4060) {
    let x = document.getElementById("#experience");
    x = 0;

    if (x == 0) {
      let z = setInterval(() => {
        if (x < 20) {
          x++;
          $("#experience").text(x);
        } else {
          clearInterval;
        }
      }, 100);
    }
  }
});

let up = document.querySelector(".fa-up-long");
up.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let env = document.querySelector(".fa-envelope");
env.onclick = function () {
  $("#carrier").show(400);
};

$(".x").click(function () {
  $("#carrier").hide(400);
});
let myname = document.querySelector("#name");

$("#btn_22").click(function () {
  window.alert(`thank you ${myname.value} we will work on that `);
});

let nav = document.querySelector("#nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.style.border =" solid teal 3px "
    nav.style.borderRadius ="5px "
    nav.style.padding ="25px "

  }else{
    nav.style.border =" none "

  }
});


$("#listicon").click(function(){
  $("#nav").slideToggle(100)
  $("#nav").css({backgroundColor : "teal" , width : "90%" , height: "1000px" , margin : "auto"  })
  $(".h_1").css({display: "none"})
  $(".h_2").css({display: "none"})
})


