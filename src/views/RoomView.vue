<template>
<div>
    <div class="my-2 d-flex flex-row-reverse" style="padding-right: 50px; padding-top: 40px;">
        <router-link to="/addroomtype"
        style="text-decoration:none;">
            <v-btn
                color="success"
                dark
            >
                Add New
            </v-btn>
        </router-link>
    </div>
    <v-row>
        <v-col
        cols="12" lg="4" class="header"
        v-for="(item, i) in items"
        :key="i"
        >
            
            <v-card
                max-width="374"   
            >
                    <v-card-text >
                    <p class="text-h4 text--primary">
                        {{ item.title }}
                    </p>
                    <div class="text--primary">
                        {{ item.subtitle }}
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
                title:' room type 1',
                subtitle:'  Here this room type1'
            },
            {
                title:' room type 2',
                subtitle:'  Here this room type2'
            },
            {
                title:' room type 3',
                subtitle:'  Here this room type3'
            },
        ],
    };
  },
};
  </script>


<style scoped>
    .header{
        margin-top: 50px;
        /* margin-left: 200px; */
        padding-left: 50px;
        padding-right: 50px;
    }
</style>