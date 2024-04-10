<script lang="ts" context="module">
	export const id: string = 'env_download';
	export const name: string = 'ダウンロード';
</script>

<template lang="pug">
	.full.flex-center-col
		h2 1.ダウンロード
		.spacer
		p
			a.link.link-primary(href="https://www.arduino.cc/en/software",target="_blank") Arduino公式
			| からインストーラーをダウンロード
		.spacer
		.flex.flex-row.gap-4
			img.object-cover(class="max-h-25 w-auto",src="/assets/env/download_1.png",alt="")
			img.object-cover(class="max-h-25 w-auto",src="/assets/env/download_2.png",alt="")
</template>
