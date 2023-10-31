<?php
include('./classes/BDService.php');

//header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');

ini_set('date.timezone', 'america/new_york');


$idSessTrav= $_POST['idSessTrav'];

// Accès à l'API de MySQL
$maBd = new BDService();

$df = date('Y-m-d H:i:s');

$sql = "update sessionstravail set Fin='$df' where Id=$idSessTrav";

$numRows = $maBd->miseAJour($sql);

if ($numRows == 1)
{	
   echo json_encode($df);
}
else
   echo json_encode("Erreur 24 de mise à jour des sess trav");






