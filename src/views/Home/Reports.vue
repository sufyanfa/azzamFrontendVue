<template>
    <section class="py-8 bg-blueGray-50 overflow-hidden">
    <div class="container px-4 mx-auto">
    <h2 class="mb-5 text-6xl md:text-4xl xl:text-6xl text-center font-bold font-heading font-heading tracking-px-n leading-none">التقارير</h2>
    <p class="mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
        يمكنك إصدار التقارير لفعالياتك ومشاركتها بصيغ مختلفة
    </p>
    <!-- component -->
<div class="flex flex-col">
    <div class="mx-auto w-full flex items-center justify-between">
        <h2 class="mb-4 text-2xl font-bold">التقرير العام</h2>
        <div class="relative">
    <button onclick="openNav()" type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      تصدير
      <!-- Heroicon name: mini/chevron-down -->
      <svg class="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    <div class="left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">PDF</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">EXEL</a>
    </div>
  </div>
  </div>


    </div>

  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        
        <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </div>

      <div class="mr-4">
        <h2 class="font-semibold">3 فعاليات</h2>
        <p class="mt-2 text-sm text-gray-500">خلال هذا الشهر</p>
      </div>
    </div>

    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div class="mr-4">
        <h2 class="font-semibold">1200 مسجل</h2>
        <p class="mt-2 text-sm text-gray-500">عدد المسجلين في فعاليات الشهر</p>
      </div>
    </div>
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div class="mr-4">
        <h2 class="font-semibold">6 مدربين</h2>
        <p class="mt-2 text-sm text-gray-500">عدد المدربين</p>
      </div>
    </div>
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div class="mr-4">
        <h2 class="font-semibold">3 تعاقدات</h2>
        <p class="mt-2 text-sm text-gray-500">التعاقدات مع المنشآت</p>
      </div>
    </div>
  </div>
</div>
    <div class="mx-auto w-full">
        <h2 class="mb-4 text-2xl mt-12 font-bold">تقرير الفعاليات</h2>
    
        <div class="py-8">
  <div class="p-6 bg-indigo-50 border-l-4 border-primary rounded-r-lg">
    <div class="flex items-center justify-between">
      <h3 class=" text-secondary font-medium">فعالية إدارة الندوات</h3>
      
      <button onclick="openNav()" type="button" class="mr-auto w-24 flex border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      تصدير
      <!-- Heroicon name: mini/chevron-down -->
      <svg class="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    </div>
  </div>
</div>

<div class="pb-8">
  <div class="p-6 bg-indigo-50 border-l-4 border-primary rounded-r-lg">
    <div class="flex items-center justify-between">
      <h3 class=" text-secondary font-medium">فعالية تدريب </h3>
      
      <button onclick="openNav()" type="button" class="mr-auto w-24 flex border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      تصدير
      <!-- Heroicon name: mini/chevron-down -->
      <svg class="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    </div>
  </div>
</div>
        

    </div>
  </div>
</section>
</template>
<script>
function openNav() {
  document.getElementById("bbreport").style.display = "absolute";
}

function closeNav() {
  document.getElementById("bbreport").style.display = "bloack";
}
</script>