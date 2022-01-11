let arr1 = ['Ahmed', 'Mohamed', 'Omar', 'Hany']
let arr2 = ['Ali', 'Kamal', 'Tamer']
//alert('Hello World')



const wishListVue = new Vue({
    el:'#wish-list',
    data(){
        return {
            wishList : [],
            myCart :[]
        }
    },
    methods:{
        addToMyCart:()=>{
            wishListVue.myCart = wishListVue.myCart.concat(wishListVue.wishList);
            wishListVue.wishList = [];
        },
        deleteFromMyWishList(item){
            //console.log(this.wishList)
            //let itemIndex = this.wishList.indexOf(item)
            this.wishList.splice(this.wishList.indexOf(item),1)
            //console.log(this.wishList)
        },
        addToMyWishList:function(product){
            let item = {
                'id':product.id,
                'product_name':product.title,
                'thumbnailUrl':product.thumbnailUrl,
                'product_description':'Bla Bla ....',
                'price':product.id*30, 
                'currency':'US $'
            }
            let checkIfItemInList = this.wishList.filter((listItem)=> {
                return (listItem.id === item.id) ? true : false
            })
            if(checkIfItemInList.length >0){
                alert('item is already in wish list')
            }else{
                this.wishList.push(item);
            }
        },
    },
    computed:{
        wishListComputed:function(){
            let self = this
            console.log(typeof(this.wishList))
            return this.wishList.reverse()
        }
    }
})


//https://jsonplaceholder.typicode.com/photos

const showProductsVue = new Vue({
    el:'#show-products-list',
    data(){
        return {
            productsList:[]
        }
    },
    created() {
        this.getProdctsFromApi()
    },
    methods: {
        addToMyWishList:(product)=>{
            wishListVue.addToMyWishList(product);
        },
        getProdctsFromApi:function(){
            let self = this
            // Make a request for a user with a given ID
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
            // handle success
            console.log(response);
            self.productsList = response.data
            self.productsList.length = 4
            })
        }
    },
})




/*
let Cart = []

Cart = Cart.concat(wishList)

let myNewArr = arr1.concat(arr2)
console.log(myNewArr)
document.getElementById('app').innerHTML = arr1[0]
*/