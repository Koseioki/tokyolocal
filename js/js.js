// install AB kirigirisu
(function (d) {
    var config = {
        kitId: 'ben2upm',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);


// sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "280px";
  // document.getElementById("main").style.marginLeft = "280px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

function japanese() {
  document.getElementById("jp").style.display = "block";
  document.getElementById("en").style.display = "none";
}

function english() {
  document.getElementById("jp").style.display = "none";
  document.getElementById("en").style.display = "block";
}
