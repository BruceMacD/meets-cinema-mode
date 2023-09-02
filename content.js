browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.action === 'toggleElement') {
        // as of sept 2023
        // .fJsklc.nulMpf.Didmac.G03iKb is the class of the toolbar at the bottom of the meeting
        // .dzMPxf is the class of the "sharing" toolbar at the top of the meeting
        const elements = document.querySelectorAll('.fJsklc.nulMpf.Didmac.G03iKb, .dzMPxf');
  
        elements.forEach((element) => {
          if (element.style.display === 'none') {
            element.style.display = '';
          } else {
            element.style.display = 'none';
          }
        });
      }
    }
  );
  