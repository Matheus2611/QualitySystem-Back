<template>
  <div class="dashboard">
    <h1 class="subheading font-italic black--text pa-6 text-center">DASHBOARD</h1>

    <v-container class="my-5">
      <v-layout row class="mb-5 mx-2">
         <v-tooltip top>
      <template v-slot:activator="{ on }">
           <v-btn small  @click="sortBy('title')" slot="activator" v-on="on">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
          </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
           <v-btn small  class="mx-4" @click="sortBy('title')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By Person name</span>
          </v-btn>
      </v-layout>
      <v-card class="pa-5" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-4 project ${project.status}`">
          <v-flex xs12 md6> 
            <div class="caption grey--text">
              Project Title
            </div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2> 
            <div class="caption grey--text">
              Person
            </div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2> 
            <div class="caption grey--text">
              Due by
            </div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2> 
            <div class="right">
               <v-chip color="green" small :class="`dark--text mx-4 ${project.status}`">{{project.status}}</v-chip>           
              </div>               
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>

export default {
 data(){
   return{
     projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
   }
 },
 methods: {
   sortBy(prop){
     this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
   }
 },
}
</script>

<style>
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}

</style>