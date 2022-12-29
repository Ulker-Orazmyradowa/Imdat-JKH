// For adding active classes to language
var header = document.getElementById("myDiv");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeLanguage");
    current[0].className = current[0].className.replace(" activeLanguage", "");
    this.className += " activeLanguage";
  });
}

var headerRes = document.getElementById("myDivRes");
var btnsRes = headerRes.getElementsByClassName("btnRes");
for (var i = 0; i < btnsRes.length; i++) {
  btnsRes[i].addEventListener("click", function () {
    var currentRes = document.getElementsByClassName("activeLanguageRes");
    currentRes[0].className = currentRes[0].className.replace(" activeLanguageRes", "");
    this.className += " activeLanguageRes";
  });
}

//toggle to hide and show the side navigation

function openCloseFunction() {
  document.getElementById("mySidenav").classList.toggle("showNav");
  document.getElementById("main").classList.toggle("showMain");
  document.getElementById("downloadBtn1").classList.toggle("showBtn1");
  document.getElementById("downloadBtn2").classList.toggle("showBtn2");
  document.getElementById("downloadBtn1Responsive").classList.toggle("showBtn1Responsive");
  document.getElementById("downloadBtn2Responsive").classList.toggle("showBtn2Responsive");
}

//for tabs to open and close the navigation butttons

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//These lines of code are for opening the navigation tabs

function openNavTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBell", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeBell";
}
document.getElementById("defaultOpen2").click();


// These liens of code is for oopening navigation tab in responsive mode

// function openNavTabRes(evt, tabName) {
//   var i, tabcontentRes, tablinksRes;
//   tabcontentRes = document.getElementsByClassName("tabcontentRes");
//   for (i = 0; i < tabcontentRes.length; i++) {
//     tabcontentRes[i].style.display = "none";
//   }
//   tablinksRes = document.getElementsByClassName("tablinksRes");
//   for (i = 0; i < tablinksRes.length; i++) {
//     tablinksRes[i].className = tablinksRes[i].className.replace(" activeBellRes", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " activeBellRes";
// }
// document.getElementById("defaultOpenRes").click();
$('.openclose').click(function(){
  $('.contentOfProfile').toggleClass('changeHeight');
  $('.openclose > *').toggleClass('showProfile hideProfile');
})

$('.openclose2').click(function(){
  $('.contentOfProfile2').toggleClass('changeHeight2');
  $('.openclose2 > *').toggleClass('showProfile2 hideProfile2');
})

$('.openclose3').click(function(){
  $('.contentOfProfile3').toggleClass('changeHeight3');
  $('.openclose3 > *').toggleClass('showProfile3 hideProfile3');
})

$('.openclose4').click(function(){
  $('.contentOfProfile4').toggleClass('changeHeight4');
  $('.openclose4 > *').toggleClass('showProfile4 hideProfile4');
})

$('.openclose5').click(function(){
  $('.contentOfProfile5').toggleClass('changeHeight5');
  $('.openclose5 > *').toggleClass('showProfile5 hideProfile5');
})

$('.openclose6').click(function(){
  $('.contentOfProfile6').toggleClass('changeHeight6');
  $('.openclose6 > *').toggleClass('showProfile6 hideProfile6');
})

$('.openclose7').click(function(){
  $('.contentOfProfile7').toggleClass('changeHeight7');
  $('.openclose7 > *').toggleClass('showProfile7 hideProfile7');
})


//these lines of code are for opening a profile tab

function openProFileTab(evt, tabName) {
  var i, tabcontent3, tablinks3;
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].style.display = "none";
  }
  tablinks3 = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].className = tablinks3[i].className.replace(" activeProfile", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeProfile";
}
document.getElementById("defaultOpen3").click();

//these lines of codes are for displaying the details of table

// function openDetails(){
//   document.getElementById("detailsCont").classList.toggle("showDetails");
// }

