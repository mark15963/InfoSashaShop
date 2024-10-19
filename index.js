function myFunc(){
    document.getElementById("demo").innerHTML = "Hey";
}

function myFunc2(){
    const testConst=69;
    console.log(testConst);
}

var aTags = document.querySelectorAll('a[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });    
}