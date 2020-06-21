<?php
    include_once '../config/database.php';
    include_once './company.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $company = new Company($db);
    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $company->createCompany($_POST['logo'], $_POST['name']);
    }else{
        $company->selectCompany();
    }
?>