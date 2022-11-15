<?php
require_once 'connectionDb.php';
function input_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function login($email, $pass){
    $conn = OpenConn();
    if ($stmt = $conn->prepare('SELECT id, password, username FROM accounts WHERE email = ?')) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $password, $username);
            $stmt->fetch();
            if (password_verify($pass, $password)) {
                echo "Pomyślnie zalogowano!!!! Witaj: ".$username;
            } else {
                throw new Exception('Niepoprawne hasło');
            }
        } else {
            throw new Exception('Podany email nie istnieje w bazie danych');
        }
    
        $stmt->close();
    }
    CloseConn($conn);
}


function checkEmail($email)
{
    $emailCheck =  filter_var($email, FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);
    if (empty($emailCheck)) {
        throw new Exception('Niepoprawny email');
    }
    return $email;
}


try{
    if (isset($_POST['pass'], $_POST['email'])) {
        try{
            $pass =input_data($_POST['pass']);
            $email = checkEmail($_POST['email']);
            login($email, $pass);
        }
        catch(Exception $e){
            print("\n Execption: ". $e->getMessage());
        }
       
    }
    else{
        throw new Exception("Nie wszystkie pola są wypełnione");
    }
}
catch(Exception $err){
    print("\nError: ".$err->getMessage());
}
