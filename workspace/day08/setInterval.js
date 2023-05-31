let interval = setInterval(function(){
    console.log("사랑해")
}, 1000);

setTimeout(function(){
    clearInterval(interval);
}, 5100)