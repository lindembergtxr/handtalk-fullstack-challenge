<script setup lang="ts">
import { ref } from 'vue'

import SpinnerIcon from '../assets/SpinnerIcon.vue'
import { analyzeUrl } from '../services/analyzeUrl'
import type { AccessibilityReport } from '../adapters/report'
import ReportViewer from '../components/ReportViewer.vue'

const loading = ref(false)
const urlRef = ref('')
const success = ref(false)
const response = ref<AccessibilityReport | null>(null)
const error = ref<unknown | null>(null)

const handleClick = async () => {
    loading.value = true
    response.value = null
    error.value = null

    try {
        const res = await analyzeUrl(urlRef.value)

        if (res.success) response.value = res.data
        else error.value = res.error

        success.value = res.success
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <main aria-labelledby="home-title" class="flex flex-col min-h-screen">
        <div class="flex flex-col bg-[#C64F01] items-center w-screen py-10 gap-y-12">
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

        <div
            class="flex bg-gray-100 w-full overflow-hidden px-20 flex-1"
            v-if="!!response || !!error"
        >
            <report-viewer v-if="success && response" :report-document="response" />

            <div class="flex flex-col py-6" v-if="!success && error">
                <h3>
                    <span class="font-semibold">[Request falhou]</span>
                </h3>

                <h3>
                    <span class="font-semibold">Status:</span>
                    {{ (error as any)?.status ?? 500 }}
                </h3>

                <div class="flex gap-2">
                    <h4 class="font-semibold">Mensagem:</h4>
                    <p>{{ (error as any).message?.message ?? '' }}</p>
                </div>
                <div class="flex gap-2" v-if="(error as any).message?.error?.details ?? ''">
                    <h4 class="font-semibold">Detalhes::</h4>
                    <p>{{ (error as any).message?.error?.details ?? '' }}</p>
                </div>
            </div>
        </div>
    </main>
</template>
