// SNACK 1
/*Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
Se è una stringa: stampala in maiuscolo
Se è un numero: moltiplicalo per due e stampalo
Se è un booleano: stampa “Sì” o “No” in base al suo valore
In tutti gli altri casi: stampa “Tipo non supportato”*/

let dato: unknown;
if (typeof dato === 'string') {
    console.log(dato.toUpperCase());
}else if (typeof dato === 'number') {
    console.log(dato * 2);
}else if (typeof dato === 'boolean') {
    console.log(dato ? 'Sì' : 'No');
}else {
    console.log('Tipo non supportato');
}


// SNACK 2
/*Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])*/

type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: 'm' | 'f';
    anniDiServizio: number[];
};


// SNACK 3
/*Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

Developer
livelloEsperienza → Il livello di esperienza del developer (scelte possibili “Junior”, “Mid” o “Senior”).
linguaggi → Un array contenente i linguaggi utilizzati dal developer (opzionale).
certificazioni → Un array di stringhe contenente certificazioni tecniche (può essere vuoto).
ProjectManager
teamSize → Il numero di persone nel team gestito dal PM (può essere null).
budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
stakeholderPrincipali → Un array con i nomi dei principali con cui il PM collabora (può essere vuoto).*/
type Developer = Dipendente & {
    livelloEsperienza: 'Junior' | 'Mid' | 'Senior';
    linguaggi?: string[];
    certificazioni: string[];
};
type ProjectManager = Dipendente & {
    teamSize: number | null;
    budgetGestito?: number;
    stakeholderPrincipali: string[];
};
