(function(ctx){

    /*###### Controller for handling requests ######*/
    function HttpController(){

    }


    /* ##### Make our Ajax request ####*/
    HttpController.prototype.xmlHttp = function (method, url, data, successCallback, errorCallback) {
      var xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                  successCallback(xmlHttp.responseText);
                }else if(xmlHttp.readyState == 4 && xmlHttp.status != 200){
                  errorCallback(xmlHttp)
                }
          }
          xmlHttp.open(method, url, true); // true for asynchronous
          xmlHttp.send(data); 
    }




    var _controller = new HttpController();

    window.$http = function(config){

      config.method = config.method.toUpperCase();

        _controller.xmlHttp(config.method, config.url, config.data, config.success, config.error);


    };

})(window);
