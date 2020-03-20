<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on">
        Add a new Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Create a New Project
      </v-card-title>

      <v-divider></v-divider>
      <v-card-text>
        <v-form class="px3">
          <v-text-field
            :rules="inputRules"
            name="name"
            label="Title"
            id="id"
            color="primary"
            v-model="title"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            :rules="inputRules"
            label="Information"
            v-model="information"
            prepend-icon="edit"
          ></v-textarea>
          <v-container>
            <v-row>
              <v-col cols="12" lg="12">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="computedDateFormattedMomentjs"
                      clearable
                      :rules="inputRules"
                      label="Due Date"
                      readonly
                      v-on="on"
                      @click:clear="date = null"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
          <v-btn color="success mx-0 mt-3" @click="submit">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
import format from "date-fns/format";

export default {
  data: () => ({
    dialog: false,
    title: "",
    content: "",
    inputRules: [v => v.length >= 3 || "Minimum is 3"],
    date: new Date().toISOString().substr(0, 10),
    menu1: false
  }),
  methods: {
      submit(){
          this.$emit('projectAdded')
      }
  },

  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, "dddd, MMMM Do YYYY") : "";
    }
  }
};
</script>
