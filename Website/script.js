function sendClick(){
    var button = document.getElementById('button1');
    button.title = "Gedrueckt";
    var input = document.getElementById('messageinput');
    websocket.send(input.value);
  }

function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  }

  function writeToScreen(message)
  {
    var pre = document.getElementById("output");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
  }

function sendColor(jscolor){
  var color = jscolor;
  websocket.send(color);
}

var prefix = "ws:";
var host = window.location.host;
var complhost = prefix + host;
var fixedhost = "ws://192.168.0.12";
var websocket = new WebSocket(fixedhost);
websocket.onmessage = function(evt) { onMessage(evt) };


var button = document.getElementById('button1');
button.addEventListener('click', sendClick);