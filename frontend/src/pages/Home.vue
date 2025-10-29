<script setup lang="ts">
import { ref } from 'vue'

import SpinnerIcon from '../assets/SpinnerIcon.vue'
import { analyzeUrl } from '../services/analyzeUrl'

const loading = ref(false)

const urlRef = ref('')

const handleClick = () => {
    loading.value = true

    analyzeUrl(urlRef.value)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => (loading.value = false))
}
</script>

<template>
    <main aria-labelledby="home-title">
        <div
            class="flex flex-col bg-[#C64F01] items-center justify-center w-screen h-screen gap-y-12"
        >
            <h1 id="home-title" class="text-gray-100 font-medium text-4xl">
                Analisador de acessibilidade
            </h1>

            <div class="flex items-center flex-col gap-y-8">
                <div class="flex flex-col gap-y-2 focus-within:">
                    <label for="analyze-url-input" class="text-white font-medium pl-6">
                        Insira a URL
                    </label>
                    <input
                        id="analyze-url-input"
                        type="text"
                        placeholder="Digite uma URL para analisar"
                        aria-labelledby="analyze-url-label"
                        class="bg-white py-3 px-6 rounded-full w-[60vw] focus:outline-4 focus:outline-blue-500/75"
                        fluid
                        v-model="urlRef"
                    />
                </div>

                <button
                    class="text-[#451A05] font-bold bg-[#ffe0a8] border-[#ffe0a8] py-2 px-10 w-auto rounded-full hover:cursor-pointer disabled:bg-gray-400 disabled:text-black disabled:cursor-default"
                    :disabled="urlRef.length === 0 || loading"
                    @click="handleClick"
                >
                    <SpinnerIcon class="w-4 h-4" text-color="#000" v-if="loading" />
                    <span v-else>Analisar</span>
                </button>
            </div>
        </div>
    </main>
</template>
