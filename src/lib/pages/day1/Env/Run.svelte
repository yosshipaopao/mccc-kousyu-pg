<script lang="ts" context="module">
	export const id: string = 'env_run';
	export const name: string = '実行';
</script>

<template lang="pug">
	.full.flex-center-col
        h2 3.実行
        .spacer
        p 実際に実行できたら成功です。
        .spacer
        img.object-cover(class="max-h-[30vw] w-auto",src="/assets/env/run.png",alt="")
</template>
