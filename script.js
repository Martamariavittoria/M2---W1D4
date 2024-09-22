/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In programmazione esistono diversi tipi di dati che ci permettono di indicare quale elemento ci serve per una situazione specifica.
Quando creo una variabile in Javascript devo specificare il tipo di dato al suo interno. 
Abbiamo due classi principali di tipi di dati: quelli di tipo primitivo e gli Structural Types. 

TIPO PRIMITIVO
1- Number : vengono utilizzati per rappresentare qualsiasi tipo di numero, sia quelli interi che quelli decimali; 
2- String: è una sequenza di caratteri racchiusa tra apici ("" o ''). Attenzione, perché nel caso in cui un numero venga racchiuso tra apici viene letto dal programma come string e non come number; 
3- Boolean: rappresenta la loigca booleana (quindi la logica del true o false). In JavaScript, un valore booleano può essere o true o false;
4- Undefined e Null: Undefined e Null non rappresentano la stessa cosa in JavaScript. 
  Un valore è Undefined (indefinito) quando una variabile è stata dichiara,  ma non ha ancora un valore assegnato. JAvaScript assegna automaticamente 
  Undefined a una variabile dichiarata ma non 'definita'. 

  Null(nulla/o) invece è un valore che viene assegnato a una variabile per indicare l'assenza intenzionale di un valore. A differenza di Undefined (che gli viene 
  assegnato di default quando non viene specificato un valore), null deve essere assegnato esplicitmamente dal programmatore per indicare che quella variabile
  non ha alcun valore;
5- BigInt: sono un tipo di dato speciale in JavaScript. Permettono di rappresentare numeri molto grandi (per i numeri 'normali' si utilizza numebr');
6-Symbol: sono anch'essi un tipo speciale di dato che serve a creare identificativi univoci. Un symbol è quindi un tipo di dato che rappresenta un valore unico. 
  Sono utili quando si vuole creare o aggiungere proprietà a un elemento che appartengano solo a quell'elemento. 

STRUCURAL TYPES 
1- Oggetto: Gli oggetti in JavaScript sono un modo per organizzare le informazioni in modo logico e ordinato. 
  Sono raccolte di coppie chiave-valore;
2-Funzioni: rappresentano un blocco di codice che può essere eseguito;
  Per fare un esempio, sono come delle "ricette" che permettono di eseguire un insimee di istruzioni tutte le volte
  desiderate, senza doverle riscrivere. In sostanza, sono blocchi di codice che puoi 'chiamare' per svolgere il compito in esse specificato;
3-Array: sono delle liste. Negli array gli elementi non sono identificati da una chiave (come negli oggetti)
 ma da un indice. 
  Per esempio: 
  let array = ["ciao", "Hello", "Hola", "Bonjour"]
   
  Dove: "ciao", "Hello", "Hola", "Bonjour" fanno parte della lista (quindi dell'array), 
  e avranno rispettivamente indice(quindi 'il numero per identificarli') "ciao [0], "Hello"[1], "Hola"[2], "Bonjour[3]". 
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti in JavaScript sono un modo per organizzare le informazioni in modo logico e ordinato. 
 Sono raccolte di chiave-valore, dove le chiavi rappresentano le 'etichette' delle informazioni, mentre i valori ci permettono
 di accedere al valore/dato di quella specifica informazione. 
 
 Per esempio:
 let regione={ "nome":"liguria", 
    "piatto tipico":"Focaccia", 
    "abitanti":"1,551 milioni"
}
    Dove: 
    -let è un oggetto (un tipo di variabile) identificata con il nome "regione"
    -"nome" è la prima chiave, a cui associato troviamo il valore "Liguria";
    -"piatto tipico" è la seconda chiave, a cui associato troviamo il valore "focaccia";
    -"abitanti" è la terza chiave, a cui associato troviamo il valore "1,551 milioni". 

Le coppie chiave-valore ci permettono di raggruppare diversi tipi di dati in un unico oggetto,
e ci permettono di organizzare i dati in modo intuitivo e flessibile. 
 */


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20
console.log(somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Marta Pino"
console.log(nome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log(name1 === name2);
console.log(name2.toLowerCase());
console.log(name1.toLocaleLowerCase() === name2.toLowerCase());
