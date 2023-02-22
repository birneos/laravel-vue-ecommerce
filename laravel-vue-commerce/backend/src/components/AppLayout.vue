<template>
    <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->

    <div class="min-h-full flex">
        <!--        SIDEBAR -->
       <sidebar></sidebar>
        <!--        END SIDEBAR -->

        <div class="flex-1">
            <TopHeader></TopHeader>
            <main class="p-6">
                <router-view></router-view>
            </main>
        </div>

    </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";
</script>
