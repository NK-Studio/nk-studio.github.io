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