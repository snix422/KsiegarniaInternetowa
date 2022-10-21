<?php
require_once('connectionDb.php');
function input_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function checkExistsLoginAndEmail($login, $email, $pass){
    $conn = OpenConn();
    $stmt = $conn->prepare('SELECT id FROM accounts WHERE username=?');
    if ($stmt) {
        $stmt->bind_param('s', $login);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            throw new Exception("Podany login już istnieje proszę podać inny");
        }
        else {
            if($stmt = $conn->prepare('SELECT id FROM accounts WHERE email=?')){
                $stmt->bind_param('s', $email);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    throw new Exception( "Podany emial jest już przypisany do innego konta");
                }
                else{
                    if ($stmt = $conn->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {
                        //$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
                        $stmt->bind_param('sss',$login, $pass, $email);
                        $stmt->execute();
                        echo 'Hurra! Zosałeś/aś pomyślnie zalogowany/a. Możesz się teraz zalogowac do swojego konta';
                    }
                    else {
                        throw new Exception('Drugie: Upps! Coś poszło nie tak. Przepraszamy');
                    }
                }
            }
                
        }
        $stmt->close();
    }
    else {
        throw new Exception('Upps! Coś poszło nie tak. Przepraszamy');
    }
    CloseConn($conn);
}

function checkLogin()
{
    $login = input_data($_POST['login']);
    if (empty($login)) {
        throw new Exception('Login jest wymagany przy rejestracji');
    }
    if (!preg_match("/^[a-zA-Z0-9_]*$/", $login)) {
        throw new Exception('Login może zawierać małe i duże litery oraz liczby i znak _');
    }
    return $login;
}

function checkEmail()
{
    if (empty($_POST['email'])) {
        throw new Exception('Email jest wymagany przy rejestracji');
    }
    $email =  filter_var($_POST['email'], FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);
    if (empty($email)) {
        throw new Exception('Niepoprawny emial');
    }
    return $email;
}

function checkPass()
{
    $pass = input_data($_POST['pass']);
    if (empty($pass)) {
        throw new Exception('Hasło jest wymagane przy rejestracji');
    }
    return $pass;
}

try{
    if (isset($_POST['login'], $_POST['pass'], $_POST['email'])) {
        try{
            $goodLogin = checkLogin();
            $goodEmail = checkEmail();
            $goodPass = checkPass();
                checkExistsLoginAndEmail($goodLogin, $goodEmail, $goodPass);
                print("Login: $goodLogin, email: $goodEmail, pass: $goodPass");
        }
        catch(Exception $e){
            print("\n Execption caught - ". $e->getMessage());
        }
       
    }
    else{
        throw new Exception("Nie wszystkie pola są wypełnione");
    }
}
catch(Exception $err){
    print("\nError: ".$err->getMessage());
}

