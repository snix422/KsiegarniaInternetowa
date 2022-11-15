<?php
function OpenConn()
{
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'testowa';
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname)
    or
    die("Connect failed: %s\n". $conn -> error);
 
    return $conn;
}
function CloseConn($conn){
    $conn->close();
}
