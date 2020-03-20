<template>
  <div>
    <v-card max-width="100%" :elevation="10" class="mx-auto mt-5">
    
        <v-fade-transition leave-absolute>
          <span
            
          >
          PROJETOS :  {{ this.$store.state.projects.length }}
          </span>
        </v-fade-transition>
  

      <v-divider class="mt-4"></v-divider>

      <v-row class="my-1" align="center">
        <strong class="mx-4 info--text text--darken-3">
          Faltando: {{ remainingProjects }}
        </strong>

        <v-divider vertical></v-divider>

        <strong class="mx-4 black--text">
          Completados: {{ completedproj }}
        </strong>

        <v-spacer></v-spacer>

        <v-progress-circular
          :value="progress"
          class="mr-2"
        ></v-progress-circular>
      </v-row>

      <v-divider class="mb-4"></v-divider>
    </v-card>

    <v-card
      :elevation="15"
      width="100%"
      class="pa-3 mx-auto mt-5"
      justify="center"
    >
      <v-toolbar color="primary" class="headline">
        <v-toolbar-title>
          <span class="font-weight-bold">PROJETOS</span>
         
        </v-toolbar-title>


            
           <v-text-field
            label="Filtro"
            class="mt-6 ml-12"
            v-model="currentFilterValue"
            placeholder="Digite o nome do analista ou o título"
           color="white"
          ></v-text-field>
            
     

            
 <!-- 
            <div>
              <v-select v-model="currentFilterProperty" :items="filters"> </v-select>
        <input class="ma-3 mx-auto" width="100%" placeholder="Digite o filtro aqui" v-model="currentFilterValue" />
            </div>-->

        <v-spacer></v-spacer>
         


        <NewProject @addProject="addProject" />
      </v-toolbar>
      <v-card color="grey">
        <v-tabs grow>
          <v-tab>
            <v-icon left>cached</v-icon>
            EM ANDAMENTO
          </v-tab>
          <v-tab>
            <v-icon left>done</v-icon>
            CONCLUÍDO
          </v-tab>
          <v-tab-item>
            <v-layout row wrap>
              <v-flex
                md8
                lg6
                v-for="(record, index) in filteredData"
                :key="index"
              >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card
                    class="pa-5 ma-10 ml-10"
                    :elevation="hover ? 16 : 2"
                    max-height="100%"
                    max-width="450px"
                  >
                    <v-toolbar flat>
                      <v-btn
                        @click="removeProject(record.id)"
                        small
                        outlined
                        color="red"
                      >
                        <v-icon>
                          clear
                        </v-icon>
                      </v-btn>

                      <h3 class="ml-10 ma-5">PROJECT:</h3>
                      <v-toolbar-title>
                        <router-link
                          class=" pa-3 title font-weight-bold text-uppercase"
                          :to="{
                            name: 'project-name',
                            params: { id: record.id }
                          }"
                        >
                          {{ record.title }}
                        </router-link>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>

                    <v-container grid-list-xl>
                      <v-layout row justify-space-between>
                        <v-flex md6>
                          <v-card-text>
                            <h4>Descrição:</h4>

                            <span> {{ record.description }} </span>
                          </v-card-text>
                        </v-flex>
                        <v-flex md3>
                          <v-btn
                            v-if="show == true"
                            @click="show = false"
                            small
                            outlined
                            color="red"
                          >
                            <v-icon>
                              clear
                            </v-icon>
                          </v-btn>
                          <v-btn v-else small outlined @click="show = true">
                            <v-icon left>
                              create
                            </v-icon>

                            OBS
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>

                    <v-text-field
                      label="Observação"
                      outlined
                      v-model="obs"
                      v-if="show == true"
                      rounded
                      dense
                      @keyup.enter="addObs()"
                    >
                    </v-text-field>

                    <v-card-text v-if="observacao != ''">
                      <h4>Observação:</h4>
                      <span> {{ observacao }} </span>
                    </v-card-text>

                    <v-card-actions>
                      <v-row align="center" justify="end">
                        <v-col cols="12" md="6">
                          <h4>Analista:</h4>
                          <span>{{ record.analist }}</span>
                        </v-col>
                        <v-col cols="12" md="6">
                          <h4>Status:</h4>
                          <span>{{ record.completed }}</span>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-tab-item>

          <v-tab-item>
            <v-layout row wrap>
              <v-flex md8 lg6 v-for="proj in completedProjects" :key="proj.id">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card
                    class="pa-5 ma-10 ml-10"
                    :elevation="hover ? 16 : 2"
                    max-height="100%"
                    max-width="450px"
                  >
                    <v-toolbar flat>
                      <v-btn
                        @click="removeProject(proj.id)"
                        small
                        outlined
                        color="red"
                      >
                        <v-icon>
                          clear
                        </v-icon>
                      </v-btn>

                      <h3 class="ml-10 ma-5">PROJECT:</h3>
                      <v-toolbar-title>
                        <router-link
                          class=" pa-3 title font-weight-bold text-uppercase"
                          :to="{
                            name: 'project-name',
                            params: { id: proj.id }
                          }"
                        >
                          {{ proj.title }}
                        </router-link>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>

                    <v-container grid-list-xl>
                      <v-layout row justify-space-between>
                        <v-flex md6>
                          <v-card-text>
                            <h4>Descrição:</h4>

                            <span> {{ proj.description }} </span>
                          </v-card-text>
                        </v-flex>
                        <v-flex md3>
                          <v-btn
                            v-if="show == true"
                            @click="show = false"
                            small
                            outlined
                            color="red"
                          >
                            <v-icon>
                              clear
                            </v-icon>
                          </v-btn>
                          <v-btn v-else small outlined @click="show = true">
                            <v-icon left>
                              create
                            </v-icon>

                            OBS
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>

                    <v-text-field
                      label="Observação"
                      outlined
                      v-model="obs"
                      v-if="show == true"
                      rounded
                      dense
                      @keyup.enter="addObs()"
                    >
                    </v-text-field>

                    <v-card-text v-if="observacao != ''">
                      <h4>Observação:</h4>
                      <span> {{ observacao }} </span>
                    </v-card-text>

                    <v-card-actions>
                      <v-row align="center" justify="end">
                        <v-col cols="12" md="6">
                          <h4>Analista:</h4>
                          <span>{{ proj.analist }}</span>
                        </v-col>
                        <v-col cols="12" md="6">
                          <h4>Status:</h4>
                          <span>{{ record.completed }}</span>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <v-container class=" text-center my-5">
        <div v-if="this.$store.state.projects == ''">
          <kbd>SEM NOVOS PROJETOS</kbd>
        </div>
      </v-container>
    </v-card>

    <v-container>
      <!-- <h3>{{ auth }}</h3> -->
    </v-container>
  </div>
