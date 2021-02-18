window.onload=function(){
var ajaxRequest = new XMLHttpRequest();


ajaxRequest.onreadystatechange = function() {
		//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
    if (this.readyState == 4 && this.status == 200) {
				//in proprietatea responseText am contintul fiserului JSON
				document.getElementById("afisJson").innerHTML=this.responseText;
        var obJson = JSON.parse(this.responseText);
        afiseajaJsonTemplate(obJson);
    }
};
//deschid o conexiune cu o cerere de tip get catre server
//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
ajaxRequest.open("GET", "/json/produs.json", true);
//trimit catre server cererea
ajaxRequest.send();

}