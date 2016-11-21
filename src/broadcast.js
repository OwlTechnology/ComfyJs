(function(ctx){
    var BroadcastController = function(){
        this.listeners = {};
    };

    BroadcastController.prototype.registerListener = function(name, callback){
        name = name.toLowerCase();

        if(!this.listeners[name]){
            this.listeners[name] = [];
        }

        this.listeners[name].push(callback);
    };

    BroadcastController.prototype.notifyListeners = function(data){
        var x, y, constructName, splitName;
        data.name = data.name.toLowerCase();

        this.notifyListenerGroup(data.name, data.payload);

        if(data.propagate){
            splitName = data.name.split(".");
            constructName = "";

            for(x = splitName.length - 2; x >= 0; x -= 1){
                constructName = "";

                for(y = 0; y <= x; y++){
                    constructName += splitName[y] + ((y >= x - 1) ? "" : ".");
                }

                this.notifyListenerGroup(constructName, data);
            }
        }
    };

    BroadcastController.prototype.notifyListenerGroup = function(name, payload){
        var x, listener, listeners = this.listeners[name];

        if(listeners){
            for(x = 0; x < listeners.length; x++){
                listener = listeners[x];

                listener(payload);
            }
        }
    };

    var _controller = new BroadcastController();

    window.$broadcast = function(name, payload){
        _controller.notifyListeners({
            name: name,
            payload: payload,
            propagate: true
        })
    };

    window.$on = function(name, callback){
        _controller.registerListener(name, callback);
    };
})(window);
