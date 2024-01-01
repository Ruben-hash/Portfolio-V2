var cpt= 0;
$(document).ready(function() {

	addParallaxEffectInExperienceSection();

	smoothScroll();

	//affichage phrase sous compétences
	displayUnderSkill();
	//Affichage des description des projet
	displayDescriptionProjet();

});//fin document.ready

function smoothScroll()
{
	$(function () {
		$('a[href^="#"]').click(function()
		{
			var the_id = $(this).attr("href");

			$('html, body').animate(
				{
					scrollTop:$(the_id).offset().top-20
				}, 1500);
			return false;
		});
	});//fin smooth scroll
}

function displayDescriptionProjet()
{
	$('.projectCard').click(function()
	{
		if (cpt==0)
		{
			cpt=1
			var description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";

			var description_Advisor = "Création d'un réseau LAN de 10 routeurs Cisco avec différents services Réseaux comme Telnet, DHCP. L'objectif était de créer de zéro un réseaux et de l'administrer avec les solutions Cisco ";
			var link_Advisor = "https://github.com/Ruben-hash/Sae-21-Creation-de-r-seaux-Informatiques";

			var description_LVN = "Ce projet se focalise sur les attaques de l'homme du milieu (MITM) dans les réseaux locaux, en mettant particulièrement l'accent sur l'empoisonnement ARP. ";
			var link_LVN = "https://github.com/Ruben-hash/Paquet-MITM";

			var description_GoldenAnchor = "Script Générateur de règles Yara avec les programmes YaraGen et Loki";
			var link_GoldenAnchor = "https://github.com/Ruben-hash/Automated_-yaraLokiGen";

			var description_s2s = "Projet R208 : Développement d'un paquet Python dans le cadre du module R208 - Analyse et traitement des données structurées. Ce paquet a pour objectif de gérer les livres d'une bibliothèque.La complexité de la gestion d'une bibliothèque requiert une organisation méthodique et efficace. Afin de simplifier cette tâche, le projet propose la conception et le développement d'un système de gestion de bibliothèque, exploitant la programmation orientée objet(POO) à l'aide de Python.";
			var link_s2s = "https://github.com/Ruben-hash/R208-Biblio";

			var description_NuitInfo = "Site Web qui présente la proportion de nouveaux médecins accrédités par l'Haute Autorité de Santé et par spécialité.Ce site a pour objectif de répertorier les médecins qui sont accrédités par la Haute Autorité de Santé.Afin de gérer les risques et d'assurer une qualité de soins aux patients.";
			var link_NuitInfo = "https://github.com/Ruben-hash/Medecin_accredites_par_la_HAS";

			var description_FIAI = "En cours.....";
			var link_FIAI = "";

			switch($(this).attr("id"))
			{

				case "projectInfoAdvisor":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Réseau Lan Cisco <a target="_blank" href="'+link_Advisor+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Projet étude</h2><p class="textDescr">'+description_Advisor+'</p></div>');
					break;

				case "projectLVN":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">MITM PROGRAM SCAPY <a target="_blank" href="' + link_LVN +'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Projet étude</h2><p class="textDescr">'+description_LVN+'</p></div>');
					break;

				case "projectGoldenAnchor":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Yara Script Générateur <a target="_blank" href="'+link_GoldenAnchor+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Script</h2><p class="textDescr">'+description_GoldenAnchor+'</p></div>');
					break;

				case "projectScream2Screen":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Gestion de Bibliothèque <a target="_blank" href="'+link_s2s+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Programme POO</h2><p class="textDescr">'+description_s2s+'</p></div>');
					break;

				case "projectNuitInfo":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Site des Medecins de la Haute Autorité de santé <a target="_blank" href="'+link_NuitInfo+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_NuitInfo+'</p></div>');
					break;

				case "projectFIAI":
					$(this).html('<div class="darker animated fadeInUp"><h1 class="titreDescr">Portfolio<a target="_blank" href="'+link_FIAI+'"><i class="fa fa-external-link-square" aria-hidden="true"></i></a></h1><h2 class="sousTitreDescr">Site Web</h2><p class="textDescr">'+description_FIAI+'</p></div>');
					break;

			}

		}
		else
		{
			$(".fadeInUp").addClass( "fadeOutDown" );
			$(this).removeClass( "darker" );
			cpt=0;
		}
	});//fin hover
}

