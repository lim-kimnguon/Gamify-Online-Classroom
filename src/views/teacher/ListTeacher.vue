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
        <v-data-table
            :headers="headers"
            :items="teachers"
            :search="search"
            class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >
                    New Item
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-text-field
                                    v-model="editedItem.name"
                                    :rules="rules"
                                    label="Name"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-text-field

                                    label="Age"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-select
                                :items="genders"
                                label="Sex"
                                required
                                ></v-select>
                            </v-col>

                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-text-field
                                    :rules="rules"
                                    label="User name"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                v-model="editedItem.email"
                                label="Email address"
                                value="example"
                                suffix="@gmail.com"
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="6"
                            sm="6"
                            >
                            <v-text-field
                                    v-model="editedItem.phone"
                                    label="Phone Number"
                                    clearable
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-select
                                v-model="editedItem.role"
                                :items="roles"
                                label="Role"
                                required
                                ></v-select>
                            </v-col>
                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-text-field
                                    v-model="editedItem.position"
                                    label="Position"
                                    clearable
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="6"
                            sm="6"
                            >
                                <v-text-field
                                    v-model="editedItem.department"
                                    label="Department"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="6"
                            sm="6"
                            id="password"
                            >
                                <v-text-field
                                
                                    label="Password"
                                    clearable
                                ></v-text-field>
                            </v-col>

                            <v-col
                            cols="6"
                            sm="6"
                            id="confirmed"
                            >
                                <v-text-field
                                
                                    label="Confirmed Password"
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
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
            <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
                Reset
            </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      selected: '',
      search: '',
      headers: [
          {
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Phone', value: 'phone' },
          { text: 'Position', value: 'position' },
          { text: 'Department', value: 'department' },
          { text: 'Email', value: 'email' },
          { text: 'Role', value: 'role' },
          { text: 'Actions', value: 'actions', sortable: false },
      ],
        genders: ['Male', 'Female'],
        roles: ['owner', 'admin', 'staff'],
        rules: [
            value => !!value || 'Required.',
        ],
      teachers: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone:'',
        position: '',
        department: '',
        role: '',
      },
      defaultItem: {
        name: '',
        phone:'',
        position: '',
        department: '',
        role: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

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
            name: 'Teacher01',
            phone: '012433453',
            email: 'teacher01@gmail.com',
            position: 'Teacher',
            department: 'GIC',
            role: 'owner',
          },
          {
            id: 2,
            name: 'Teacher02',
            phone: '01355453',
            email: 'teacher02@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 3,
            name: 'Teacher03',
            phone: '043535345',
            email: 'teacher03@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 4,
            name: 'Teacher04',
            phone: '06345435',
            email: 'teacher04@gmail.com',
            position: 'Teacher',
            role: 'owner',
            department: 'GIC'
          },
          {
            id: 5,
            name: 'Teacher05',
            phone: '05646565',
            email: 'teacher05@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 6,
            name: 'Teacher06',
            phone: '04767565',
            email: 'teacher06@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 7,
            name: 'Teacher07',
            phone: '0574665',
            email: 'teacher07@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 8,
            name: 'Teacher08',
            phone: '06775656',
            email: 'teacher08@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 9,
            name: 'Teacher09',
            phone: '06445656',
            email: 'teacher09@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
          {
            id: 10,
            name: 'Teacher10',
            phone: '06546555',
            email: 'teacher10@gmail.com',
            position: 'Teacher',
            role: 'admin',
            department: 'GIC'
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.teachers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.teachers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.teachers.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.teachers[this.editedIndex], this.editedItem)
        } else {
          this.teachers.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>