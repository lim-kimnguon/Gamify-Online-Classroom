<template>
  <div>
        <div class="header">
            <h3>Input Question</h3>
            <v-text-field
            label="Question"
            :rules="rules"
            hide-details="auto"
            style="padding-right: 50px;"
            ></v-text-field>
             
        </div>
        <br>
        <div>

          <div class="question">
            <h1 class="number">1</h1>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="message3"
                filled
                label="Filled"
                clearable
              ></v-text-field>
            </v-col>
          </div>

          <div class="question">
            <h1 class="number">2</h1>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="message3"
                filled
                label="Filled"
                clearable
              ></v-text-field>
            </v-col>
          </div>

          <div class="question">
            <h1 class="number">3</h1>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="message3"
                filled
                label="Filled"
                clearable
              ></v-text-field>
            </v-col>
          </div>

          <div class="question">
            <h1 class="number">4</h1>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="message3"
                filled
                label="Filled"
                clearable
              ></v-text-field>
            </v-col>
          </div>
        </div>

        <div class="answer">
            <h3>Answer</h3>
            <v-col cols="12">
              <v-autocomplete
                v-model="value"
                :items="answers"
                dense
                filled
                label="Question Type"
              ></v-autocomplete>
            </v-col>
             
        </div>
        <div class="my-2 d-flex flex-row-reverse" style="padding-right: 100px;">
            <v-btn
                color="success"
                dark
            >
                Submit
            </v-btn>
        </div>
  
  </div>
</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
      ],
      answers: [
        '1',
        '2',
        '3',
        '4',
      ],


    }),
  }
</script>
<style scoped>
    .header{
        padding-top: 30px;
        padding-left: 50px;
        
    }

    .number{
      margin-top: 13px;
      background-color: #0999AD;
      width: 200px;
      padding-left: 20px;
      padding-right: 20px;
      height: 55px;
      color: white;
    }
    .question{
      padding: 0 50px 0 50px;
      display: flex;
    }
    .answer{
      padding-left: 50px;
      width: 300px;
    }
</style>