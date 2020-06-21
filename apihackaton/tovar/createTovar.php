<?php
    include_once '../config/database.php';
    include_once './tovar.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $tovar = new Tovar($db);
    
    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $tovar->createTovar('sdsdsd', 'sdsdsd', 'sdsds', 'sdsd');
    }else{
        $tovar->selectTovar(3);
    }
?>