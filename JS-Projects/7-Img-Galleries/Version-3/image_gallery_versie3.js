// Image_gallery_versie1.js
// een Javascript_PF project
// dropdown uit array versie

var versie = " versie 3.0";
window.onload = function () {

     //console.log(aModernArt[0][0]); //is aModernArt aanwezig?

     // no script verbergen
     var eNoScript = document.getElementById('noscript');
     eNoScript.style.display = "none";

     //array geladen?
     if(typeof aModernArt == "undefined"){
          throw new Error("array aModernArt niet gevonden");
     }
     else{
          //console.log(aModernArt[0][0]);
          //versie info
          var eKop = document.querySelector('h1');
          eKop.innerHTML = eKop.innerHTML + versie;
          //plaatshouder
          var eImg = document.getElementById('plaatshouder');
          //dynamische keuzelijst
          var eKeuzelijst = maakKeuzelijst(aModernArt);
          var eSidebar = document.querySelector('sidebar');
          eSidebar.appendChild(eKeuzelijst);
          eKeuzelijst.addEventListener("change",function(e){
               var waarde = this.value;
               console.log(waarde);
               if(waarde!="" && waarde!=null){
                    toonFoto(waarde,eImg)
          }
     });
     }
} // Einde window.onload

function maakKeuzelijst(a){
     /*
     return SELECT element
     @a array van images
     */
 
     var nArt = a.length;
     var eSelect = document.createElement('select');
     eSelect.id = "keuzelijst";
     //standaard option element
     var eOption = document.createElement('option');
     eOption.innerHTML = "Maak een keuze";
     eOption.setAttribute("value", "");
     eSelect.appendChild(eOption);
     //andere option elementen met artiesten
     for(var i=0;i<nArt;i++){
          var eOption = document.createElement('option');
          eOption.innerHTML = a[i][2];
          eOption.value = i;
          eSelect.appendChild(eOption);
     }
return eSelect;
}

function toonFoto(nIndex, eImg){
      /* wisselt de bron van het src attribuut van de img#beeld
     @ nIndex, een hyperlink element
     @ eImg, plaatshouder img
     @ aModernArt array, global
     */
     aArt = aModernArt[nIndex]; //subarray
     sPad = aArt[0]; //source
     sInfo = aArt[1]; //info
     sNaam = aArt[2]; //naam
     eImg.src = "art/" + sPad;
     var eInfo = document.getElementById('info');
     if(eInfo){
          //wijzig info
          eInfo.innerHTML = sInfo;
     }
     else {
          //maak nieuwe p#info aan
          var eInfo = document.createElement('p');
          eInfo.id = "info";
          eInfo.innerHTML = sInfo;
          eImg.parentNode.insertBefore(eInfo,eImg.parentNode.firstChild);
     }
}
