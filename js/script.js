document.addEventListener("DOMContentLoaded",function (event) {
    var homeHtml = "home.html";
    var hasnaouipage = "Hasnaoui.html";
    var mostafipage = "Mostafi.html";
    var Lmprabetpage = "Lmrabet.html";
    var Abdellahpage = "Abdellah.html"
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        console.log(targetElem);
        targetElem.innerHTML = html;
      };
      var showLoading = function (selector) {
        var html = "<div class='gif'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
      };
        // On first load, show home view
        showLoading("#container");
        $ajaxUtils.sendGetRequest(
          homeHtml,
          function (responseText) {
            document.querySelector("#container").innerHTML = responseText;
            console.log(responseText);
          },
          false
        );
      loadHasnaoui = function(){
        switchToActive("#has");
        removeactive("#ous");
        removeactive("#tah");
        removeactive("#mos");
        removeactive("#home");
        showLoading("#container");
        $ajaxUtils.sendGetRequest(hasnaouipage, function (responseText) {
          document.querySelector("#container").innerHTML = responseText;
          console.log(responseText);
        },false);
      };
      loadMostafi = function(){
        switchToActive("#mos");
        removeactive("#ous");
        removeactive("#tah");
        removeactive("#has");
        removeactive("#home");
        showLoading("#container");
        $ajaxUtils.sendGetRequest(mostafipage, function (responseText) {
          document.querySelector("#container").innerHTML = responseText;
          console.log(responseText);
        },false);
      };
      loadLmrabet = function(){
        switchToActive("#ous");
        removeactive("#mos");
        removeactive("#tah");
        removeactive("#has");
        removeactive("#home");
        $ajaxUtils.sendGetRequest(Lmprabetpage, function (responseText) {
          document.querySelector("#container").innerHTML = responseText;
        },false);
      };
      loadAbdellah = function(){
        switchToActive("#tah");
        removeactive("#ous");
        removeactive("#mos");
        removeactive("#has");
        removeactive("#home");
        $ajaxUtils.sendGetRequest(Abdellahpage, function (responseText) {
          document.querySelector("#container").innerHTML = responseText;
        },false);
      };
      loadHome = function(){
        switchToActive("#home");
        removeactive("#ous");
        removeactive("#tah");
        removeactive("#has");
        removeactive("#mos");

        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
          document.querySelector("#container").innerHTML = responseText;
        },false);
      }

      var switchToActive = function (selector) {
        classes = document.querySelector(selector).className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector(selector).className = classes;
        }
      };
      var removeactive = function(selector){
        var classes = document.querySelector(selector).className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector(selector).className = classes;
      }

});