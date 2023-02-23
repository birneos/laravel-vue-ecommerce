<template>
    <div class="flex justify-center items-center h-full min-h-full min-w-full">
        <div class="flex">
            <div class="text-indigo-600 text-5xl p-8 font-bold border-r pb-8">404</div>
            <div class="px-8">
                <h1 class="text-5xl font-bold mb-2">Page not found</h1>
                <p class="text-gray-600 mb-8">Please check url in address or try again</p>
                <div class="group relative flex">
                    <router-link :to="{name:'app.dashboard'}">
                        <button
                            class="rounded-md mr-4 border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Go back home
                        </button>
                    </router-link>
                    <router-link to="/">
                        <button
                            class="rounded-md  border border-transparent bg-indigo-400 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Contact support
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "notfound"
}
</script>

<style scoped>

</style>
