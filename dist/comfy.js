(function(ctx) {

    /*###### Controller for handling requests ######*/
    function HttpController() {
      this.methods = ['GET', 'SET', 'PUT', 'DELETE', 'JSONP'];
    }


    /* ##### Make our Ajax request ####*/
    HttpController.prototype.xmlHttp = function(method, url, data, successCallback, errorCallback) {

        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

              if(successCallback != null)
                successCallback(xmlHttp.responseText);

            } else if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {

              if(errorCallback != null)
                errorCallback(xmlHttp)

            }

        }
        xmlHttp.open(method, url, true); // true for asynchronous
        xmlHttp.send(data);

    }

    /* ###### Validate config values and warn user if something is malformated ####### */
    HttpController.prototype.validate = function(method, url, data, successCallback, errorCallback){

      var errors = 0;

      //Check if user method type is valid
      if(this.methods.indexOf(method) == -1){
        errors++;
        console.error("ComfyJs: \""+method+"\" is not a valid method type.");
      }

      //Check if callbacks are of type function
      if(typeof successCallback !== 'function' && successCallback != null){
        errors++;
        console.error("ComfyJs: success callback is not a function.");
      }

      if(typeof errorCallback !== 'function' && errorCallback != null){
        errors++;
        console.error("ComfyJs: error callback is not a function.");
      }

      return errors;
    }




    var _controller = new HttpController();

    window.$http = function(config) {

        config.method = config.method.toUpperCase();

        var errors = _controller.validate(config.method, config.url, config.data, config.success, config.error);

        if(errors == 0){
          _controller.xmlHttp(config.method, config.url, config.data, config.success, config.error);
        }


    };

})(window);


