// install AB kirigirisu
(function (d) {
    var config = {
        kitId: 'ben2upm',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);


// Set marker options.
// const marker = new mapboxgl.Marker({
//   color: "#FFFFFF",
//   draggable: true
// }).setLngLat([30.5, 50.5])
//   .addTo(map);

// initialise swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "280px";
  document.getElementById("main").style.marginLeft = "280px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//smooth scroll
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a');

  links.forEach(function(each) {
      each.onclick = scrollSmoothly;
  });

  function scrollSmoothly(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  }
});


// display the result
function saveText() {
  // Get the input value
  var inputText = document.getElementById('searchInput').value;

    // Store the text in localStorage
    localStorage.setItem('savedText', inputText);
    
    // Update the displayed text
    // displaySavedText();

}

function displaySavedText() {

    // Retrieve the saved text from localStorage
    var savedText = localStorage.getItem('savedText');

    // Display the saved text in the HTML
    var displayDiv = document.getElementById('displayText');
    displayDiv.innerHTML = 'Results for "' + savedText + '"';
}

// Call the displaySavedText function when the page loads to show any previously saved text
displaySavedText();

