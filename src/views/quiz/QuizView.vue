<template>
<div>
    <h4 style="padding-left:20px; padding-top:15px;"><router-link to="/quiz">
        Quiz Room</router-link> </h4>
    <div class="my-2 d-flex flex-row-reverse" style="padding-right: 150px; padding-top: 20px;">
        <router-link to="/newroom"
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
        cols="12" lg="12" 
        v-for="(item, i) in items"
        :key="i"
        outline
        >
            
            <v-card
                max-width="800"   
            >
                    <v-card-text >
                  
                            <p class="text-h4 text--primary">
                                {{ item.title }}
                            </p>
                            <div class="text--primary d-flex justify-space-between">
                                {{ item.question }}
                                <div >
                                    <router-link to="/editquiz"
                                    style="text-decoration:none;">
                                        <v-btn icon>
                                            <v-icon>mdi-square-edit-outline</v-icon>
                                        </v-btn>
                                    </router-link>

                                    <v-btn icon>
                                        <v-icon>mdi-delete-sweep</v-icon>
                                    </v-btn>

                                    <v-btn icon>
                                        <v-icon>mdi-share-variant</v-icon>
                                    </v-btn>
                                    <router-link to="/playquiz"
                                    style="text-decoration:none;">
                                        <v-btn
                                            color="success"
                                            dark
                                        >
                                            Play
                                        </v-btn>
                                    </router-link>
                                 </div>
                            </div>
                    </v-card-text>
            </v-card>
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
                title:'Room 01',
                question:'10 Question',
                
            },
            {
                title:'Room 02',
                question:'12 Question'
            },
            {
                title:'Room 03',
                question:'04 Question'
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
</style>