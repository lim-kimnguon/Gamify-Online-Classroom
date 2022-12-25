<template>
    <div>      
        <v-card-title>
            <h4>Quiz Record</h4>
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

            <template v-slot:[`item.actions`]="{ item }">
              <router-link to="/recordplayquiz"
              style="text-decoration:none;">
                <v-btn
                small
                color="success"
                @click="deleteItem(item)"
                >
                view Details
                </v-btn>
              </router-link>
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
            text: 'Room Name',
            value: 'roomname'
          },
          { text: 'Room Type', value: 'roomtype'},
          { text: 'Total Play', value: 'play'},
          { text: 'Actions', value: 'actions', sortable: false },
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
            roomname: 'Room 01',
            roomtype: 'Room Type 01',
            play: '3',
          },
          {
            id: 2,
            roomname: 'Room 02',
            roomtype: 'Room Type 01',
            play: '4',
          },
          {
            id: 3,
            roomname: 'Room 03',
            roomtype: 'Room Type 01',
            play: '2',
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
</style>