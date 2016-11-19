(function(ctx){

    /*###### Controller for handling requests ######*/
    function HttpController(){

    }



    /*###### 'GET' Method #####*/
    HttpController.prototype.get = function (url, successCallback, errorCallback) {
      var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                  successCallback(xmlHttp.responseText);
                }else{
                  errorCallback(xmlHttp)
                }
          }
          xmlHttp.open("GET", url, true); // true for asynchronous
          xmlHttp.send(null);
    }




    var _controller = new HttpController();

    window.$http = function(config){

      config.method = config.method.toLowerCase();

      if(config.method == 'get'){
        _controller.get(config.url, config.success, config.error);
      }


    };

})(window);
