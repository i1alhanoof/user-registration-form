 <!-- server-side validation -->

<?php

$isValid = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form input data
    $name = $_POST["nameText"];
    $email = $_POST["emailText"];
    $password = $_POST["passwordText"];
    $confirmPassword = $_POST["confirmPasswordText"];

    // For name validation
    if (empty($name)) {
        $isValid = false;
    } else {
        $nameTest = test_input($name);
        if (!preg_match("/^[a-zA-Z]*$/", $nameTest)) {
            $isValid = false;
        }
    }

    // For email validation
    if (empty($email)) {
        $isValid = false;
    } else {
        $emailTest = test_input($email);
        if (!filter_var($emailTest, FILTER_VALIDATE_EMAIL)) {
            $isValid = false;
        }
    }

    // For password validation
    if (empty($password)) {
        $isValid = false;
    } else {
        $passwordTest = test_input($password);
        if (strlen($passwordTest) < 8) {
            $isValid = false;
        }
    }

    // For confirm password validation
    if (empty($confirmPassword)) {
        $isValid = false;
    } else {
        $confirmPasswordTest = test_input($confirmPassword);
        if ($confirmPasswordTest != $password) {
            $isValid = false;
        }
    }

	// If validation passed
    if ($isValid) {
        echo "<body style= 'background-color: rgba(185, 214, 252, 0.356);'>";
        echo "<h1 style= 'left: 0; line-height: 200px; margin-top: -100px; position: absolute; text-align: center; top: 50%;width: 100%;'>Your Registration Was Successful!</h1>";
        echo "</body>";
        exit();
    }
    // If validation failed
    else {
        echo "<body style= 'background-color: rgba(255, 182, 193, 0.356);'>";
        echo "<h1 style= 'left: 0; line-height: 200px; margin-top: -100px; position: absolute; text-align: center; top: 50%;width: 100%;'>Your Registration Faild!</h1>";
        echo "</body>";
        exit();
    }
}

// Function to sanitize input data
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
