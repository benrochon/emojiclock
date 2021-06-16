
let clockFaces= [["🕛","🕧"],["🕐","🕜"],["🕑","🕝"],["🕒","🕞"],["🕓","🕟"],["🕔","🕠"],["🕕","🕡"],["🕖","🕢"],["🕗","🕣"],["🕘","🕤"],["🕙","🕥"],["🕚","🕦"]];

window.onload = function() {
    updateClock();
    setInterval(updateClock(), 10*1000);
  };

let updateClock = function(){
    let d = new Date()
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let emojiHours = hours >= 12 ? hours-12 : hours;
    let emojiMinutes = minutes < 30 ? 0 : 1;
   
    document.getElementById("clockface").innerHTML = clockFaces[emojiHours][emojiMinutes];
    changeFavicon(clockFaces[emojiHours][emojiMinutes]);
    console.log(`clock updated: ${hours}:${minutes}`);
    //console.log(`${emojiHours}:${emojiMinutes}`);
} 



let changeFavicon = function(emoji){
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>'+emoji+'</text></svg>';
    
    
}
