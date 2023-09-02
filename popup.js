document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('toggleElement');
  button.addEventListener('click', function () {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      var activeTab = tabs[0];
      browser.tabs.sendMessage(activeTab.id, { action: 'toggleElement' });
    }).catch(err => {
      console.error(err);
    });
  });
});
