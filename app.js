// Vue JS 
const app = new Vue({
    el: "#app",
    data: {

        // Array oggetti lista
        arrayList: [
            {
                testo: "Make todolist design",
                done: false,
            },
        ],

        // Messaggio input utente
        message: '',

        // Todo completato, all'inizio è falso
        done: false,
    },

    methods: {

        // Funzione crea nuovo oggetto lista
        newListTodo: function(){
            if (this.message != 0){
                this.arrayList.push({testo: this.message, done: this.done});
            } else {
                alert("Inserisci un testo");
            }
            this.message = "";
        },

        // Funzione che cambia il done al click di check
        listCompleted: function(){
            this.done = true;
            console.log(this.done);
        }
    }
});