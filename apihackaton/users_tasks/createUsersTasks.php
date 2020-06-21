<?php
    include_once '../config/database.php';
    include_once './usersTasks.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $usersTasks = new usersTasks($db);
    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $usersTasks->createusersTasks(2, 1, 'Yes');
    }else{
        $usersTasks->selectusersTasks();
    }
?>