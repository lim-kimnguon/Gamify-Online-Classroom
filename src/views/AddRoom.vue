<template>
  <div>
        <div class="header">
            <h3>Room Type</h3>
            <v-text-field
            label="Input Room Name"
            :rules="rules"
            hide-details="auto"
            style="padding-right: 50px;"
            ></v-text-field>
             
        </div>
        <br>

        <div style="padding-left: 50px; padding-right: 50px;">
            <h3>Description</h3>
            <br>
            <v-textarea
            solo
            name="input-7-4"
            label="Solo textarea"
            outlined
        
            ></v-textarea>
        </div>
        <div class="my-2 d-flex flex-row-reverse" style="padding-right: 100px; padding-top: 100px;">
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
    }),
  }
</script>
<style scoped>
    .header{
        padding-top: 30px;
        padding-left: 50px;
        
    }
    #text{
        width: 200px;
        height: 40px;
        border: 1px black;
    }
    #textarea{
        width: 800px;
        height: 100px;
        border: 1px black;
    }
</style>