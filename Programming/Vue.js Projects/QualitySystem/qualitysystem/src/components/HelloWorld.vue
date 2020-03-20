
    <template>
        <v-app style="background-color: #186C80">
          <v-content background-color="deep-purple darken-1">
            <v-card width="500" class="mx-auto mt-5">
                <v-card-title class="justify-center">
                    <img src="logoconnect.png" width="150px"/>
                </v-card-title>
                <v-card-title class="justify-center">
                  <h2 class="display-1">Login</h2>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field
                     label="Usuário"
                  prepend-icon="mdi-account-circle"
                     >
                     </v-text-field>
                    <v-text-field label="Senha" type="Password" prepend-icon="mdi-lock"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn @click="$router.push({name: 'index'})"   block color="info">ENTRAR</v-btn>
                </v-card-actions>
                 <v-footer color="white" class="justify-center">
                   <p>
                    <router-link :to="{name: 'index'}">Esqueceu a Senha</router-link>
                   </p>
                </v-footer>
                <v-footer color="white" class="justify-center">
                         <p >ConnectPlug 2019</p>
                   </v-footer>
            </v-card>

           
          </v-content>
        </v-app>
    </template>

<script>
export default {
  
}
</script>