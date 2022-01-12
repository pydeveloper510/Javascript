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

console.log('\u001b[32m\u001b[1m Login user: %d\u001b[0m ', 10);

console.log("Log Info");
console.info("Info Info");
console.warn("Warn Info");
console.error("Error Info");
