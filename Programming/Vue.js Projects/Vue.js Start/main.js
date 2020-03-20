Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: `<div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>

    <div class="product-info">


        <h2 :style="styleObject">{{title}}</h2>
        <h1>Total in Stock: {{sumQuantity}}</h1>
        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory < 5 || inventory > 0">Almost Sold Out</p> -->
        <p v-if="inStock == false">Sold Out</p>
        <p v-if="inStock == true">In Stock</p>
        <p>Shipping: {{shipping}}</p>
        <h3>DETAILS: </h3>
        <ul>
            <li v-for="detail in details">
                {{detail}}
            </li>
        </ul>

        <h3>COLORS: </h3>
        <ul>
            <li v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor:variant.variantColor }" @mouseover="updateCart(index)">
            </li>
        </ul>
        <h3>PRICE: </h3>
        <ul>
        <li v-for="variant in variants">
        <p>R$ {{variant.priceColor}}</p>
        <p class="color-price" :style="{backgroundColor:variant.variantColor}"></p>
        </li>
        </ul>
        <div>
            <button v-on:click="addCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button v-on:click="removeCart">Remove2</button>
        </div>

        <p class="cart">Cart ({{cart}})</p>

    </div>

  

    <product-review @review-submitted="addReview"></product-review>

    <div>
    <h2>Reviews</h2>
    <p v-if="!reviews.length">There are no reviews yet.</p>
    <ul>
    <li v-for="review in reviews">
    <p>Name: {{review.name}}</p>
    <p>Review: {{review.rating}}</p>
    <p>Rating: {{review.review}}</p>
    <p>Rating: {{review.recommend}}</p>
    </li>
    </ul>
    </div>

</div>`,
    data() {
        return {
            styleObject: {
                color: WebGLVertexArrayObject,
                fontSize: '50px',
                height: '50px'
            },
            brand: "Tesla",
            product: "Model X",
            selectedVariant: 0,
            details: ["0-100km/h in 2.7sec", "Eletric", "Technologic"],
            variants: [{
                    variantId: 2234,
                    variantColor: "WHITE",
                    variantImage: '/home/suporte/Área de Trabalho/whitetesla.jpeg',
                    variantQuantity: 4,
                    priceColor: "100.000"
                },
                {
                    variantId: 2235,
                    variantColor: "RED",
                    variantImage: '/home/suporte/Área de Trabalho/images.jpeg',
                    variantQuantity: 0,
                    priceColor: "80.000"
                }
            ],
            cart: 0,
            reviews: []
        }
    },
    methods: {
        addCart: function() {
            this.cart += 1
            this.inventory -= 1

        },

        removeCart: function() {
            this.cart -= 1
            this.inventory = 11
            if (this.cart = 0) {
                this.cart = 0
            }

        },

        updateCart(index) {
            this.selectedVariant = index
        },

        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sumQuantity() {
            var total
            for (variant in this.variants) {
                total += variant.variantQuantity
            }
            return total
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 3.99
            }
        }
    }

})

Vue.component('product2', {
    template: `<div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>

    <div class="product-info">


        <h2 :style="styleObject">{{title}}</h2>
        <h1>Total in Stock: {{sumQuantity}}</h1>
        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory < 5 || inventory > 0">Almost Sold Out</p> -->
        <p v-if="inStock == false">Sold Out</p>
        <p v-if="inStock == true">In Stock</p>
        <p>Shipping: {{shipping}}</p>
        <h3>DETAILS: </h3>
        <ul>
            <li v-for="detail in details">
                {{detail}}
            </li>
        </ul>

        <h3>COLORS: </h3>
        <ul>
            <li v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor:variant.variantColor}" @mouseover="updateCart(index)">
            </li>
        </ul>
        <h3>PRICE: </h3>
        <ul>
        <li v-for="variant in variants">
        <p>R$ {{variant.priceColor}}</p>
        <p class="color-price" :style="{backgroundColor:variant.variantColor}"></p>
        </li>
        </ul>

        <div>
            <button v-on:click="addCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button v-on:click="removeCart">Remove</button>
        </div>

        <p class="cart">Cart ({{cart}})</p>

    </div>

</div>`,
    data() {
        return {
            styleObject: {
                color: WebGLVertexArrayObject,
                fontSize: '50px',
                height: '50px'
            },
            brand: "Tesla",
            product: "Roadster",
            selectedVariant: 0,
            details: ["0-100km/h in 2.4sec", "Eletric", "Fast"],
            price1: "200.000",
            price2: "80.000",
            variants: [{
                    variantId: 2234,
                    variantColor: "WHITE",
                    variantImage: '/home/suporte/Área de Trabalho/roadsterWhite.jpeg',
                    variantQuantity: 3,
                    priceColor: "200.000"
                },
                {
                    variantId: 2235,
                    variantColor: "RED",
                    variantImage: '/home/suporte/Área de Trabalho/roadsterRed.jpeg',
                    variantQuantity: 7,
                    priceColor: "180.000"
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addCart: function() {
            this.cart += 1
            this.inventory -= 1

        },

        removeCart: function() {
            this.cart -= 1
            this.inventory = 11
            if (this.cart = 0) {
                this.cart = 0
            }

        },

        updateCart(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sumQuantity() {
            var total
            for (variant in this.variants) {
                total += variant.variantQuantity
            }
            return total
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 3.99
            }
        }

    }
})

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit="onSubmit">

    <p v-if="errors.length">
    <ul>
    <li v-for="error in errors">
    {{error}}
    </li>
    </ul>
    </p>

    <p>
    <label for="name">Name: </label>
    <input id="name" v-model="name" >
    </p>

    <p>
    <label for="review">Review: </label>
    <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
    <label for="Rating">Rating: </label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    </p>

    <p>Would you recommend this Product?:</p>

<div>
<label for="yes">Yes</label>
  <input type="radio" id="yes" name="recommend" value="yes"
         checked>



         <label for="no">No</label>
  <input type="radio" id="no" name="recommend" value="no">

</div>

    <p>
    <input type="submit" value="Submit">
    </p>

    
    
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null

            } else {
                if (!this.name) this.errors.push('Name required')
                if (!this.review) this.errors.push('Review required')
                if (!this.rating) this.errors.push('Rating required')

            }

        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})