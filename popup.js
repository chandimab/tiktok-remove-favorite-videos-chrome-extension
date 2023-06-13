document.addEventListener('DOMContentLoaded', function() {
    var btnStart = document.getElementById('btnStart');
    
    btnStart.addEventListener('click', function() {  

        var count = document.getElementById("count").value;
        var timeInterval = document.getElementById("timeInterval").value;
        var textNextVideo = document.getElementById("textNextVideo").value;
        var textFavorite = document.getElementById("textFavorite").value;

  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: (count, timeInterval, textNextVideo, textFavorite) => {

                let btnFav = document.querySelector(textFavorite);
                let btnNext = document.querySelector(textNextVideo);

                var iteration = 0;
              
                setInterval(() => {
                    if (iteration < count) {
                        iteration ++;
                        btnFav.click();
                        btnNext.click();
                    }
                }, timeInterval);

            },
            args: [count, timeInterval, textNextVideo, textFavorite]
          }
        );
      });
    });
  });
  