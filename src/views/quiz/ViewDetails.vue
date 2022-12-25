<template>
    <div>      
        <v-card-title>
            <h4>
              <router-link to="/listrecordquiz"
               style="text-decoration:none;">
              Quiz Record
              </router-link>
              <router-link to="/recordplayquiz"
               style="text-decoration:none;">
              / Room Quiz Record
              </router-link>
              /View Record
              </h4>
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <br><br>
        <v-data-table
            :headers="headers"
            :items="teachers"
            :search="search"
            class="elevation-1 table"
        >

            <template v-slot:[`item.actions`]="{ item }" >
            <v-btn
            small
            color="error"
            @click="deleteItem(item)"
            >
            Delete 
            </v-btn>
            </template>
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </template>
        </v-data-table>
    </div>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      headers: [
          {
            text: 'No',
            value: 'id'
          },
          {
            text: 'Student Name',
            value: 'name'
          },
          { text: 'Question', value: 'question'},
          { text: 'Score', value: 'score'},
          { text: 'Action', value: 'actions', sortable: false },
      ],

    }),


    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.teachers = [
          {
            id: 1,
            name: 'Dara',
            question: '10 question',
            score: '200',
          },
          {
            id: 2,
            name: 'Mara',
            question: '8 question',
            score: '160',
          },
          {
            id: 3,
            name: 'Rana',
            question: '5 question',
            score: '100',
          },
        ]
      },

    },
  }
</script>

<style scoped>
    .table{
        padding-left: 20px;
        padding-right: 20px;
    }
    .btn{
      margin: 4px;
    }
</style>