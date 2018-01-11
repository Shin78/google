let monBouton = document.getElementById("disparaitre");

monBouton.onclick = function () {

    if(document.getElementById("apparaitre").style.display="none;");
    {
        document.getElementById("apparaitre").style.display="inline";
        document.getElementById("disparaitre").style.display="none";
    }
}


/*
<button onclick="myFunction()">Try it</button>

<script>
var myVar;

function myFunction() {
    monBouton = setTimeout(alertFunc, 10000);
}

function alertFunc() {
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please !");
}
</script>

*/

/*
<!-- Boutons onclick-->
  <div class="align_center_top">
    <input class="Gogole" id="disparaitre" style="display:inline;" type="submit" value="AFFICHER LES ELEMENTS CENTRAUX !">
  </div>

<!-- main -->

<main class="align_center" id="apparaitre" style="display: none;">*/
