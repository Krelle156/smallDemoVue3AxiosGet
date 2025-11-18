const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[],
            newCar: { vendor: '', model: '', price: 0},
            statusCode: null
        }
    },
    methods: {
        myMethod(){

        },
        postCar() {
            axios.post(baseUrl, this.newCar)
            .then(
                response => {
                    console.log(response)

                    console.log(response.data)

                    this.getAllCars()
                    this.clearNewCar()
                    this.statusCode = response.status
                }
            )
            .catch(
                error => {
                    console.log(error)
                    this.statusCode = error.response.status
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
                    this.statusCode = response.status
                }
            )
            .catch(
                 error => {
                    console.log(error)
                    this.statusCode = error.response.status
                 } 
            )



        },
        deleteCar(id){
            axios.delete(baseUrl + '/' + id).then(
                response => {
                    console.log(response)
                    this.statusCode = response.status
                    this.getAllCars()
                }
            )
            .catch(
                error => {
                    console.log(error)
                    this.statusCode = error.response.status
                }
            )
        },
        clearNewCar(){
            this.newCar = { vendor: '', model: '', price: 0}
        }
    },
    computed: {
        getStatus() {
            
        }
        
    }
})
