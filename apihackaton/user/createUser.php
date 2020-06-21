<?php
    include_once '../config/database.php';
    include_once './user.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $user = new User($db);

    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $user->createUser('user', '1233');
    }else{
        $user->selectUser('1111');
    }
?>