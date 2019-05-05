(function() {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector("#Group(2)");
      let myAnimation = new LazyLinePainter(el, {
        ease: "easeLinear",
        strokeWidth: 0.2,
        strokeOpacity: 1,
        strokeColor: "#EE2F7D",
        strokeCap: "butt"
      });
      myAnimation.paint();
    }
  };
})();
