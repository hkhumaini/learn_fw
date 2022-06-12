const app = Vue.createApp({
    data(){
        return{
            firstName : 'Hairul Khumaini',
            secondName : 'Hashami',
            mail:'hairulkhumaini@gmail.com',
            gender :'male',
            picture :"https://randomuser.me/api/portraits/thumb/men/75.jpg",
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.firstName=results[0].name.first,
            this.secondName = results[0].name.last,
            this.mail=results[0].email,
            this.gender =results[0].gender,
            this.picture =results[0].picture.thumbnail
            // this.firstName='Test',
            // this.secondName = 'Women',
            // this.mail='hairulkhumaini@gmail.com',
            // this.gender ='female',
            // this.picture ="https://randomuser.me/api/portraits/thumb/women/75.jpg"
            console.log(results)
        },
    },
})

app.mount('#application')