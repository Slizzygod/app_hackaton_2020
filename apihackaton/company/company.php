<?php
header('Content-Type: application/json');
class Company
{  
  public $db;
  public function __construct($db)
  {
    $this->db = $db;
  }
 
  public function createCompany($logo, $name)
  {
    $query = "INSERT INTO `company` (`logo`, `name`) VALUES ('$logo', '$name')";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    return true;
  }

  public function selectCompany()
  {
    $query = "SELECT * FROM `company`";
    $stmt = $this->db->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($result));
  }
}
?>