function openJan(icon) {
  var x = document.getElementById("January");
  icon.classList.toggle("bx-x");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openFeb(icon) {
  var y = document.getElementById("February");
  icon.classList.toggle("bx-x");

  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function openJan2(icon) {
  var x = document.getElementById("January2");
  icon.classList.toggle("bx-x");

  if (x.style.display === "block") {
    x.style.display = "none";n
  } else {
    x.style.display = "block";
  }
}

function openFeb2(icon) {
  var y = document.getElementById("February2");
  icon.classList.toggle("bx-x");

  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

//these lines of codes are for modal Box in Zayawki starrating:

var modal = document.querySelector(".modal");

var btn = document.querySelector(".myBtn");

var span = document.getElementsByClassName("close")[0];

// var RateSubmit = document.getElementsById("RateSubmit")

// RateSubmit.onclick =function(){
//   modal.style.display = "none";
// }

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


var modalRes = document.querySelector(".modalRes");

var btnRes = document.querySelector(".myBtnRes");

var spanRes = document.getElementsByClassName("closeRes")[0];

// var RateSubmitRes = document.getElementsById("RateSubmitRes")

// RateSubmitRes.onclick =function(){
//   modalRes.style.display = "none";
// }

btnRes.onclick = function () {
  modalRes.style.display = "block";
};

spanRes.onclick = function () {
  modalRes.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalRes) {
    modalRes.style.display = "none";
  }
};

///these lines of code is for dynamic star rating:

function getSiblings(element, type) {
  var arraySib = [];
  if (type == "prev") {
    while ((element = element.previousSibling)) {
      arraySib.push(element);
    }
  } else if (type == "next") {
    while ((element = element.nextSibling)) {
      arraySib.push(element);
    }
  }
  return arraySib;
}
for (var i = 1; i <= 5; i++) {
  document.getElementById(
    "w__stars"
  ).innerHTML += `<span class="r__icon"><i class='bx bx-star'></i></span>`;
}
for (var i = 1; i <= 5; i++) {
  document.getElementById(
    "w__starsRes"
  ).innerHTML += `<span class="r__icon"><i class='bx bx-star'></i></span>`;
}
var icon = document.getElementsByClassName("r__icon");
for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function (e) {
    this.innerHTML = `<i class='bx bxs-star'></i>`;
    var prev = getSiblings(this, "prev");
    var next = getSiblings(this, "next");
    // populate previous siblings
    for (p = 0; p < prev.length; p++) {
      prev[p].innerHTML = `<i class='bx bxs-star'></i>`;
    }
    // clear next siblings
    for (n = 0; n < next.length; n++) {
      next[n].innerHTML = `<i class='bx bx-star'></i>`;
    }
  });
}

//These lines of codes are for opening thoughts form

function openThought() {
  document.getElementById("thoughtForm").style.display = "block";
  document.getElementById("dNone").style.display = "none";
}
function closeThought() {
  document.getElementById("questionContainer").style.display = "none";
}

function openThought2() {
  document.getElementById("thoughtForm2").style.display = "block";
  document.getElementById("dNone2").style.display = "none";
}
function closeThought2() {
  document.getElementById("questionContainer2").style.display = "none";
}

function show() {
  let placeInput = document.getElementById("password-place");
  let hidePass = document.getElementById("button-pass");

  if (placeInput.type == "password") {
    placeInput.type = "text";
    hidePass.className = "bx bx-hide bx-tada bx-rotate-90";
  } else {
    placeInput.type = "password";
    hidePass.className = "bx bx-show bx-tada bx-rotate-90";
  }
}

/// here starts the chatbox behavior


function newMessage() {
  message = $(".message-input input").val();
  const $container = $(".form-container");
  if ($.trim(message) == "") {
    return false;
  }
  $(
    '<li class="sent"><img src="/assets/profileImg.jpg" alt="" /><p>' +
      message +
      "</p><span class='timeOfChat'></span></li>"
  ).appendTo($(".messages ul"));
  $(".message-input input").val(null);
  $(".contact.active .preview").html("<span>You: </span>" + message);
  $(".messages").animate({ scrollTop: $($container).height() }, 1000);
}

$(".submit").click(function () {
  newMessage();
  startTime();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    newMessage();
    startTime();
    return false;
  }
});

