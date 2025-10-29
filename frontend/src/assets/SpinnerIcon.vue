<template>
    <div class="spinner-container">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle
                class="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                :stroke="textColor"
                stroke-width="5"
            ></circle>
        </svg>
    </div>
</template>

<script>
export default {
    props: ['textColor'],
}
</script>

<style scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
}

.spinner {
    animation: rotate 2s linear infinite;
    height: 50px;
    width: 50px;
}

.spinner .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}
</style>
