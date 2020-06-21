<?php
header('Content-Type: application/json');
class Tovar
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createTovar($img, $coins, $time_tovar, $name)
  {
    $query = "INSERT INTO `tovars` (`img`, `coins`, `time_tovar`, `name`) VALUES ('$img', '$coins', '$time_tovar', '$name')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectTovar($id)
  {
    $query = "SELECT * FROM `tovars` WHERE `id` = '$id'";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return(json_encode($result));
  }
}
?>