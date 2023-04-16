## 06_Palindromes
Date : mars 2023

Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

* JS

### Etape 1 :

Créer une fonction `isValidDate` qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

### Etape 2 :

Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

### Etape 3 :

Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

### Etape 4 :

Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.
