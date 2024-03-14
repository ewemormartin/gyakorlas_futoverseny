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
const MASODIK = document.querySelector("#feladat_2")
function osszesit() {
    let maraton= 0;
    let felmaraton = 0;
    let TIZkm = 0;
    let txt = ""
    for (let index = 0; index < FUTOK.length; index++) {
        if (FUTOK[index].versenySzam === "maraton") {
            maraton++;
        }
        else if (FUTOK[index].versenySzam === "félmaraton") {
            felmaraton++;
        }
        else if (FUTOK[index].versenySzam === "10 km") {
            TIZkm++;
        }
    }
    txt +=  `<p>Maraton: ${maraton}</p>
             <p>Félmaraton: ${felmaraton}</p>
             <p>10km: ${TIZkm}</p>`  
    return txt;
}
MASODIK.innerHTML=osszesit();

// 3. feladat
function befutott(sor, adatok) {
    for (let index = 0; index < FUTOK.length; index++) {
        
        
    }
    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}