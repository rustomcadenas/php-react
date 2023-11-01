<?php 
include('../middleware/headers.php');

use Firebase\JWT\JWT;  
use Firebase\JWT\Key;

require_once('../vendor/autoload.php');
require_once('../middleware/CheckConnection.php');

$key = 'tomasgwapo';


$received_data = json_decode(file_get_contents("php://input"), true); 
CheckConnection($received_data);

$database_user = [
    "id" => 1,
    'username' => 'tomas',
    'password' => '123',
    'email'    => 'tomtom@gmail.com'
];
$payload = [ 
    'iat' => 1356999524,
    'nbf' => 1357000000,
    $database_user
];
 

$username = $received_data['username'];
$password = $received_data['password'];

if ($username == $database_user['username'] && $password == $database_user['password']){
    unset($database_user['password']);
    $jwt = JWT::encode($payload, $key, 'HS256'); 
    // header(setrawcookie("access_token", $jwt, time() + (86400 * 30), '/', 'http://localhost:5174/', false, true)); 

    // $jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjEzNTY5OTk1MjQsIm5iZiI6MTM1NzAwMDAwMCwiMCI6eyJpZCI6MSwidXNlcm5hbWUiOiJ0b21hcyIsInBhc3N3b3JkIjoiMTIzIiwiZW1haWwiOiJ0b210b21AZ21haWwuY29tIn19.pnQUsSr5hP834JYz1OqkrUT0v7EjCoHqytmi7BU_F-8";
    // $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
    // var_dump($decoded);
    
    echo json_encode([
        "success" => true,
        "message" => "Success",
        "user" => $database_user,
        "token" => $jwt
    ]);
}
else{
    echo json_encode([
        "success" => false,
        "message" => "Invalid username or password", 
    ]);
}
  
