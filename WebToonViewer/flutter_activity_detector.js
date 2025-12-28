document.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'IFRAME') {
    if (window.sendToFlutter) {
            window.sendToFlutter("WebViewCall;CountReset");
          }
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'IFRAME') {
if (window.sendToFlutter) {
        window.sendToFlutter("WebViewCall;CountReset");
      }
  }
});

document.addEventListener('touchstart', (e) => {
  if (e.target.tagName === 'IFRAME') {
if (window.sendToFlutter) {
        window.sendToFlutter("WebViewCall;CountReset");
      }
  }
});

window.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    if (window.sendToFlutter) window.sendToFlutter("Wheel:Up");
  } else if (e.deltaY > 0) {
    if (window.sendToFlutter) window.sendToFlutter("Wheel:Down");
  }
});