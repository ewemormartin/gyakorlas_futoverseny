import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
const ELSO = document.querySelector("#feladat_1")
function letrehozTablazat() {
    let txt = "<table>"
    for (let index = 0; index < FUTOK.length; index++) {
        txt += `<tr>
                    <td>${FUTOK[index].nev}</td>
                    <td>${FUTOK[index].nemzetiseg}</td>
                    <td>${FUTOK[index].versenySzam}</td>
                </tr>`;
    }
    txt += "</table>"
    return txt;
}
ELSO.innerHTML=letrehozTablazat();




// 2. feladat
function osszesit() {
    

}

// 3. feladat
function befutott(sor, adatok) {

    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}