</template>
<script>
import NewProject from "../components/NewProject";
export default {
  // props: {
  //   user: {
  //     type: String,
  //     required: true
  //   }
  // authentication: {
  //   type: Boolean,
  //   required: true
  // }
  // },

  components: {
    NewProject
  },

  data() {
    return {
 
      currentFilterValue: "",
      tab: null,
      items: ["EM ANDAMENTO", "CONCLUÍDO"],
      id: 2,
      // name: this.user,
      // auth: this.authentication,

      show: false,
      obs: "",
      observacao: ""
    };
  },
  computed: {
    completedproj() {
      return this.$store.state.projects.filter(project => project.completed)
        .length;
    },
    progress() {
      return (this.completedproj / this.$store.state.projects.length) * 100;
    },
    remainingProjects() {
      return this.$store.state.projects.length - this.completedproj;
    },
    filteredData() {
      var self = this;

      if (
        this.currentFilterValue != undefined &&
        this.currentFilterValue != ""
      ) {
        return this.$store.state.projects.filter(function(d) {
          return (
            d.title.indexOf(self.currentFilterValue) != -1,
            d.analist.indexOf(self.currentFilterValue) != -1
          );
        });
      } else {
        return this.$store.state.projects;
      }
    },
    completedProjects() {
      return this.$store.state.projects.filter(project => {
        return project.completed === "Concluído";
      });
    }
  },

  methods: {
    addProject(title, description, status, select) {
      this.$store.commit("addProject", {
        id: this.id,
        title: title,
        description: description,
        completed: status,
        analist: select
      });
      this.id++;
    },
    addObs() {
      this.observacao = this.obs;
      this.obs = "";
      this.show = false;
    },
    removeProject(id) {
      const index = this.$store.state.projects.findIndex(item => item.id == id);
      this.$store.state.projects.splice(index, 1);
    }
  }
};
</script>
