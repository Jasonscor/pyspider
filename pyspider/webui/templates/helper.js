// vim: set et sw=2 ts=2 sts=2 ff=unix fenc=utf8:
// Author: Binux<i@binux.me>
//         http://binux.me
// Created on 2014-03-16 11:05:05

(function() {
  let loaded = false;
  let start_time = (new Date()).getTime();

  function resize() {
    if (!loaded)
      parent.postMessage({type: 'resize', height: document.body.scrollHeight}, '*');
  }
  window.addEventListener('load', function() {
    resize();
    loaded = true;
  });

  setTimeout(resize, 1000);
  setTimeout(resize, 2000);
  setTimeout(resize, 3000);
  setTimeout(resize, 5000);
  setTimeout(resize, 10000);
  setTimeout(resize, 20000);
  setTimeout(window.stop, 30000);

  var css_helper_enabled = false;
  window.addEventListener("message", function(ev) {
    if (!css_helper_enabled && ev.data.type == "enable_css_selector_helper") {
      var script = document.createElement("script");
      script.src = ev.data.src;
      document.body.appendChild(script);
      css_helper_enabled = true;
    }
  }, false);

  document.addEventListener('click', function(ev) {
    ev.preventDefault();
  });
})();
