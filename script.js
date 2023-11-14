let mavi = document.getElementById("mavi");
let pembe = document.getElementById("pembe");
let h1 = document.getElementById("h1")

let play = document.getElementById("basla")
let spn1 = document.getElementById("spn1")
let sayac = document.getElementById("sayac")

// Başlangıç genişliklerini ayarla
mavi.style.width = "200px";
pembe.style.width = "200px";

let currentWidth = 200; // Başlangıç genişliği
let pembeCurrentWidth = 200; // Başlangıç genişliği

document.body.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") { // Harf duyarlılığına dikkat et
        currentWidth += 10; // "mavi" öğesinin genişliğini artır
        mavi.style.width = currentWidth + "px";
        pembeCurrentWidth -= 10; // "pembe" öğesinin genişliğini azalt
        pembe.style.width = pembeCurrentWidth + "px";
        
        if (currentWidth === 350) { // "mavi" öğesi 300 piksele ulaştığında
            h1.textContent='mavi kazandi'
            currentWidth = 200;
            pembeCurrentWidth = 200;
        }
    } else if (e.key === "i" || e.key === "I") { // Harf duyarlılığına dikkat et
        pembeCurrentWidth += 10; // "pembe" öğesinin genişliğini artır
        pembe.style.width = pembeCurrentWidth + "px";
        currentWidth -= 10; // "mavi" öğesinin genişliğini azalt
        mavi.style.width = currentWidth + "px";
        
        if (pembeCurrentWidth === 350) { // "pembe" öğesi 300 piksele ulaştığında
            h1.textContent='Pembe kazandi'
            currentWidth = 200;
            pembeCurrentWidth = 200;
        }
    }
});
play.onclick=()=>{
    spn1.textContent='replay'
}

function aktif(){
    mavi.disabled=false
    pembe.disabled=false
}
function pasif(){
    mavi.disabled=true
    pembe.disabled=true
}