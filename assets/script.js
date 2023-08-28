function openTab(evt, tabName) {
  let i, tab__content, tab__name;
  tab__content = document.getElementsByClassName("tab__content");
  for (i = 0; i < tab__content.length; i++) {
    tab__content[i].style.display = "none";
  }
  tab__name = document.getElementsByClassName("tab__name");
  for (i = 0; i < tab__name.length; i++) {
    tab__name[i].className = tab__name[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function labelFocusHandler(labelId) {
  let label = document.getElementById(labelId);
  label.style.transform = "translate(-12px, -26px)";
  label.classList.add("minified");
}

function validateInput(labelId, inputId) {
  let label = document.getElementById(labelId);
  let input = document.getElementById(inputId);

  let nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/g;
  let emailRegexp = /^[\w-]+[0-9]*@([\w-]+\.)+\w{2,4}$/g;
  let telRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;

  function showError() {
    input.classList.add("error");
    label.classList.add("error");
  }

  function hideError() {
    input.classList.remove("error");
    label.classList.remove("error");
  }

  if (input.value.length === 0) {
    showError();
  } 

  if ((inputId === "name-input" && !input.value.toString().match(nameRegexp)) ||
    (inputId === "tel-input" && !input.value.toString().match(telRegexp)) ||
    (inputId === "email-input" && !input.value.toString().match(emailRegexp))) {
    showError();
  } else {
    hideError();
  }
}

function labelBlurHandler(labelId, inputId) {
  let label = document.getElementById(labelId);
  let input = document.getElementById(inputId);

  if (input.value.length === 0) {
    label.style.transform = "translate(0, 0)";
    label.classList.remove("minified");
    validateInput(labelId, inputId);
  } 
}

function moveEl(elemClass, axis, dir, posInit, posFin, posStep) {
  let id = null;
  const elem = document.getElementsByClassName(elemClass)[0];
  let pos = posInit;
  clearInterval(id);
  id = setInterval(frame, 3);
  function frame() { 
    if (pos === posFin) {
      clearInterval(id);
    } else {
      pos += posStep; 
      if (axis === "x") {
        if (dir === "left") {
          elem.style.opacity = "1";
          elem.style.left = pos + "px";
        } else if (dir === "right") {
          elem.style.opacity = "1";
          elem.style.right = pos + "px";
        }
      } else if (axis === "y") {
        if (dir === "top") {
          elem.style.opacity = "1";
          elem.style.top = pos + "px";
        } else if (dir === "bottom") {
          elem.style.opacity = "1";
          elem.style.bottom = pos + "px";
        }
      }
    }
  }
}

function increaseEl(elemClass, valInit, valFin, valStep) {
  let id = null;
  const elem = document.getElementsByClassName(elemClass)[0];
  let val = valInit;
  clearInterval(id);
  id = setInterval(frame, 15);
  function frame() {    
    if (val === valFin) {
      clearInterval(id);
    } else {
      val += valStep; 
      elem.style.opacity = "1";
      elem.style.width = val + "px";
    }
  }
}

function arrowCircleAnim() {
  if (window.outerWidth >= 1200) {
    moveEl("arrow-1-s-1", "x", "left", -1200, 70, 10);
    moveEl("arrow-2-s-1", "x", "right", -1000, -240, 10);
    moveEl("arrow-3-s-1", "x", "right", -1000, -395, 5);
    moveEl("circle-1-s-1", "x", "left", -1000, -44, 2);
    moveEl("circle-1-s-1", "y", "top", -1000, -130, 2);
    moveEl("circle-2-s-1", "x", "left", -1000, 104, 2);
    moveEl("circle-2-s-1", "y", "top", -1000, -184, 2);
    moveEl("circle-3-s-1", "x", "right", -1100, -230, 2);
    moveEl("circle-3-s-1", "y", "bottom", -1100, -360, 2);
    moveEl("circle-4-s-1", "x", "right", -800, 4, 2);
    moveEl("circle-4-s-1", "y", "bottom", -800, -120, 2);
  } else if (window.outerWidth >= 700 && window.outerWidth < 1200) {
    moveEl("arrow-1-s-1", "x", "left", -600, -250, 5);
    moveEl("arrow-2-s-1", "x", "right", -400, 80, 5);
    moveEl("arrow-3-s-1", "x", "right", -400, -65, 5);
    moveEl("circle-1-s-1", "x", "left", -700, -30, 2);
    moveEl("circle-1-s-1", "y", "top", -700, -30, 2);
    moveEl("circle-2-s-1", "x", "left", -700, 180, 2);
    moveEl("circle-2-s-1", "y", "top", -700, 96, 2);
    moveEl("circle-3-s-1", "x", "right", -800, 26, 2);
    moveEl("circle-3-s-1", "y", "bottom", -800, 26, 2);
    moveEl("circle-4-s-1", "x", "right", -700, 30, 2);
    moveEl("circle-4-s-1", "y", "bottom", -700, -70, 2);
  } else if (window.outerWidth < 700) {
    moveEl("arrow-1-s-1", "x", "left", -600, -140, 5);
    moveEl("arrow-2-s-1", "x", "right", -400, -120, 5);
    moveEl("arrow-3-s-1", "x", "right", -400, -166, 2);
    moveEl("circle-1-s-1", "x", "left", -700, 20, 5);
    moveEl("circle-1-s-1", "y", "top", -400, 315, 5);
  }
}

function moonAnim() {
  if (window.outerWidth >= 1200) {
    moveEl("moon-img", "x", "left", -1600, 0, 2);
    moveEl("moon-img", "y", "top", -1600, 0, 2);
    increaseEl("moon-img", 0, 669, 3);
  } else if (window.outerWidth >= 700 && window.outerWidth < 1200) {
    moveEl("moon-img", "x", "left", -550, 0, 1);
    moveEl("moon-img", "y", "top", -470, 90, 1);
    increaseEl("moon-img", 0, 340, 2);
  } else if (window.outerWidth < 700) {
    moveEl("moon-img", "x", "left", -450, 6, 2);
    moveEl("moon-img", "y", "top", -450, 10, 2);
    increaseEl("moon-img", 0, 372, 4);
  }
}

function s1Anim() {
  arrowCircleAnim();
  moonAnim();
}

let s3AnimOnce = (function() {
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;
      if (window.outerWidth >= 1200) {
        moveEl("arrow-1-s-3", "x", "left", -1200, 0, 5);
        moveEl("arrow-2-s-3", "x", "left", -1200, 300, 10);
        moveEl("arrow-3-s-3", "x", "right", -1300, -855, 1);
        moveEl("circle-1-s-3", "x", "left", -1200, 28, 4);
        moveEl("circle-1-s-3", "y", "top", -1200, -300, 4);
        moveEl("circle-2-s-3", "x", "right", -400, 300, 2);
        moveEl("circle-2-s-3", "y", "bottom", -750, -50, 2);
      } else if (window.outerWidth >= 700 && window.outerWidth < 1200) {
        moveEl("arrow-1-s-3", "x", "left", -800, -326, 2);
        moveEl("arrow-2-s-3", "x", "left", -700, -140, 2);
        moveEl("arrow-3-s-3", "x", "right", -800, -196, 2);
        moveEl("circle-1-s-3", "x", "left", -500, -30, 2);
        moveEl("circle-1-s-3", "y", "bottom", -600, 6, 2);
        moveEl("circle-2-s-3", "x", "right", -450, -25, 1);
        moveEl("circle-2-s-3", "y", "bottom", -500, -90, 1);
      } else if (window.outerWidth < 700) {
        moveEl("arrow-1-s-3", "x", "left", -800, -320, 2);
        moveEl("arrow-2-s-3", "x", "left", -700, -210, 2);
        moveEl("arrow-3-s-3", "x", "right", -800, -336, 2);
        moveEl("circle-1-s-3", "x", "left", -500, -24, 2);
        moveEl("circle-1-s-3", "y", "bottom", -600, 124, 2);
        moveEl("circle-2-s-3", "x", "right", -500, -36, 1);
        moveEl("circle-2-s-3", "y", "bottom", -500, -20, 1);
      }
      
    }
  };
})();

function anim3OnScroll() {
  $(window).scroll(function() {
    let el = document.getElementsByClassName("section-3")[0];
    let elTop = el.getBoundingClientRect().top;
    if (elTop <= (window.innerHeight || document.documentElement.clientHeight)) {
      s3AnimOnce();
    }
  });
}

$('.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 64,
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
});

$(document).ready(function() {
  document.getElementById("defaultOpen").click();
  s1Anim();
  anim3OnScroll();
});

