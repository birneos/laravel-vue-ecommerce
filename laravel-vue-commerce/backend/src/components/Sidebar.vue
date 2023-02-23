<template>
    <div style="display: block" class="w-[200px] transition- bg-indigo-700 rounded-l-xl text-white py-4 px-5">
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center rounded transition-colors p-2 hover:bg-black/30 font-light">
            <span class="mr-2 text-gray-300">
            <HomeIcon class="h-5 w-5"></HomeIcon>
            </span>
            <span class="text-xs">Dashboard</span>
        </router-link>

        <router-link :to="{name: 'app.products'}" class="flex items-center rounded transition-colors p-2 hover:bg-black/30 font-light">
            <span class="mr-2 text-gray-300">
            <ViewColumnsIcon class="h-5 w-5"></ViewColumnsIcon>
            </span>
            <span class="text-xs">Products</span>
        </router-link>

        <router-link :to="{name: 'app.dashboard'}" class="flex items-center rounded transition-colors p-2 hover:bg-black/30 font-light">
            <span class="mr-2 text-gray-300">
            <UsersIcon class="h-5 w-5"></UsersIcon>
            </span>
            <span class="text-xs">Users</span>
        </router-link>

        <router-link :to="{name: 'app.dashboard'}" class="flex items-center rounded transition-colors p-2 hover:bg-black/30 font-light">
            <span class="mr-2 text-gray-300">
            <ChartBarIcon class="h-5 w-5"></ChartBarIcon>
            </span>
            <span class="text-xs">Report</span>
        </router-link>
    </div>





</template>
text-gray-300
<script setup>


    const props = defineProps({
        title: String
    })
    import { LockClosedIcon, HomeIcon,UsersIcon,ViewColumnsIcon,ChartBarIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>
