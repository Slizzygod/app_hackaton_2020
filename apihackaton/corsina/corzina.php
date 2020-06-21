<?php
header('Content-Type: application/json');
class Corzina
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createCorzina($id_tovar, $id_user, $dostavka, $oplata, $address)
  {
    $query = "INSERT INTO `corzina` (`id_tovar`, `id_user`, `dostavka`, `oplata`, `adress`) VALUES ($id_tovar, $id_user, '$dostavka', '$oplata', '$address')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectCorzina()
  {
    $query = "SELECT * FROM `corzina`";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return(json_encode($result));
  }
}
?>