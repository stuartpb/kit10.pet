// NOTE: errors kicked to console.info are ones that have a tendency
// not to fire the first few times they're called, due to page restrictions on
// what can be triggered without a user event.

var distancesTraveled = new Map();
var purrDistance = 10;

document.body.addEventListener('pointerdown',function(e){
  distancesTraveled.set(e.pointerId, 0);
  if (document.fullscreenEnabled && !document.fullscreenElement) {
    document.body.requestFullscreen().catch(console.info);
  }
  if (screen.orientation) {
    screen.orientation.lock('portrait').catch(console.info);
  }
});

document.body.addEventListener('pointermove', function(e) {
  // backtracking is just not recognized
  var distance = Math.max(
    distancesTraveled.get(e.pointerId) + e.movementY, 0);
  if (distance >= purrDistance) {
    try {
      var clampedTopPressureRange = Math.min(Math.max(
        (e.pressure-0.5) * 2, .1), 1);
      window.navigator.vibrate(clampedTopPressureRange*10);
    }
    catch (err) {
      console.info(err);
    }
  }
  distancesTraveled.set(e.pointerId, distance % purrDistance);
});
