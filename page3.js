$("#type").click(function(){
    $("#type").css("cursor","default");
    $("#type_writer").addClass("blur");
    $("#macchina_da_scrivere").fadeIn(500);
});
$(document).ready(function(e) {
$("#type_writer").rwdImageMaps();
});
<<<<<<< HEAD
<<<<<<< HEAD
$("#terzo_enigma").on('input', function() {
=======
$("#tre").on('input', function() {
>>>>>>> b6a92f6 (push)
    terzo_enigma();
});
function chiudi_mds(){$("#type").css("cursor","pointer");
    $("#type_writer").removeClass("blur");
    $("#macchina_da_scrivere").fadeOut(500);
    }
function terzo_enigma(){
    var mirror = document.getElementById("tre").value;
    if(mirror == "specchio"){
        alert("parola corretta");
        $("#type").css("cursor","none");
        $("#type").unbind('click').removeAttr("onclick")[0].onclick = null;
        parent.postMessage("terzo_enigma","*");
        chiudi_mds();
    }
<<<<<<< HEAD
}
=======
=======
};
>>>>>>> a392674 (okoko)
$("#esci_mds").click(function(){
    chiudi_mds();
});
>>>>>>> c674fdc (.)
