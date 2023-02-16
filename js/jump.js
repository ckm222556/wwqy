function jump() {
        window.location.href="https://val.qq.com/";
}
        

function sleep(n) {
    var start = new Date().getTime();
    b = true;
    while (b) {
        b= (new Date().getTime() - start) < n;
    }
}