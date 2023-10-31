<?php
include('./classes/BDService.php');

header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');


$idDev= $_GET['idDev'];

// Accès à l'API de MySQL
$maBd = new BDService();

$sql = "select * from sessionstravail where IdDev=$idDev order by Id desc";

// Sélectionne les sessions de travail d'un développeur
$tabSessTrav = $maBd->selection($sql);

if (isset($tabSessTrav[0]))
{	
   for($i=0; $i<count($tabSessTrav); $i++)
   {
	  $sql = "select Numero, Titre, Description from taches where Id = " . $tabSessTrav[$i]['IdTache'];
	  $tabTaches = $maBd->selection($sql);

	  $tabSessTrav[$i]['TacheNumero'] = $tabTaches[0]['Numero'];
	  $tabSessTrav[$i]['TacheTitre'] = $tabTaches[0]['Titre'];
	  $tabSessTrav[$i]['TacheDescription'] = $tabTaches[0]['Description'];
   }

   echo json_encode($tabSessTrav);
}
else
   echo json_encode("Erreur 33");






