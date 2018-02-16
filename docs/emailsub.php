<?php

echo '<link rel="stylesheet" type="text/css" href="stylphp.css"></head>';
echo '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,500" rel="stylesheet" type="text/css">';
$emailErr = "";
$email = "";

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = ($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format"; 
            echo $emailErr;
        } else {
            $data = $_POST['email'] . "\n";
            $ret = file_put_contents('tmp/emails.txt', $data, FILE_APPEND | LOCK_EX);
            if($ret === false) {
                die('There was an error writing this file');
            }
            else {
                echo "<div class=\"email-subscription\"> <h1 class=\"neon\">THANK YOU <br>FOR SUBSCRIBING TO OUR NEWSLETTER!<br>CCSC2018</h1></div>";
            }
        }
    }
   
?>

