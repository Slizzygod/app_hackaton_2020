<?php
    include_once '../config/database.php';
    include_once './task.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $task = new Task($db);
    
    if (isset($_POST) and $_SERVER["REQUEST_METHOD"]=="POST"){
        $task->createTask(1, 'sdsd', 'sdsd', 'sdsd');
    }else{
        $task->selectTask();
    }
?>