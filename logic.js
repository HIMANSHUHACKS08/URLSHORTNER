/*global console,$,document */
/*eslint-disable no-console*/
let btn = document.getElementById("Shorten");
btn.addEventListener('click', Short);
async function Short() {
    let Url = document.getElementById("longurl").value;
    let shorturl = document.getElementById("shorturl");
    //console.log(Url);
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${Url}`);
    const data = await result.json();
    
    shorturl.value = data.result.short_link2;    
    //console.log(data);
}