<template>
    <div class="min-h-full flex bg-gray-100">
        <!--        SIDEBAR -->
        <sidebar :style="[!sidebarOpened ? 'display:none' : 'display:block']" class=""></sidebar>
        <!--        END SIDEBAR -->

        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
            <main class="p-6">
                <div class="p-4 rounded bg-white">
                    <router-view></router-view>
                </div>
            </main>
        </div>

    </div>
</template>

<script setup>
import {ref} from "vue"
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";

const sidebarOpened = ref(true);

function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
    console.log(sidebarOpened.value);
}
</script>
