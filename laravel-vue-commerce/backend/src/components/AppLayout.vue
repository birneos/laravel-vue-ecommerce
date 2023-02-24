<template>
    <div v-if="currentUser.id"  class="min-h-full flex bg-gray-100">
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
    <div v-else class="min-h-full bg-gray-100 flex justify-center items-center">
        <div class="flex flex-col items-center">
            <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                        stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="mt-2">Loading...</span>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue"
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store/index.js";

const sidebarOpened = ref(true);
const currentUser = computed(()=> store.state.user.data);

function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
    console.log(sidebarOpened.value);
}

onMounted(()=>{
    store.dispatch('getUser').then();
    handlerSidebar();
    window.addEventListener('resize',handlerSidebar);
})

onUnmounted(()=>{
    handlerSidebar();
    window.removeEventListener('resize',handlerSidebar);
})
function handlerSidebar(){
    sidebarOpened.value = window.outerWidth > 768;

}
</script>
