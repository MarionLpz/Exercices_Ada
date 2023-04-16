## Pimp my ride
Date : mars 2023

Exercice pratique :

La crise du Covid est terminée, la demande en déplacement aérien repart à la hausse, mais toutes les companies ont été laminées et plus personne ne fait tourner d'avion.

Vous décidez de vous lancer dans le business avec le Tupolev-114 de votre grand-mère.

Vos clients vous communiquent, en plus de leur nom, des heures de départs, des durées de trajet; le montant payé pour faire ce trajet.

Ces informations sont stockées sous forme d'une chaîne de caractères, par lignes composées de mots représentant, dans l'ordre :

1. le nom du client

2. l'heure de départ du vol

3. la durée du vol

4. le prix

Par exemple, pour un voyage, cette chaîne de caractère sera :

```jsx
let trip = "Perdita 8 10 8"
```

*La ligne signifiant que la cliente Perdita veut partir à 8h pour un vol de 10h (donc arrivée à 18h) et paiera 8.*

* JS

### Etape 1 :

Créez une fonction `parseTrip(trip)` qui prend une ligne du même format que les lignes de l'exemple, la décompose en mot (séparés par un espace) puis range ces mots dans une structure de donnée que vous déterminerez.

### Etape 2 :

Mais vous n'avez pas qu'un seul voyageur par jour, il nous faut donc passer à la vitesse supérieure.

Utilisez la fonction `parseTrip(trip)` dans une autre fonction `parseTrips(trips)` prenant en entrée une journée complète (donc plusieurs lignes) et retournant une liste de structures `trips` définies précédemment  (`[]`).

### Etape 3 :

Pour optimiser vos journées, vous décidez d'écrire un code calculant l'enchaînement de clients le plus intéressant financièrement.

Créez une fonction `getTripsPrice` qui accepte en argument une liste de `voyages` et retourne la somme des prix de cet ensemble de `voyages`.

### Etape 4 :

Il ne faut évidemment pas que l'heure d'arrivée d'un trajet chevauche l'heure de départ d'un autre ! Votre client en retard ne vous paiera pas.

Créez une fonction `checkCompatibility(tripA, tripB)` qui comparent deux structures `voyages` et retourne un booléen déterminant si les structures sont compatibles ou non.

Il s'agit de déterminer si un vol (représenté par une structure `trips`) n'empiète pas sur les horaires d'un autre.

### Etape 5 :

Développez une fonction findCompatibilities(trips) qui retourne, à partir d'une liste de voyages, tous les ensembles de voyages compatibles les uns avec les autres.

### Etape 6 :

Développez une dernière fonction `findBestPrice(trips)`, qui renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise.

Vous avez alors tous les outils pour déterminer, à partir d'une chaîne de caractères des vols d'une journée, la liste optimale des clients à transporter, les horaires de leurs vols, ainsi que votre gain !
