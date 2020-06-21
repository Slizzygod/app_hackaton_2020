<?php
header('Content-Type: application/json');
class usersTasks
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createusersTasks($id_user, $id_task, $check_task)
  {
    $query = "INSERT INTO `users_tasks` (`id_user`, `id_task`, `check_task`) VALUES ($id_user, $id_task, '$check_task')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectusersTasks()
  {
    $query = "SELECT * FROM `users_tasks`";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return(json_encode($result));
  }
}
?>