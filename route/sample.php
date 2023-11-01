<?php 

include('../middleware/headers.php');

$received_data = json_decode(file_get_contents("php://input")); 
$database_user = [
    'username' => 'tomas',
    'password' => '123',
    'email'    => 'tomtom@gmail.com'
];
 

// if ($user_data['username'] == $received_data['username']){
//     echo json_encode($received_data );
// }
// else{
//     echo json_encode(['error' => 'Invalid username and password']);
// }
 
echo json_encode($database_user);