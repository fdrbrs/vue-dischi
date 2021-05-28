const app = new Vue({
    el: '#app',
    data: {
        poster: {},
        title: {},
        author: {},
        year: {}
    },
    methods: {},
    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(response => {
                console.log(response.data.response);
                for (let i = 0; i < response.data.response.length; i++){
                    this.poster.push(response.data.response[i].poster) 
                }
                console.log(this.poster);
                

            })
    }
})

/* 
Descrizione:
Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.
*/