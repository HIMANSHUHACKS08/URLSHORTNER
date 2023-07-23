/*global console,$,document */
/*eslint-disable no-console*/

let newUrl = document.getElementById("shorturl");
let copybtn = document.getElementById("copy");
copybtn.onclick =()=>{
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value);
    console.log(newUrl);
}