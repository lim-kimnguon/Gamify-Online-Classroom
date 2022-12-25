<template>
    <div>      
        <v-card-title>
            List Teacher
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <div class="my-2 d-flex flex-row-reverse" style="padding-right: 50px; padding-top: 40px;">
            <router-link to="/addusertype"
            style="text-decoration:none;">
                <v-btn
                    color="success"
                    dark
                >
                    Add New
                </v-btn>
            </router-link>
        </div>
        <v-data-table
            :headers="headers"
            :items="teachers"
            :search="search"
            class="elevation-1 table"
        >

            <template v-slot:[`item.actions`]="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
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
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Role',
            value: 'role'
          },
          { text: 'Description', value: 'description'},
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
            role: 'Owner',
            description: 'description',
          },
          {
            id: 2,
            role: 'admin',
            description: 'description',
          },
          {
            id: 3,
            role: 'Staff',
            description: 'description',
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