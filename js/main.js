const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[],
            allCarList:[],
            newCar: { vendor: '', model: '', price: 0},
            statusCode: null,
            asc: false
        }
    },
    created() {
        this.getAllCars()
    },
    methods: {
        sortByPrice(){
            if(this.asc){
                this.carList = this.allCarList
                this.carList.sort((a, b) => b.price - a.price);
            } else {
                this.carList = this.allCarList
                this.carList.sort((a, b) => a.price - b.price);
            }
            this.asc = !this.asc
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
            this.asc = false

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.carList = response.data
                    this.allCarList = response.data
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
                    this.carList = this.carList.filter(c => c.id !== id)
                    this.allCarList = this.allCarList.filter(c => c.id !== id)
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
