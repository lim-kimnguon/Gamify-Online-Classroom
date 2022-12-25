<template>
    <v-card
      class="mx-auto"
      width="256"
      tile
    >
      <v-navigation-drawer permanent>   
        <v-list>
          <v-list-item link>
              <v-list-item-title class="text-h6">
                <h2 style="font-style: italic; color: #0999ad">GIC FunQuiz! &nbsp;</h2>
              </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
               <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                 <v-list-item-title>
                  <router-link to="/"
                  style="text-decoration:none;">
                  Dashboard
                  </router-link>
                  </v-list-item-title>
              </v-list-item>
            
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-title>
                  <router-link to="/listteacher"
                  style="text-decoration:none;">
                    Teacher
                  </router-link>
                  </v-list-item-title>
              </v-list-item>
            

              <v-list-group
                :value="true"
                prepend-icon="mdi-help-box-multiple"            
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Quiz </v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-badge-account</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>
                    <router-link to="/quiz"
                    style="text-decoration:none;"
                    >Quiz Room</router-link>
                   
                    
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home-search</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>
                    <router-link to="/listrecordquiz"
                    style="text-decoration:none;">

                      Record Quiz
                    </router-link>
                    </v-list-item-title>
                </v-list-item>


              </v-list-group>

              <v-list-group
                :value="true"
                prepend-icon="mdi-cog-outline"            
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-help-box</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>
                      <router-link to="/listquestiontype"
                        style="text-decoration:none;"
                        >
                        Question Type
                      </router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home-search</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                      <router-link to="/roomtype"
                      style="text-decoration:none;"
                      >
                        Room Type
                      </router-link>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account-edit</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>
                    <router-link to="/listusertype"
                    style="text-decoration:none;">
                       User Type
                    </router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-lock-reset</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>
                    <router-link to="/changepassword"
                    style="text-decoration:none;">

                      Change password
                    </router-link>
                    </v-list-item-title>
                </v-list-item>
              </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {

  data() {
    return {};
  },
};
</script>