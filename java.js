document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  // Initialize Snap.svg
  const s = Snap("#svg");
  const bigCircle = s.circle(150,150,100);

  bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
  });

  bigCircle.animate({r: 50}, 1000);
});