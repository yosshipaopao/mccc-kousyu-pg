<script lang="ts" context="module">
	export const id: string = 'lib_install';
	export const name: string = 'インストール';
</script>

<template lang="pug">
	.full.flex-center-col
        h2 ライブラリのインストール
        .spacer
        p ライブラリマネージャーから必要なライブラリをインストールします。
        .spacer
        img.object-cover(class="max-h-30 w-auto",src="/assets/lib/install.png",alt="")
</template>
