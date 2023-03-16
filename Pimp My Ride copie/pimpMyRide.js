//--La ligne signifie que la cliente Perdita veut partir à 8h pour un vol de 10h (donc arrivée à 18h) et paiera 8e.
let tripToParse = "Perdita 8 10 8"

//-----Etape 1 : créer fonction / split mots / range dans un dictionnaire (hash table)
function parseTrip(trip) {
    let splitTrip = trip.split(" ")
    let tripObject = {client : splitTrip[0], start : splitTrip[1], duration : splitTrip[2], price : splitTrip[3]}
    return tripObject
}
console.log(parseTrip(tripToParse))
//console.log(parseTrip("Perdita 8 10 8"))

//-----Etape 2 : utiliser la première fonction pour en créer une seconde et traiter plus de données
let tripsToParse = ["Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"]

 function parseTrips(trips) {
    //V1 : METHODE .MAP
    let tripsArray = trips.map(parseTrip);
    return tripsArray
    //V2 : BOUCLE FOR // --- on initialise un tableau, on passe chaque ligne (=element) dans la fonction parseTrip
    // let trips = []
    // for (let index = 0; index < array.length; index++) {
    // //--on ajoute ces nouveaux éléments au tableau initialisé avec .push puis on le retourne
    //     trips.push(parseTrip(array[index]))
    // }
    // return trips
 }

 console.log(parseTrips(tripsToParse))

 //-----Etape 3 : additionner les prix dans un objet avec une boucle for of
 //let voyages = [{client: 'Roger', start: 0, duration: 5, price: 10}, {client: 'Pongo', start: 3, duration: 7, price: 14}]

function getTripsPrice (trips) {
    let res = 0
    for (const elem of trips) {
        //console.log(elem.price)
        res += elem.price;
    }
    return res
}

 console.log(getTripsPrice([ {client: 'Roger', start: 0, duration: 5, price: 10}, 
 {client: 'Pongo', start: 3, duration: 7, price: 14} ]))

 //console.log(getTripsPrice(voyages))

 //----Etape 4 : comparer deux structures entre elles

//--V1 - Test sans fonction--
// let tripA = {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}
// let tripB = {'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8}

// console.log(tripA.start)
// console.log(tripA.duration)
// console.log(tripA.start + tripA.duration)
// console.log(tripB.start)

function checkCompatibility(tripA, tripB) {
    if (tripA.start + tripA.duration > tripB.start) {
        return false
        
    } else { 
        return true    
    }
}

console.log(checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},{'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14}))

console.log(checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
{'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8}))

//----Etape 5 : comparer un tableau à lui même
//--Développez une fonction qui retourne tous les ensembles de voyages compatibles les uns avec les autres

let trips = [{'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}, 
{'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14},
{'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8},
{'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7}]


 function findCompatibilities(trips) {
    let compatibilities = []
    for (let i = 0; i < trips.length; i++) {
        const voyageA = trips[i];

        for (let j = 0; j < trips.length; j++) {
            const voyageB = trips[j];
            
            if (checkCompatibility(voyageA, voyageB) == true) {
                compatibilities.push([voyageA, voyageB])
            }
            else if (voyageA == voyageB) {
                compatibilities.push([voyageA])
            }
        }
    }
         return compatibilities
 }

 console.log(findCompatibilities(trips))

//-----Etape 6 : renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise

//il faut que les voyages soient compatibles et que la somme des prix soit la plus élevée
// passer "voyages" dans findcompatibilities pour retourner les compatibilités 
// puis additionner les prix des compatibles getPrice(voyagescompatibles)
// retourner tableau

let voyages = [{'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}, 
{'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14},
{'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8},
{'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7}]

function findBestPrice(trips) {
    let voyagesCompatibles = findCompatibilities(trips)
    //console.log(voyagesCompatibles) 
    //retourne un array d'array composé de listes
    //il faut donc faire une boucle pour parcourir seulement un seul array
    for (const combos of voyagesCompatibles) {
        //console.log(combos)
        let price = getTripsPrice(combos)
        console.log(Math.min.apply(price))
        console.log(combos + "Ce voyage rapporte : " + price + " €")
    }
}

findBestPrice(voyages)
//console.log(voyages)