var options = { year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();
document.getElementById("dateOfChat").innerHTML = today.toLocaleDateString("en-US", options);

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  var nodes = document.querySelectorAll("span.timeOfChat");
  var last = nodes[nodes.length-1];
  last.innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



// $(function(){
//   $("#fileUpload").change(function(event){
//     var x = event.files[0].name;
//     $(".replies").text(x);
//   })
// })
// document.querySelector("#fileUpload").onchange = function(){
//   document.querySelector("#messageName").textContent = this.files[0].name;
// }

const form = document.querySelector("form"),
      fileInput = form.querySelector(".file-input"),
      messagesList = document.querySelector('.messages-list');


form.addEventListener("click", () => {
  fileInput.click();
  const li = document.createElement("li");

  li.classList.add("sent");
  
});



fileInput.onchange = ({ target }) => {
  let file = target.files[0]; //getting file and [0] this means if user has selected multiple files then get it

  if (file) {
    // if file is selected
    let fileName = file.name; //getting selected file name
    const $container = $(".form-container");
    $(".messages").animate({ scrollTop: $($container).height() }, 1000);
    if (fileName.length >= 12) {
      let splitName = fileName.split(".");
      fileName = splitName[0].substring(0, 12) + ".... ." + splitName[1];
    }
    uploadFile(fileName, target); // calling uploadFile with passing file name as an argument
    
  }
};



function uploadFile(name) {

  const progressArea = document.createElement("li");
  
  progressArea.className = 'sent';

  const uploadedArea = document.createElement("li");

  uploadedArea.className = 'sent';

  let xhr = new XMLHttpRequest(); //creating new xml obj (AJAX)
  xhr.open("POST", "php/upload.php"); //sending post request to the specified URL/File
  xhr.upload.addEventListener("progress", ({ loaded, total }) => {
    //getting percentage of loadd file size
    let fileLoaded = Math.floor((loaded / total) * 100); //getting percentage of loaded file
    let fileTotal = Math.floor(total / 1000); //getting file size in KB from bytes
    let fileSize;
    // if file size is less than 1024 then add only KB else MB
    fileTotal < 1024
      ? (fileSize = fileTotal + " KB")
      : (fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB");
    let progressHTML =
      ' <img src="/assets/profileImg.jpg" /><div class="rowjagaz"><i class="bx bx-file"></i><div class="contentjagaz"><div class="details"><span class="name">' +
      name +'</span><span class="percent">' +
      fileLoaded +
      '%</span></div><div class="progress-bar"><div class="progress" style="width:'+ fileLoaded +'%"></div></div></div></div><span class="timeOfChat"></span>';

    uploadedArea.classList.add("onprogress");

    progressArea.innerHTML = progressHTML;

    messagesList.append(progressArea);


    if (loaded == total) {


      progressArea.remove();

      let uploadedHTML =
        '<img src="/assets/profileImg.jpg" alt="" /><div class="rowjagaz"><i class="bx bx-file"></i><div class="contentjagaz"><div class="details"><span class="name">' +
        name +'</span><span class="size">' +
        fileSize +
        '</span></div></div><i class="bx bx-check"></i></div><span class="timeOfChat"></span>';

      uploadedArea.innerHTML = uploadedHTML;

      messagesList.append(uploadedArea);


      uploadedArea.classList.remove("onprogress");

      form.reset();
    }
  });
  let formData = new FormData(form); //formData is an object to easily send form data
  xhr.send(formData); //sending form data to php

}





// Theese lines of code are for opening and closing the left navigation menu

var myHeader = document.querySelector("header")

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
  modal.style.justifyContent = "flex-end";
  myHeader.style.zIndex = "0";
}

span.onclick = function() {
  modal.style.display = "none";
  myHeader.style.zIndex = "100";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// These lines of code are for navigation in responsive to open when burger menu is clicked

var myHeader = document.querySelector("header")

var modalNav = document.getElementById("myModalNav");

var btnNav = document.getElementById("myBtnNav");

var spanNav = document.getElementsByClassName("closeNav")[0];

let menu = document.querySelector(".modal-contentNav");

let sideBtns = document.querySelectorAll('.section__sideNav--item');
for(let i = 0; i<sideBtns.length; i++){
  sideBtns[i].addEventListener('click',()=>{
    menu.style.left = "-100%";
    modalNav.style.display = "none";
  })
}

btnNav.onclick = function() {
  modalNav.style.display = "flex";
  modalNav.style.justifyContent = "flex-start";
  myHeader.style.zIndex = "1";
  menu.style.left = "0";
}

spanNav.onclick = function() {
  modalNav.style.display = "none";
  myHeader.style.zIndex = "100";
  menu.style.left = "-100%";
}

window.onclick = function(event) {
  if (event.target == modalNav) {
    modalNav.style.display = "none";
    menu.style.left = "-100%";
  }
}



//Theese lines of codes are for opening monthly resource usage in responsive mode

function openResource(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("monthsOfresource");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("yearResource");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeResource", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " activeResource";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenResource").click();







//Theese codes are for opening elecricity, water and gas usage per month

function openJanuaryReciept(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("resourceUsage");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById("firstYear").style.display="none";
  document.getElementById("yearsOfResource").style.display = "none"

  tablinks = document.getElementsByClassName("showChartBtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeResource", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " activeResource";
}



function backToFirstYear(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("resourceUsage");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById("firstYear").style.display="block";
  document.getElementById("yearsOfResource").style.display = "flex"

  // tablinks = document.getElementsByClassName("showChartBtn");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" activeResource", "");
  // }
  document.getElementById(cityName).style.display = "flex";
  // evt.currentTarget.className += " activeResource";
}




