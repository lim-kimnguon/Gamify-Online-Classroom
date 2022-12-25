import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/roomtype',
    name: 'roomtype',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/RoomView.vue')
  },
  {
    path: '/addroomtype',
    name: 'addroomtype',
    component: () => import(/* webpackChunkName: "addroomtype" */ '../views/AddRoom.vue')
  },
  {
    path: '/questiontype',
    name: 'questiontype',
    component: () => import(/* webpackChunkName: "questiontype" */ '../views/AddQuestionType.vue')
  },
  {
    path: '/listquestiontype',
    name: 'listquestiontype',
    component: () => import(/* webpackChunkName: "listquestiontype" */ '../views/ListQuestionType.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/quiz/QuizView.vue')
  },
  {
    path: '/addquestion',
    name: 'addquestion',
    component: () => import(/* webpackChunkName: "addquestion" */ '../views/quiz/AddQuestion.vue')
  },
  {
    path: '/editquestion',
    name: 'editquestion',
    component: () => import(/* webpackChunkName: "editquestion" */ '../views/quiz/EditQuestion.vue')
  },
  {
    path: '/newroom',
    name: 'newroom',
    component: () => import(/* webpackChunkName: "newroom" */ '../views/quiz/AddNewRoom.vue')
  },
  {
    path: '/playquiz',
    name: 'playquiz',
    component: () => import(/* webpackChunkName: "playquiz" */ '../views/quiz/PlayQuiz.vue')
  },
  {
    path: '/editquiz',
    name: 'editquiz',
    component: () => import(/* webpackChunkName: "editquiz" */ '../views/quiz/EditQuiz.vue')
  },
  {
    path: '/listteacher',
    name: 'listteacher',
    component: () => import(/* webpackChunkName: "listteacher" */ '../views/teacher/ListTeacher.vue')
  },
  {
    path: '/addteacher',
    name: 'addteacher',
    component: () => import(/* webpackChunkName: "addteacher" */ '../views/teacher/AddTeachers.vue')
  },
  {
    path: '/listusertype',
    name: 'listusertype',
    component: () => import(/* webpackChunkName: "listusertype" */ '../views/usertype/ListUserType.vue')
  },
  {
    path: '/addusertype',
    name: 'addusertype',
    component: () => import(/* webpackChunkName: "listusertype" */ '../views/usertype/AddUserType.vue')
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    component: () => import(/* webpackChunkName: "changepassword" */ '../views/ChangePassword.vue')
  },
  {
    path: '/listrecordquiz',
    name: 'listrecordquiz',
    component: () => import(/* webpackChunkName: "changepassword" */ '../views/quiz/ListRecordQuiz.vue')
  },
  {
    path: '/listrecordquiz',
    name: 'listrecordquiz',
    component: () => import(/* webpackChunkName: "listrecordquiz" */ '../views/quiz/ListRecordQuiz.vue')
  },
  {
    path: '/recordplayquiz',
    name: 'recordplayquiz',
    component: () => import(/* webpackChunkName: "recordplayquiz" */ '../views/quiz/RecordPlayQuiz.vue')
  },
  {
    path: '/viewrecord',
    name: 'viewrecord',
    component: () => import(/* webpackChunkName: "viewrecord" */ '../views/quiz/ViewDetails.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/quiz/TestView.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
