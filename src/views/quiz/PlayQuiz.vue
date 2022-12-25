<template>

    <div class="header">
            <h4 >
            <router-link to="/quiz">
            Quiz Room</router-link> / Start Quiz</h4>
        <div  class="container">
            <div>
                <v-card
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1">
                            Tittle
                            </v-list-item-title>
                            <v-list-item-subtitle>Description</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        color="success"
                        dark
                    >
                        Start
                    </v-btn>
                    <v-btn
                        outlined
                        rounded
                        color="error"
                        dark
                    >
                        Stop
                    </v-btn>
                    </v-card-actions>
                </v-card>
                <br>
                <v-card 
                width="300px"
                color="#0999AD"
                
                >
                    <v-list-item class="d-flex justify-space-between white--text">
                        <v-list-item-title class="text-h5 ">
                        Total
                        </v-list-item-title >
                        <v-list-item-subtitle class="text-h6 white--text">30 People</v-list-item-subtitle>
                    </v-list-item>
                </v-card>
                <br>
                <v-card 
                width="300px"
                >
                    <v-list-item class="d-flex justify-space-between">
                        <v-list-item-title class="text-h5 ">
                        <h4>Time: {{ countDown }}s</h4>
                        </v-list-item-title >
                        <v-list-item-subtitle class="text-h6 ">Question 1</v-list-item-subtitle>
                    </v-list-item>
                </v-card>
                
                <br>
                <v-card v-if="countDown == 0"
                width="300px"
                color="#0999AD"
                >
                    <v-list-item 
                    class="d-flex justify-space-between white--text">
                        <div>
                            <v-list-item-title class="text-h6 ">
                            Name
                            </v-list-item-title >
                        </div>
                        <div>
                            <v-list-item-subtitle class="text-h6 white--text">Score</v-list-item-subtitle>
                        </div>
                    </v-list-item>
                    <v-list-item
                    class="d-flex justify-space-between white--text"
                    v-for="([name, score], i) in scores"
                    :key="i"
                    outline>
                        <div>
                            <v-list-item-title v-text="name"></v-list-item-title>
                        </div>
                        <div>
                            <v-list-item-title v-text="score"></v-list-item-title>
                        </div>
                    </v-list-item>
                </v-card>
                <br>
                <v-btn 
                    color="success"
                    dark
                >
                    Next
                </v-btn>

            </div>
            <div class="divider">
                <v-divider 
                vertical
                ></v-divider>
            </div>
            <div class="question">
                <v-responsive
                class="overflow-y-auto"
                max-height="600"
                >
                    <div style="display:flex;">
                        <h3 class="number">1</h3>
                        <v-list-group id="question">
                            <template 
                            v-slot:activator>
                            <v-list-item-title>ISO stands for ?</v-list-item-title>
                            </template>
                                <v-list-item
                                    v-for="([title, icon], i) in questions"
                                    :key="i"
                                    link
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>

                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                        </v-list-group>
                    </div>
                    <div style="display:flex;">
                        <h3 class="number">2</h3>
                        <v-list-group id="question">
                            <template 
                            v-slot:activator>
                            <v-list-item-title>ISO stands for ?</v-list-item-title>
                            </template>
                                <v-list-item
                                    v-for="([title, icon], i) in questions"
                                    :key="i"
                                    link
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>

                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                        </v-list-group>
                    </div>
                    <div style="display:flex;">
                        <h3 class="number">3</h3>
                        <v-list-group id="question">
                            <template 
                            v-slot:activator>
                            <v-list-item-title>ISO stands for ?</v-list-item-title>
                            </template>
                                <v-list-item
                                    v-for="([title, icon], i) in questions"
                                    :key="i"
                                    link
                                >
                                    <v-list-item-title v-text="title"></v-list-item-title>

                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                        </v-list-group>
                    </div>

                </v-responsive>
            </div>
        </div>


    </div>
</template>

<script>
// import TimeCounter from '../../components/TimeCounter.vue'
export default {
    // components:{
    //   TimeCounter,
    // },
    data: () => ({
      questions: [
        ['International Standard Organization', 'mdi-check'],
        ['International Student Organization'],
        ['Integrated Services Organization'],
        ['None'],
      ],
      scores: [
        ['Student 01', '300'],
        ['Student 02', '280'],
        ['Student 03', '300'],
        ['Student 01', '300'],

      ],
      countDown: 30

    }),
            methods: {
            countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            }
        },
        created () {
            this.countDownTimer()
        }
  }
</script>

<style scoped>
    .header{
        padding-top: 30px;
        padding-left: 50px;
        padding-right: 50px;
    }
    .container{
        display: flex;
        position: absolute;
    }
    .divider{
        margin-left: 150px;
    }
    .question{
        margin-left: 100px;
        width: 500px;
    }
    .number{
      margin-top: 13px;
      width: 20px;
      height: 55px;

    }
    #question{
      width: 500px;
    }
</style>