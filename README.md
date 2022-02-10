# Javascript

## Decimal Error solution
  - tofix()
    let result = (0.1 + 0.2).toFixed(2); // '0.30'
    Number(result);
  - Math.round()
    Math.round(20.49); // 20 
    Math.round((0.1 + 0.2) * 10) / 10;
    
## Display color log

  Reset = "\x1b[0m"
  Bright = "\x1b[1m"
  Dim = "\x1b[2m"
  Underscore = "\x1b[4m"
  Blink = "\x1b[5m"
  Reverse = "\x1b[7m"
  Hidden = "\x1b[8m"

  FgBlack = "\x1b[30m"
  FgRed = "\x1b[31m"
  FgGreen = "\x1b[32m"
  FgYellow = "\x1b[33m"
  FgBlue = "\x1b[34m"
  FgMagenta = "\x1b[35m"
  FgCyan = "\x1b[36m"
  FgWhite = "\x1b[37m"

  BgBlack = "\x1b[40m"
  BgRed = "\x1b[41m"
  BgGreen = "\x1b[42m"
  BgYellow = "\x1b[43m"
  BgBlue = "\x1b[44m"
  BgMagenta = "\x1b[45m"
  BgCyan = "\x1b[46m"
  BgWhite = "\x1b[47m"

  Example: console.log('\u001b[32m\u001b[1m Login user:  %d\u001b[0m ', rows.length);

## Log type

  console.log("Log Info");    
  console.info("Info Info");      
  console.warn("Warn Info");      
  console.error("Error Info");  

## sting to int
  parseInt(sting)

## Check object
  if (
    typeof yourVariable === 'object' &&
    !Array.isArray(yourVariable) &&
    yourVariable !== null
) {
    executeSomeCode();
}

## Don't use eval function

you can use other functions instead of eval function.

var key = 'a';
using eval
eval('a') = 1;
using window
window[key] = 1;

var tiger = {}
tiger['age'] = 2;
var age_key = 'age';
tiger[age_key] = 2;

## console.log with time

(function() {
    var old = console.log;
    console.log("> Log Date Format DD/MM/YY HH:MM:SS - UTCString");
    console.log = function() {
        var n = new Date();
        var d = ("0" + (n.getDate().toString())).slice(-2),
            m = ("0" + ((n.getMonth() + 1).toString())).slice(-2),
            y = ("0" + (n.getFullYear().toString())).slice(-2),
            t = n.toUTCString().slice(-13, -4);
        Array.prototype.unshift.call(arguments, "[" + d + "/" + m + "/" + y + t + "]");
        old.apply(this, arguments);
    }
})();
## setTimeout (run function after 1 second)

setTimeout(function(){
  ...code
}, 1000);

## set defualt parameter value in function

function(param1, param2= default value){}


