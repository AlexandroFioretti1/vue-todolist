/* Descrizione:

Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà: text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente */

const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      tasks: [
        {
          text: "Banane",
          done: false,
        },
        {
          text: "Mele",
          done: false,
        },
        {
          text: "Insalata",
          done: false,
        },
        {
          text: "Zucchine",
          done: false,
        },
        {
          text: "Patate",
          done: false,
        },
        {
          text: "Cavolfiore",
          done: false,
        },
        {
          text: "Mozzarelle",
          done: false,
        },
        {
          text: "Yougurt",
          done: false,
        },
        {
          text: "Caffè",
          done: false,
        },
        {
          text: "Uova",
          done: false,
        },
        {
          text: "Latte",
          done: false,
        },
        {
          text: "Farina",
          done: false,
        },
        {
          text: "Cioccolato",
          done: false,
        },
        {
          text: "Amarene",
          done: false,
        },
        {
          text: "Bronzo",
          done: false,
        },
        {
          text: "Avena",
          done: false,
        },
        {
          text: "Mais",
          done: false,
        },
        {
          text: "Valorant",
          done: false,
        },
        {
          text: "Pane",
          done: false,
        },
        {
          text: "Bronzo",
          done: false,
        },
      ],
    };
  },
  methods: {
    removeFromList(index) {
      this.tasks.splice(index, 1);
    },
    addToList() {
      this.tasks.push({ text: this.newTask, done: false });
      this.newTask = "";
    },
    markAsDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
}).mount("#app");
