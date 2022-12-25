<template>
    <div>      
        <v-card-title>
            <h4>
              <router-link to="/listrecordquiz"
              >

              Quiz Record
              </router-link>
              / Room Quiz Record
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

        <v-data-table
            :headers="headers"
            :items="teachers"
            :search="search"
            class="elevation-1 table"
        >

            <template v-slot:[`item.actions`]="{ item }" >
              <router-link to="/viewrecord"
               style="text-decoration:none;">
                <v-btn class="btn"
                small
                color="success"
                @click="deleteItem(item)"
                >
                View 
                </v-btn>
              </router-link>
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
            text: 'Date',
            value: 'date'
          },
          { text: 'Question', value: 'question'},
          { text: 'Total Student', value: 'student'},
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
            date: '20-01-2022',
            question: '10 question',
            student: '30 People',
          },
          {
            id: 2,
            date: '10-01-2022',
            question: '10 question',
            student: '30 People',
          },
          {
            id: 3,
            date: '03-01-2022',
            question: '10 question',
            student: '30 People',
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