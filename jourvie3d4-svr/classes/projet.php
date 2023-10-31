<?php

class Projet
{
    public $Id;
    public $Nom;

    function __construct($i, $n)
    {
        $this->Id = $i;
        $this->Nom = $n;
    }

    function afficher()
    {
        echo "Projet ($this->Id) $this->Nom<br>";
    }
}