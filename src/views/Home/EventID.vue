<template>
<div class="flex items-center bg-gray-100">
    <div class="container max-w-6xl px-5 mx-auto my-10">
        <div class="flex items-center justify-between">
            <p class="font-bold text-md py-4">{{event.name}}</p>
            <button @click="deleteEvent()" class="flex items-center bg-red-400 hover:bg-red-500 text-gray-800 font-medium px-2 pt-2.5 pb-2 rounded-md">
                <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>                                    حذف
            </button>
        </div>
        <p class="text-sm font-normal py-4">{{event.description}}</p>
        <div class="grid gap-7 grid-cols-2 lg:grid-cols-4">
            <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                <div>
                    <div class="text-sm text-gray-400 ">عدد المسجلين</div>
                    <div class="flex items-center pt-1">
                        <div class="text-xl font-medium text-secondary">{{total}}</div>
                    </div>
                </div>
                <div class="text-gray-300">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
            </div>
            <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                <div>
                    <div class="text-sm text-gray-400 ">تأكيد</div>
                    <div class="flex items-center pt-1">
                        <div class="text-xl font-medium text-green-500 ">0</div>
                    </div>
                </div>
                <div class="text-green-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>
            <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                <div>
                    <div class="text-sm text-gray-400 ">إنتظار</div>
                    <div class="flex items-center pt-1">
                        <div class="text-xl font-medium text-yellow-400">{{total}}</div>
                    </div>
                </div>
                <div class="text-yellow-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>
            <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                <div>
                    <div class="text-sm text-gray-400 ">رفض</div>
                    <div class="flex items-center pt-1">
                        <div class="text-xl font-medium text-red-400 ">0</div>
                    </div>
                </div>
                <div class="text-red-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="flex items-center mt-8 bg-gray-100">
    <div class="container max-w-6xl px-5 mx-auto my-10">
        <div class="flex items-center justify-between">
            <p class="font-bold text-md py-4">المستخدمين</p>
            <button @click="deleteEvent()" class="flex items-center bg-secondary text-gray-200 font-medium px-2 pt-2.5 pb-2 rounded-md">
                المحادثات الفردية
            </button>
        </div>
        <div class="mx-auto w-full">
            <div class="max-w-2xl mx-auto">

<form>
<label for="chat" class="sr-only">Your message</label>
<div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
    </button>
    <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
    </button>
    <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="رسالة للجميع"></textarea>
        <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
        <svg class="w-6 h-6 -rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
    </button>
</div>
</form>
</div>
        </div>
    </div>
</div>

<div class="flex items-center mt-8 bg-gray-100">
    <div class="container max-w-6xl px-5 mx-auto my-10">
        <div class="flex items-center justify-between">
            <p class="font-bold text-md py-4">الخدمات</p>
            <button @click="deleteEvent()" class="flex items-center bg-secondary text-gray-200 font-medium px-2 pt-2.5 pb-2 rounded-md">
                إضافة المزيد
            </button>
        </div>
        <div class="mx-auto w-full">
            <div class="flex flex-wrap -m-3.5 mb-10">
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
              <img class="absolute left-0 top-10" src="https://i.ytimg.com/vi/zVI1c8bR1eI/maxresdefault.jpg" alt="">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">دانكن</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>المشروبات</span>
                    <span class="px-2">&bull;</span>
                    <span>أبها, القريقر</span>
                  </p>
                </div>
                <button class="flex items-center px-4 py-2 font-medium text-sm text-white bg-[#4F00FA] rounded-md">
                
                <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p>التواصل</p>
                </button>
              </div>
            </div>
          </a>
        </div>
        
      </div>
        </div>
    </div>
</div>
            
</template>
<script>
import axios from 'axios'
import Aside from '../../components/Home/Aside.vue'
import Navbar from '../../components/Home/Navbar.vue'
export default {
    name: "EventID",
    props: ['id'],
    components: { Aside, Navbar },
    data() {
        return {
            eventID: this.id,
            event: [],
            attendences : [],
            count: 0,
            total : 0,
            satus: []
        }
    },
    created() {
        this.getEvent()
    },
    mounted() {
        document.title = `الحدث ${this.event.name} | عزام`
    },
    methods: {
        async getEvent() {
            axios.post(`get-event-details/${this.id}/`)
            .then(response => {
                console.log(response.data.statistics.count)
                this.event = response.data.event,
                this.attendences = response.data.attendences
                this.count = response.data.count_attendees_will_not_attend
                this.total = response.data.statistics.count
            }).catch(error => {
                console.log(error)
            })
        },
        deleteEvent() {
            axios.post(`delete-event/${this.id}/`)
            .then(response => {
                this.$router.push('/home')
            }).catch(error => {
                console.log(error)
            })
        }
    }

}
</script>