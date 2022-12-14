import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

/* Guest */
import Welcome from '../views/Welcome.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Team from '../views/Team.vue'
import PageNotFound from '../views/NotFound.vue'
/* Guest */

/* Authenticated */
import Dashboard from '../views/Home/Layouts.vue'
import Home from '../views/Home/index.vue'
import Events from '../views/Home/Events.vue'
import EventID from '../views/Home/EventID.vue'
import EventCreate from '../views/Home/EventCreate.vue'
import EventEditID from '../views/Home/EventEditID.vue'
import MyAccount from '../views/Home/MyAccount.vue'



// new
import Contacts from '../views/Home/Contacts.vue'
import Services from '../views/Home/Services.vue'
import Reports from '../views/Home/Reports.vue'

/* Authenticated */

import Verification from '../views/verification.vue'



const routes = [
  { path: '/', name: 'Welcome', component: Welcome,
    meta: {
      middleware: "guest",
      title: `عزام إدارة الأحداث`
    }
  },
  { path: '/signup', name: 'SignUp', component: SignUp,
    meta: {
      middleware: "guest",
      title: `عزام | التسجيل`
    }
  },
  { path: '/login', name: 'LogIn', component: LogIn,
    meta: {
      middleware: "guest",
      title: `عزام | الدخول`
    }
  },
  { path: '/team', name: 'Team', component: Team,
    meta: {
      middleware: "guest",
      title: `عزام | فريق العمل`
    }
  },
  {path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound, meta: {
    title: `عزام | صفحة غير موجودة`
  }
},
  //  Authenticated routes 
  // Admin routes
  { path: '/home', name: 'Dashboard', component: Dashboard, 
    meta: { 
      middleware: "auth",
    },
    children: [
      { path: '/home', name: 'Home', component: Home, meta: {title: `عزام | الرئيسية`}},
      { path: 'events', name: 'Events',component: Events,meta: {title: `عزام | الأحداث`}},
      { path: 'event/create', name: 'EventCreate', component: EventCreate,meta: {title: `عزام | إنشاء أحداث`}},
      { path: 'event/:id', name: 'EventID',component: EventID, props: true,meta: {title: `عزام | تفاصيل الحدث`}},
      { path: 'event/edit/:id', name: 'EventEditID', component: EventEditID,props: true,meta: {title: `عزام | تعديل الحدث`}},
      { path: 'myaccount', name: 'MyAccount',component: MyAccount,meta: {title: `عزام | حسابي`}},
      { path: 'contacts', name: 'Contacts',component: Contacts,meta: {title: `عزام | المدعوين السابقين`}},
      { path: 'services', name: 'Services',component: Services,meta: {title: `عزام | الخدمات`}},
      { path: 'reports', name: 'Reports',component: Reports,meta: {title: `عزام | التقارير`}},

    ]
  },
  // User routes
  { path: '/verification/:eventid/:userid', name: 'Verification',component: Verification,
    meta: {
    middleware: "auth",
    title: `عزام | تأكيد الحضور`}
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.meta.middleware == "guest") {
    if (store.state.auth.authenticated) {
      next({ name: 'Home' })
    }
    next()
  } else {
      if (store.state.auth.authenticated) {
          next()
      } else {
          next({ name: "LogIn" })
      }
  }
})

export default router