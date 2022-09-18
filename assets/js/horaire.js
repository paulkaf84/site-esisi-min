/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {

    // Gérer changement état accordéon
    (function () {
        var $titreAccordion = $(".panel-heading"),
                $etatAccordion = $(".etat-accordion"),
                $btnEnregistrer = $("#enregistrer_horaire");
                
        $titreAccordion.click(toggleHoraire);
        $titreAccordion.dblclick(toggleHoraire);
        $btnEnregistrer.click(function(){
            // Vérifier si le titre et le fichier sont déjà remplis
            if($("#form-horaire :text").val().length > 0 && 
                    $("#form-horaire :file").val().length > 0){
                $(this).text("Enregistrement en cours...").removeClass('btn-success').
                        addClass('btn-warning');  // Changer l'état du bouton
            }
        });
        
        function toggleHoraire() {
            var etat = $(this).find(".etat-accordion").html();
            $etatAccordion.html('+');
            
            etat = (etat === "+") ? "-" : "+";
            $(this).find(".etat-accordion").html(etat);
        }
    })();
});
