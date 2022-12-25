<template>
    <div>
        <h3 style="padding-top:20px; padding-left:15px;">Add Teacher</h3>
        <v-container class="container">
            <v-row>
                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
                        :rules="rules"
                        label="First Name"
                        clearable
                    ></v-text-field>
                </v-col>

                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
                        :rules="rules"
                        label="Last Name"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
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
                        v-model="message1"
                        :rules="rules"
                        label="User name"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field
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
                        v-model="message1"
                        label="Phone Number"
                        clearable
                    ></v-text-field>
                </v-col>

                <v-col
                cols="6"
                sm="6"
                >
                    <v-select
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
                        v-model="message1"
                        label="Position"
                        clearable
                    ></v-text-field>
                </v-col>

                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
                        label="Deparment"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
                        :rules="rules"
                        label="Password"
                        clearable
                    ></v-text-field>
                </v-col>

                <v-col
                cols="6"
                sm="6"
                >
                    <v-text-field
                        v-model="message1"
                        :rules="rules"
                        label="Confirmed Password"
                        clearable
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn
                color="success"
                dark>
                Submit
            </v-btn>
        </v-container>
    </div>
    
</template>

<style scoped>

    .container{
        width: 800px;
        border-radius: 8px;
        border: 1px solid black;
        padding: 15px;
    }
</style>

<script>
export default {

  data() {
    return {
        genders: ['Male', 'Female'],
        roles: ['owner', 'admin', 'staff'],
        rules: [
            value => !!value || 'Required.',
        ],
    };
  },

};
</script>