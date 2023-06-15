// PIMP MY RIDE V3 - PROGRAMMATION ORIENTEE OBJET VERSION SECURISEE

let tripToParse = "Perdita 8 10 8"

class Trip {

    #name;
    #start;
    #duration;
    #price;
    #end;

    constructor(name, start, duration, price) {
        this.#name = name
        this.#start = parseInt(start)
        this.#duration = parseInt(duration)
        this.#price = parseInt(price)
        this.#end = Number(start) + Number(duration) // Ajout d'une propriété end qui calcule l'heure de fin de vol
    }

    get name() {
        return this.#name
    }

    get start() {
        return this.#start
    }

    get duration() {
        return this.#duration
    }

    get price() {
        return this.#price
    }

    get end() {
        return this.#end == Number(start) + Number(duration)
    }

    // Ajouter une fonction qui vérifie la compatibilité des vols
    isCompatible(trip) {
        if (
            (this.#end <= trip.#start)
        ) {
            return true; // Les vols ne se chevauchent pas
        } else {
            return false; // Les vols se chevauchent
        }

    }
}
//créer une fonction qui split une string et la transforme en objet de Trip

function parseTrip(trip) {
    let splitedTripsArray = trip.split(" ")
    return new Trip(...splitedTripsArray)
}

//Adapter ce fonctionnement à un nombre de données plus important, contenu dans un array
let tripsToParse2 = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

function parseTrips(trips) {
    let allMyTrips = []
    for (let i = 0; i < trips.length; i++) {
        //--on ajoute ces nouveaux éléments au tableau initialisé avec .push puis on le retourne
        allMyTrips.push(parseTrip(trips[i]))
    }
    return allMyTrips
}

let allMyTrips = parseTrips(tripsToParse2);
console.log(allMyTrips);


// Check de la méthode de compatibilité des vols
let trip = allMyTrips[3]
let anotherTrip = allMyTrips[2]

console.log("trip = " + JSON.stringify(trip) + " // anotherTrip = " + JSON.stringify(anotherTrip))

console.log(trip.isCompatible(anotherTrip))

//Créer une fonction qui retourne toutes les compatibilités de voyage - comparaison d'un tab à lui même
function findCompatibilities(trips) {
    let compatibilities = []
    for (let i = 0; i < trips.length; i++) {
        const voyageA = trips[i];

        for (let j = 0; j < trips.length; j++) {
            const voyageB = trips[j];
            console.log(voyageA + voyageB)

            if (voyageA.isCompatible(voyageB)) {
                compatibilities.push([voyageA, voyageB])
            }
            else if (voyageA == voyageB) {
                compatibilities.push([voyageA])
            }
        }
    }
    return compatibilities
}
let compatiblesTrips = findCompatibilities(allMyTrips)
console.log(compatiblesTrips)

function getTripsPrice(trips) {
    let res = 0
    for (const elem of trips) {
        res += elem.price;
    }
    return res
}

function findBestPrice(trips) {
    let voyagesCompatibles = findCompatibilities(trips)
    let priceTab = []
    let bestPrice = 0
    let bestTrip = []
    for (const combos of voyagesCompatibles) {
        let price = getTripsPrice(combos)
        priceTab.push(price)
        bestPrice = Math.max(...priceTab)
        if (price == bestPrice) {
            bestTrip = combos
        }
        console.log(combos + "Ce voyage rapporte : " + price + " €")
    }

    return [bestTrip, bestPrice]
}

console.log(findBestPrice(allMyTrips))
