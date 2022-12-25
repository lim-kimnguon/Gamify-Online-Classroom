<template>
  <v-container fluid>
      <h4 style="padding-left:20px; padding-top:15px;">
        <router-link to="/quiz">
        Quiz Room</router-link> / 
        Add Question
      </h4>
    <v-row class="header">
        <v-col cols="6" >
          <div class="select">
            <v-select
              v-model="selected"
              :items="items"
              filled
              label="Question Type"
            ></v-select>
          </div>
        </v-col>
        <v-col style="padding-top: 20px;">
            <v-sheet>
                <v-menu
                  ref="menu"
                  v-model="menuTime2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dropoffTime"
                      label="Time"
                      outlined
                      class="mt-n3"
                      hide-details=""
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menuTime2"
                    format="24hr"
                    v-model="dropoffTime"
                    full-width
                    use-seconds
                ></v-time-picker>
                </v-menu>
            </v-sheet>
        </v-col>
    </v-row>
    <div  v-if="selected == 'Multiple choose'">
    <MultiQuestion></MultiQuestion>
   </div>
    <div  v-if="selected == 'True & False'">
    <TrueFalse></TrueFalse>
   </div>
  </v-container>
</template>

<script>
import MultiQuestion from '../../components/MultiQuestion.vue'
import TrueFalse from '../../components/TrueFalse.vue'
  export default {
    components:{
      MultiQuestion,
      TrueFalse,
    },
    data () {
      return {
        dropoffTime:null,
        menuTime2:false,
        time: '',
        selected: '',
        items: [
          'Multiple choose',
          'True & False',
        ],
      }
    },
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
    .time{
      width: 100px;
      height: 100px;
    }
</style>