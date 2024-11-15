let qr = document.getElementById("qr");
let code = document.getElementById("code");
let url = document.getElementById("url");


function generate() {
    if(url.value.length > 0) {
        code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
        qr.classList.add("show");
    }
    else {
        url.classList.add('error');
        setTimeout(()=> {
            url.classList.remove('error'); 
        }, 1000)
    }
}