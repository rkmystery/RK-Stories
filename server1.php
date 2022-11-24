<?php 
require_once("config.php");
if((isset($_POST['name'])&& $_POST['name'] !='') && (isset($_POST['email'])&& $_POST['email'] !=''))
{
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$subject = $conn->real_escape_string($_POST['subject']);
$message = $conn->real_escape_string($_POST['message']);

$sql="INSERT INTO contact(name, email,subject, message) VALUES ('".$name."','".$email."', '".$subject."','".$message."')";


if(!$result = $conn->query($sql)){
die('There was an error running the query [' . $conn->error . ']');
}
else
{
    header('Location: contact1.html');
}
}

?>