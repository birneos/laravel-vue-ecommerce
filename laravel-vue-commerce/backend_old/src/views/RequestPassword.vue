<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
       <GuestLayout title="Passwort anfragen">
           <form class="mt-8 space-y-6" action="#" method="POST">
               <input type="hidden" name="remember" value="true" />
               <div class="-space-y-px rounded-md shadow-sm">
                   <div>
                       <label for="email-address" class="sr-only">Email address</label>
                       <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                   </div>
               </div>

               <div class="flex items-center justify-between">
                   <div class="text-sm justify-content-end">
                       <router-link :to="{name:'login'}" class="font-medium text-indigo-600 hover:text-indigo-500">Remember password</router-link>
                   </div>
               </div>

               <div>
                   <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
                       Sign in
                   </button>
               </div>
           </form>
       </GuestLayout>

        </div>
    </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import GuestLayout from "../components/GuestLayout.vue";
</script>

