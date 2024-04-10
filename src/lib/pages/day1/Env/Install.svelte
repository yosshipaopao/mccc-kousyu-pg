<script lang="ts" context="module">
	export const id: string = 'env_install';
	export const name: string = 'インストール';
</script>

<template lang="pug">
	.full.flex-center-col
        h2 2.インストール
        .spacer
        p ダウンロードしたファイルを実行してインストール。
        .spacer
        img.object-cover(class="max-h-30 w-auto",src="/assets/env/install.png",alt="")
</template>
