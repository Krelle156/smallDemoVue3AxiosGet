const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[],
            newCar: { vendor: '', model: '', price: 0}

        }
    },
    methods: {
        myMethod(){

        },
        postCar() {
            axios.post(baseUrl, this.newCar)
            .then(
                function(response){
                    console.log(response)
                }
            )
            .catch(
                function(error){
                    console.log(error)
                }
            )

        },
        getAllCars(){
            console.log("er i metoden getAllCars");

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.carList = response.data
                }
            )
            .catch(
                 error => {
                    console.log(error)
                 } 
            )



        },
        clearNewCar(){
            this.newCar = { vendor: '', model: '', price: 0}
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