function displayUnderSkill()
{
	$(".competenceGenerale").click(function(){
		if ($(this).attr('id') == "vienClique")
        {
            $(this).html('Veuillez cliquez sur l\'une des compétences pour en voir le detail');
            resetHeightSkills()
        }
		else
		{
			ajoutSkill($(this).attr("id"));
			reductHeightSkills();
		}
		console.log($(this).attr("id"));

	});//finclick competenceGenerale
}

function ajoutSkill(id)
{
    switch(id)
    {
        case "competenceWeb":
			var listeCircle =
                [
					{id:"Python", value: 1, text:"Python"},
					{id:"Bash", value: 1, text:"Bash"},
					{id:"Assembleur", value: 1, text:"Assembleur"},
                    {id:"HTML/CSS", value: 1,text:"HTML/CSS"},
                    {id:"sql", value: 1,text:"SQL"},

                ];
            break;
        case "competenceGraphismeDesign":
			var listeCircle =
                [
                    {id:"Cisco", value:1,text:"Cisco"},
					{ id: "Linux", value: 1, text:"Linux"},
                    {id:"Windows", value:1,text:"Windows"},
                    {id:"Yara", value:1,text:"Yara"},
					{ id: "Active", value: 1, text:"Active<br/>Directory"},
                ];
            break;
        case "competenceConception":
			var listeCircle =
                [
					{ id: "Fibre", value: 1, text:"Fibre <br/> Optique"},
                    {id:"Déploiment", value:1,text:"Mise<br/> en réseau"},
                    {id:"VOIP", value:1,text:"VOIP"},
                    {id:"IPBX", value:1,text:"Réseaux <br/>Opérateurs"},
                ];
            break;
    }
    var CircleAjout ="";
    $.each(listeCircle, function(index, item)
    {
        if (item.text.indexOf("<br") != -1)
		{
			CircleAjout += "<div class=\"circle\" id=\""+item.id+"Circle\">\n" +
				"\t<strongCircleLong>"+item.text+"</strongCircleLong>\n" +
				"\t</div>";
		}
        else
		{
			CircleAjout += "<div class=\"circle\" id=\""+item.id+"Circle\">\n" +
				"\t<strongCircleShort>"+item.text+"</strongCircleShort>\n" +
				"\t</div>";
		}
    });

    var CircleAjout2 = "<div id='flex'>"+CircleAjout+"</div>";
    $('#vienClique').html(CircleAjout2);

    setCircles(listeCircle);
}

function addParallaxEffectInExperienceSection()
{
	$("body").mousemove(function(e)
	{
		mx = e.pageX;
		my = e.pageY;
		var w = $(window).width();
		var p = $(this).position();
		var y = p.top;
		$("#projets").css({
			"background-position":(-mx/100)+"px "+(-27+my/100)+"px "
		});
	});
}

function setCircles(listeCircle)
{
	var progressBarOptions = {
		startAngle: -1.55,
		size: 200,
		value: 0.75,
		fill: {
			color: '#4a6075'
		}
	}

	$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
		//$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
	});


    $.each(listeCircle, function(index, item)
    {
        var id = item.id+"Circle";
        $("#"+item.id+"Circle").circleProgress({
            value : item.value
        });
    });
}

function reductHeightSkills()
{
	$("#cliqueUp").css('font-size', '3vw');
	$("#competenceWeb, #competenceGraphismeDesign, #competenceConception").find(".competenceImg").css('font-size', '5vw');
}
function resetHeightSkills()
{
    $("#cliqueUp").css('font-size', '5vw');
    $("#competenceWeb, #competenceGraphismeDesign, #competenceConception").find(".competenceImg").css('font-size', '8vw');
}