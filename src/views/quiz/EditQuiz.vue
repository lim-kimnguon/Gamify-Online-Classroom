<template>
<div>
            <h4 style="padding-left:20px; padding-top:15px;">
            <router-link to="/quiz">
            Quiz Room</router-link> / Edit Quiz</h4>
    <div class="my-2 d-flex flex-row-reverse" style="padding-right: 150px; padding-top: 40px;">
        <router-link to="/addquestion"
        style="text-decoration:none;">
            <v-btn
                color="success"
                dark
            >
                Add New
            </v-btn>
        </router-link>
    </div>
    <v-row class="header">
        <v-col
        cols="12" 
        v-for="(item, i) in items"
        :key="i"
        outline
        >

            <div class="box">
                <div>
                    <h1 class="number">{{i+1}}</h1>
                </div>
                    
                <v-card
                    class="question"   
                >
                        <v-card-text >
                                <div class="text--primary d-flex justify-space-between">
                                    {{ item.question }}
                                    <div >
                                        <router-link to="/editquestion"
                                        style="text-decoration:none;">
                                            <v-btn icon>
                                                <v-icon>mdi-square-edit-outline</v-icon>
                                            </v-btn>
                                        </router-link>
                                        <v-btn icon>
                                            <v-icon>mdi-delete-sweep</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                        </v-card-text>
                </v-card>
            </div>
        </v-col>
    </v-row>
</div>
</template>
<script>
export default {

  data() {
    return {
        items:[
            {
                question:'Question 01',
            },
            {
                question:'Question 02',    
            },
            {
                question:'Question 03',
            },
        ],
    };
  },
};
  </script>


<style scoped>
    .header{
        margin-top: 20px;
        /* margin-left: 200px; */
        padding-left: 50px;

    }
    .box{
       display: flex;
    }
    .question{
        width: 1000px;
        height: 60px;
    }
    .number{
        background: #0999AD;
        height: 60px;
        width: 50px;
        padding-left: 15px;
        color: white;
    }
</style>