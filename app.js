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
    },

    methods: {

        // Funzione crea nuovo oggetto lista
        newListTodo: function(){

            // Se il messaggio inserito dall'utente non è una strigna vuota 
            if (this.message != ""){
            
                // pusho message nell'array di oggeti arrayList
                this.arrayList.push({testo: this.message, done: false});
            } else {
                alert("Inserisci un testo");
            }

            // Resetto l'input quando l'utente clicca il pulsante add
            this.message = "";
        },

        // Funzione che cambia il done al click di check
        listCompleted: function(el){

            // Se la proprietà done del mio array oggeti arrayList è uguale a false
            if (el.done == false){

                // Allora la proprietà done dell'elemento sarà true
                el.done = true;
            } else {
                el.done = false;
            }
            console.log(el.done);
        },

        // Funzione che al click di delete rimuove la lista oggeto creata dall'utente
        listRemove: function(i){
            this.arrayList.splice(i, 1); 
        }
    }
});