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
    window.navigator.vibrate(8);
  }
  catch (err) {
    // we reduce the severity of failures here because sometimes
    // the page just isn't ready for it yet,
    // and this stops the debugger from pausing, etc.
    console.info(err);
  }
});
