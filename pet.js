// NOTE: errors kicked to console.info are ones that have a tendency
// not to fire the first few times they're called, due to page restrictions on
// what can be triggered without a user event.

document.body.addEventListener('pointerdown',function(e){
  if (document.fullscreenEnabled && !document.fullscreenElement) {
      document.body.requestFullscreen().catch(console.info);
  }
});

document.body.addEventListener('pointermove', function(e) {
  try {
    var clampedTopPressureRange = Math.min(Math.max(
      (e.pressure-0.5) * 2, .1), 1);
    window.navigator.vibrate(clampedTopPressureRange*10);
  }
  catch (err) {
    console.info(err);
  }
});
