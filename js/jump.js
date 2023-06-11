function jump() {
    var time = new Date().getTime();
    time = time % 10;
    
    switch (time) {
        case 0: jumpCsgo();
            break;
        case 1 :jumpYuan();
            break;
        default: jumpDefault();
    }
}

function jumpCsgo(){
    document.getElementById("yuan").style.textDecoration="line-through"
    document.getElementById("wwqy").style.textDecoration="line-through"
    var myTarget = window.setTimeout(function(){
        window.location.href = "https://www.csgo.com.cn/";}, 1000
    );
    
}
function jumpYuan(){
    document.getElementById("csgo").style.textDecoration="line-through"
    document.getElementById("wwqy").style.textDecoration="line-through"
    var myTarget = window.setTimeout(function(){
        window.location.href = "https://ys.mihoyo.com/main/";}, 1000
    );
}
function jumpDefault(){
    document.getElementById("csgo").style.textDecoration="line-through"
    document.getElementById("yuan").style.textDecoration="line-through"
    var myTarget = window.setTimeout(function(){
        window.location.href = "https://val.qq.com/";}, 1000
    );
}