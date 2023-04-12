//Etape 1 : Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. 
//Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

function validDate(date) {
    //si la date est vide, retourne false
    if (date === "") {
        return false
    }
    // initialisation d'un format à l'aide d'un expression régulière (regexp)
    format = new RegExp("^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{4})$")

    //test de la regexp, retourne false si le test est négatif
    if (!format.test(date)) {
        return false
    }

    j = parseInt(date.split("/")[0], 10); // split jour en int base 10
    m = parseInt(date.split("/")[1], 10); // mois
    a = parseInt(date.split("/")[2], 10); // année

    // Définition du dernier jour de février
    // Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
    if (a % 4 === 0 && a % 100 != 0 || a % 400 === 0) fev = 29;
    else fev = 28;

    // Nombre de jours pour chaque mois
    nbJours = new Array(31, fev, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    // Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
    return (m >= 1 && m <= 12 && j >= 1 && j <= nbJours[m - 1]);
}

console.log(validDate("28/12/1992")) // true
console.log(validDate("99/11/1111")) //false

//Etape 2 : une fonction qui vérifie que la date est valide et 
//retourne un booléen pour indiquer si la date est un palindrome

function isPalindrome(dateStr) {
    const dateOk = validDate(dateStr);

    if (dateOk) {
        const dateA = dateStr.split('/').join(""); //= ddmmaaaa
        const dateReversed = dateA.split('').reverse().join("") // = aaaammdd

        return (dateA === dateReversed);

    } else {
        return false;
    }
}

console.log(isPalindrome("28/12/1992")) // false
console.log(isPalindrome("11/11/1111")) // true
console.log(isPalindrome("99/11/1111")) // false

//Etape 3 : Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. 
function getNextPalindromes(x) {
    let start = new Date()
    let startString = start.toLocaleDateString('fr')
    let palindrome = []

    while (palindrome.length != x) {
        if (isPalindrome(startString)) {
            palindrome.push(startString)
        }
        start.setDate(start.getDate() + 1)
        startString = start.toLocaleDateString('fr')
    }
    return palindrome
}

console.log(getNextPalindromes(130))

//Etape 4 : Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. 
//Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date.
function isPalindrome2(str) {

    const dateOk = validDate(dateStr);

    if (dateOk) {
        const dateA = dateStr.split('/').join(""); //= ddmmaaaa
        const dateReversed = dateA.split('').reverse().join("") // = aaaammdd

        return (dateA === dateReversed);

    } else {
        return false;
    }
}