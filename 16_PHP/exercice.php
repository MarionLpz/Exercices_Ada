<!-- TO DO : Si un nom est donnée dans l'url, en GET, l'afficher ;
Sinon, si un nom est donnée en POST, afficher celui-ci ;
Sinon, si un nom est donné en POST, afficher celui-ci ET le sauvegarder dans la SESSION ;
Autrement, afficher "anonyme" -->


<form action="exercice.php" method="post">
    <p>Votre nom : <input type="text" name="first_name" /></p>
    <p><input type="submit" value="OK"></p>
</form>

<!-- ajout d'un bouton reset -->
<form action="exercice.php" method="post">
    <input type="submit" name="reset" value="Reset">
</form>

<?php

//démarrage de la session pour stocker le nom d'utilisateur
session_start();


// Vérifier si le bouton "Reset" a été cliqué
if (isset($_POST['reset'])) {
    $_SESSION = array();
    session_destroy();
}

//opérateur de fusion null (??) pour assurer que les variables ont une valeur par défaut vide 
//si elles ne sont pas définies dans l'URL ou dans le formulaire

$firstNameURL = htmlspecialchars($_GET["first_name"] ?? '');
$firstNameForm = htmlspecialchars($_POST["first_name"] ?? '');

if (!empty($firstNameURL)) {
    $_SESSION['first_name'] = $firstNameURL;
    echo "Bonjour " . $_SESSION['first_name'] . " !";
} elseif (!empty($firstNameForm)) {
    $_SESSION['first_name'] = $firstNameForm;
    echo "Bonjour " . $_SESSION['first_name'] . " !";
} else {
    echo 'Bonjour anonyme !';
}

//tester si le nom est également stocké dans la variable $_SESSION
echo "<br> </br>";
echo "Le nom dans la session est : " . $_SESSION['first_name'];

?>