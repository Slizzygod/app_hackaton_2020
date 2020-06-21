<?php
header('Content-Type: application/json');
class User
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createUser($role, $id_vkUser)
  {
    $query = "INSERT INTO `users` (`role`, `id_vkUser`) VALUES ('$role', '$id_vkUser')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectUser($id_vkUser, $coins = null)
  {
    $query = "SELECT * FROM `users` WHERE `id_vkUser` = '$id_vkUser'";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return(json_encode($result));
  }
}
?>