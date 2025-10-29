<script setup lang="ts">
import type { AccessibilityReport } from '../adapters/report'

interface ReportProps {
    reportDocument: AccessibilityReport
}

const props = defineProps<ReportProps>()
</script>

<template>
    <div class="flex flex-col flex-1 text-sm bg-gray-100 gap-y-3 py-8 w-screen">
        <section id="report-main-data">
            <h2 id="report-checklist">
                <span class="font-semibold">Título da página: </span>
                {{ props.reportDocument.title ?? 'Título não informado' }}
            </h2>
            <h2 id="report-checklist">
                <span class="font-semibold">URL analisada: </span>
                {{ props.reportDocument.url }}
            </h2>
            <h2 id="report-checklist" v-if="props.reportDocument.language">
                <span class="font-semibold">Linguagem da página: </span>
                {{ props.reportDocument.language }}
            </h2>
            <h2 id="report-checklist">
                <span class="font-semibold">Analisado em: </span>
                {{ new Date(props.reportDocument.createdAt).toString() }}
            </h2>
        </section>

        <hr />

        <section class="flex flex-col gap-y-6" aria-labelledby="report-checklist">
            <h2 class="font-bold">[Relatório]:</h2>
            <div v-for="reportItem in props.reportDocument.report">
                <h3>
                    <span
                        :class="
                            reportItem.situation === 'success'
                                ? 'font-semibold text-green-700'
                                : 'font-semibold text-red-700'
                        "
                    >
                        [{{ reportItem.situation === 'success' ? 'SUCCESS' : 'FAILED' }}]
                    </span>
                    [{{ reportItem.testGroup }} - {{ reportItem.testCase }}] -
                    {{ reportItem.selector ? `<${reportItem.selector}>` : '' }}
                </h3>
                <p class="pl-4" v-for="line in reportItem.description">{{ line }}</p>
            </div>
        </section>
    </div>
</template>
