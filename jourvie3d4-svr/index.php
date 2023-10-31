<?php
include('./classes/projet.php');
include('./classes/BDService.php');
header('Content-type:application/json');


//echo "<h1>Accès à la BD avec l'Api MySQLi</h1>";

$p = new Projet(3, "Tictactoe");
//$p->Afficher();

$maBd = new BDService();

$sql = "insert into projets value(null, 'Mission impossible')";
$idNeoProj = $maBd->insertion($sql);

//echo "<h3>Projet $idNeoProj créé avec succès</h3>";


$tabProjets = $maBd->selection("select * from projets");

 foreach($tabProjets as $unProj)
{
    //echo $unProj['Id'] . ", " . $unProj['Nom'] . "<br>";
    /*$nbSupp  = $maBd->suppression("delete from projets where Id=" . $unProj['Id'] );

    echo "Supression de $nbSupp projets<br>";*/
}

$maBd->miseAJour("update projets set nom='bibi'");

$tabDev = $maBd->selection("select * from developpeurs");
echo json_encode($tabDev);


