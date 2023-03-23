const {createApp} = Vue;
const url = 'https://mindhub-xj03.onrender.com/api/amazing';

createApp({
    data() {
        return {
            cards : undefined,
            categories : undefined
            
        }
    },
    created() {
        fetch(url)
            .then( res => res.json() )
            .then( data => {
                this.cards = data.events
                let aux = [... new Set(this.cards.map(e=>e.category))];
                this.categories = aux;

            } )
            .catch( err => console.log(err) )

        
    },
    methods: {
        
    },
    computed: {

    }

}).mount("#app");


