<template>
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
        <form class="mt-8 space-y-6" @submit.prevent="emit('submit')" method="POST">
        <slot></slot>
        </form>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    })

    const emit = defineEmits(['submit']);
</script>

<style scoped>

</style>
