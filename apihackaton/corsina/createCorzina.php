<?php
    include_once '../config/database.php';
    include_once './corzina.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $corzina = new Corzina($db);
    
    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $corzina->createCorzina(1, 1, 'sdsdsd', 'sdsd', 'sdsd');
    }else{
        $corzina->selectCorzina();
    }
?>