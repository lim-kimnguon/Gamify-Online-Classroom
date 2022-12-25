<template>
    <div>
        <h3 style="padding-top:20px; padding-left:15px;">Change Password</h3>
        <v-container class="container">
            <v-row>
                <v-col
                cols="12"
                >
                    <v-text-field
                        v-model="message3"
                        :rules="rules"
                        filled
                        label="Old Password"
                        clearable
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                >
                    <v-text-field
                        v-model="message3"
                        :rules="rules"
                        filled
                        label="New Password"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                >
                    <v-text-field
                        v-model="message3"
                        :rules="rules"
                        filled
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
        margin-top: 60px;
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
        rules: [
            value => !!value || 'Required.',
        ],
    };
  },

};
</script>