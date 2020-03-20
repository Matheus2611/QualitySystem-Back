Vue.component('form-post', {

    template: `
    
        <div class="container">
        <form @submit.prevent="addPost">
      
          <div class="row">
          <div class="col-md-6">
            <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title" required>
          </div>
          </div>
          </div> 

          <div class="row">
          <div class="col-md-6">
            <div class="form-group">
            <label>Post Body</label>
            <textarea class="form-control" v-model="body" rows="5" required></textarea>
          </div>
          </div>
          </div><br>
          <div class="form-group">
          <button class="btn btn-dark">Create</button>
          </div>        
        </form>
        </div>

        
     
       
    `,

    data() {
        return {
            title: '',
            body: ''
        }
    },
    //CREATED METHOD FOR INDEX
    // created() {
    //     let uri = ""
    //     this.axios.get(uri).then((response) => { this.post = response.data.data })
    // },

    methods: {
        addPost() {
            console.log(this.title)
            console.log(this.body)
            let Posts = {
                title: this.title,
                body: this.body
            }
            this.$emit('post-submit', Posts)
            this.title = null
            this.body = null


        },

        //POST REQUEST
        //    let uri = ""
        //    this.axios.post(uri, this.post).then((response) => {
        //        this.$router.push({name: 'posts'})
        //    })

        // DELETE REQUEST
        // deletePost(id){
        //     let uri = ""
        //     this.axios.delete(uri).then((response) => {
        //         this.post.splice(this.post.indexOf(id), 1)
        //     })
        // }

        //CREATED METHOD WITH PARAMS 
        // created() {
        //     let uri = `/${this.$route.params.id}`;
        //     this.axios.get(uri).then((response) => {
        //         this.post = response.data;
        //     });
        //   },

        //DELETE REQUEST
        // updatePost(id){
        //     let uri = "/${this.$route.params.id}"
        //     this.axios.post(uri, this.post).then((response) => this.$router.push({name: 'posts'}))
        // }


    },
})

Vue.component('post-list', {
    template: `
    <div class="container"> 
    <div class="row">
    

    <div class="col-md-10"> 
    <form-post @post-submit="listPost"></form-post>
    </div>
    </div>

    
  
    <table class="table table-hover">
    <thead>
    <tr>
    <th>Title</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="pt in posts">
    <td>{{pt.title}}</td>
    <td>{{pt.body}}</td>
    </tr>
    </tbody>   
     </table>
     
    </div>
 

        
        `,
    data() {
        return {
            posts: []
        }
    },

    methods: {
        listPost(Posts) {
            console.log(Posts)
            this.posts.push(Posts)

        }
    }
})

var app4 = new Vue({
    el: "#app4",

})