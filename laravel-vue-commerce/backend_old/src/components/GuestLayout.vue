<template>
    <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
    <router-view></router-view>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{{title}}</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Or
                        {{ ' ' }}
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
                    </p>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    })
</script>

<style scoped>

</style>
