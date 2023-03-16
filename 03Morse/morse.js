const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }
//etape 1 - découper le texte en caractères uniques
function getLatinCharacterList (texte) {
    const chars = texte.split('')
    return chars
}
console.log(getLatinCharacterList("hello world !"))

//etape 2 - fonction de traduction d'un caractère latin en morse 
function translateLatinCharacter (char) {
    return latinToMorse[char.toUpperCase()]
 }

console.log(translateLatinCharacter ("z"))

//etape 3 - fonction de traduction d'un texte latin en morse
function encode (texte) {
    texte = getLatinCharacterList (texte)
    let result = ""
    for (let i of texte ) { 
        result += translateLatinCharacter (i)
    }
    return result
}

console.log(encode("kevin"))

// etape 4 
let txtMorse = "-.-. ..- .-.."

function getMorseCharacterList (morse) {
	let array = []
	array = morse.split(" ")
	//sinon on peut directement déclarer let array = morse.split(" ")
	return array
}
console.log(getMorseCharacterList(txtMorse))

function translateMorseCharacter (arraySplit) {
	let translatedString = ""
	for (const element of arraySplit) {
		translatedString += morseToLatin[element]
	}
	return translatedString
}
console.log(translateMorseCharacter(txtMorse))

function decode (morse)  {
	let split = getMorseCharacterList(txtMorse)
	let translate = translateMorseCharacter(split)
	return translate

}

console.log(decode(txtMorse))

// //Etape 5 -> construire le HTML

// let textRecu = document.getElementById("myTextInput").innerHTML
// console.log(textRecu)