
function MyAjax(url, data) {
    this.url = url;
    this.data = data;
}

MyAjax.prototype.getXMlHttp = function() {
    return new XMLHttpRequest();
}

MyAjax.prototype.onBeforeSend = function(xmlHttp) {
    //headers
    //modify
}

MyAjax.prototype.onSuccess = function(xmlHttp) {

}

MyAjax.prototype.onError = function(xmlHttp) {

}

MyAjax.prototype.send = function() {
    var xmlHttp = this.getXMlHttp();
    xmlHttp.open(this.action, this.url, true);
    this.onBeforeSend(xmlHttp);
    var self = this;
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            
            this.status.toString()[0] == 2 ? self.onSuccess(self.dataType == "json" ? JSON.parse(this.response) : this.response) : self.onError(this);
        }
    };
    xmlHttp.send(this.data);
}

function GetAjax(url, data) {
    MyAjax.call(this, url, data);
}

GetAjax.prototype = Object.create(MyAjax.prototype);

GetAjax.prototype.action = "GET";


function PostAjax(url, data) {
    MyAjax.call(this, url, data);
}

PostAjax.prototype = Object.create(MyAjax.prototype);

PostAjax.prototype.action = "POST";

PostAjax.prototype.onBeforeSend = function(xmlHttp) {
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
}
