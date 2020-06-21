<?php
header('Content-Type: application/json');
class Task
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createTask($id_company, $time_task, $description, $coins)
  {
    $query = "INSERT INTO `tasks` (`id_company`, `time_task`, `description`, `coins`) VALUES ($id_company, '$time_task', '$description', '$coins')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectTask()
  {
    $query = "SELECT * FROM `tasks`";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return(json_encode($result));
  }
}
?>