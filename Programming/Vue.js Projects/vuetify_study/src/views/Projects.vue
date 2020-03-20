<template>
  <div class="projects">
    <h1 class="subheading grey--text">PROJECTS</h1>
   
      <v-container class="my-5">
        <v-expansion-panels >
    <v-expansion-panel  v-for="project in myProjects" :key="project.title">
       <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
      <v-expansion-panel-content >         
        <v-card>
          <v-card-text>
            <div class="font-weight-black">{{project.due}}</div>
            <div>{{project.content}}</div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn class="primary">
              <v-icon small left>payment</v-icon>
              <span>Payment</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
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
        { title: 'Again', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
   }
 },
 computed: {
   myProjects(){
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
   }
 },
 
}
</script>
