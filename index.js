import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];
const ELSO = document.querySelector("#feladat_1")
const MASODIK = document.querySelector("#feladat_2")
const HARMADIK = document.querySelector("#feladat_3");

// 1. feladat


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




// 3. feladat


const tableELEM = document.querySelectorAll("#feladat_1 tr");
function befutott() {
  for (let index = 0; index < tableELEM.length; index++) {
    tableELEM[index].addEventListener("click", function () {
      if (befutottVersenyzok.indexOf(FUTOK[index]) < 0) {
        HARMADIK.innerHTML += `<tr>
                    <td>${FUTOK[index].nev}</td>
                    <td>${FUTOK[index].nemzetiseg}</td>
                    <td>${FUTOK[index].versenyIdo}</td>
                    </tr>`;
        befutottVersenyzok.push(FUTOK[index]);
        tableELEM[index].classList.add("befutott");
      }
    });
  }
}
befutott();





// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}