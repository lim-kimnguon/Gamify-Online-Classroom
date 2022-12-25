<template>
  <v-container fluid>
    <v-row class="header">
        <v-col cols="6">
            <h3>Room Type</h3>
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            label="Question Type"
          ></v-autocomplete>
        </v-col>

        <v-col cols="6">
            <h3>Input Room Number</h3>
            <v-text-field
            v-model="message3"
            filled
            label="Room"
            clearable
            ></v-text-field>
        </v-col>
    </v-row>
    <div class="d-flex justify-center mb-6" >
        <v-btn
            color="success"
            dark
             @click="myFunctionClick()"
        >
            Add New Question
        </v-btn>
    </div>
    <div hidden id="hide">

      <AddQuestion></AddQuestion>
    </div>
  </v-container>
</template>

<script>
import AddQuestion from './AddQuestion.vue'
  export default {
    components:{
      AddQuestion,
    },
    data: () => ({
      items: [
        'Tpye 1',
        'Tpye 2',
      ],
      isHidden: false
    }),
    methods:{
        myFunctionClick: function () {        
            var hide = this.$el.querySelector("#hide");
             hide.style.display = 'block';

        }
    }
  }


</script>

<style scoped>
    .header{
        padding-top: 30px;
        padding-left: 50px;
        padding-right: 50px;

    }
</style>
