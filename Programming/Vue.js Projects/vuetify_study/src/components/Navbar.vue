<template>
<nav>
   <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
       <span>You Added a new project</span>
       <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
   </v-snackbar>
    <v-toolbar flat>
        <v-app-bar-nav-icon  class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Matheus</span>
        </v-toolbar-title>   
        <v-spacer></v-spacer>
       <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          outlined
          dark
          v-on="on"
          depressed
        >
        <v-icon color="black" left>expand_more</v-icon>
         <span class="black--text">Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
    
        
        >
          <!-- <v-list-item-title>{{ link.text }}</v-list-item-title> -->
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
        <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn rounded v-on="on">
            <v-avatar height="30" left size="36px">
                <img src="/avatar-1.png" >
            </v-avatar>
            <span right class="text-center subheading">Meu Perfil</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-toolbar>

    <v-navigation-drawer dark app v-model="drawer" >
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar
                    size="avatarSize"
                    color="blue"
                >
                    <img src="/avatar-1.png">
                </v-avatar>
                <p class="white--text text-center font-italic mt-1">Matheus</p>

            </v-flex>
            <v-flex class="mt-4 mb-3">
                <Popup @projectAdded="snackbar = true"/>
            </v-flex>
        </v-layout>
        <v-list-item>
            <v-list-item-title class="text-center">
                SISTEMA DE QUALIDADE
            </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense rounded>
            <v-list-item v-for="link in links" :key="link.text"  @click="goTo(link.route)">
                <v-list-item-icon>
                    <v-icon color="blue">{{link.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <!-- <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
               <v-list-tile-action>
                   <v-icon left>{{link.icon}}</v-icon>
                   </v-list-tile-action> 
          <v-list-tile-content>
              <v-list-tile-title class="black--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list> -->
    </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'
export default {
    components: {Popup},
    data() {
        return{
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: 'dashboard'},
                {icon: 'trending_up', text: 'My Projects', route: 'projects'},
                {icon: 'mdi-account-circle', text: 'Team', route: 'team'}
            ],
            snackbar: false
        }
    },
    methods: {
        goTo(name) {
            this.$router.push({ name })
        },
    },
}
</script>