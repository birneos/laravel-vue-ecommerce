<template>
    <div class="min-h-full flex bg-gray-100">
        <!--        SIDEBAR -->
       <sidebar></sidebar>
        <!--        END SIDEBAR -->

        <div class="flex-1">
            <TopHeader></TopHeader>
            <main class="p-6">
                <div class="p-4 rounded bg-white">
                    <router-view></router-view>
                </div>
            </main>
        </div>

    </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";
</script>
