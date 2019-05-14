document.body.addEventListener('pointerdown',function(e){
  if (document.fullscreenEnabled && !document.fullscreenElement) {
    try {
      document.body.requestFullscreen();
    } catch(err) {
      // we reduce the severity of failures here because sometimes
      // the page just isn't ready for it yet,
      // and this stops the debugger from pausing, etc.
      console.info(err);
    }
  }
});

document.body.addEventListener('pointermove', function(e) {
  try {
    var clampedTopPressureRange = Math.min(Math.max(
      (e.pressure-0.5) * 2, .1), 1);
    window.navigator.vibrate(clampedTopPressureRange*10);
  }
  catch (err) {
    // we reduce the severity of failures here because sometimes
    // the page just isn't ready for it yet,
    // and this stops the debugger from pausing, etc.
    console.info(err);
  }
});
