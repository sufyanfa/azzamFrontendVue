<template>
    <section class="py-8 bg-blueGray-50 overflow-hidden">
  <div class="container px-4 mx-auto">
    <h2 class="mb-5 text-6xl md:text-4xl xl:text-6xl text-center font-bold font-heading font-heading tracking-px-n leading-none">الخدمات</h2>
    <p class="mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
        يمكنك اختيار الخدمات التي تساعدك على إدارة الفعاليالة بسهولة
    </p>
    <div class="md:max-w-6xl mx-auto">
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
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
              <img class="absolute left-0 top-0" src="data:image/png;base64,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" alt="">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">ليتل سيزر</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>المأكولات</span>
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
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
              <img class="absolute left-0 top-0" src="https://cdn.dribbble.com/users/62525/screenshots/6395734/artboard_4x.png?compress=1&resize=400x300" alt="">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">فلاش باك</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>التصوير</span>
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
      <a class="flex justify-center items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="#">
        <span class="mr-2.5">عرض جميع الخدمات</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      </a>
    </div>
  </div>
</section>
</template>