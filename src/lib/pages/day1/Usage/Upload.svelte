<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'usage_upload';
	export const name: string = '書き込み';
</script>

<template lang="pug">
    .full.p-4.flex.flex-col
        h2 書き込み
        .spacer
        p プログラムを書いたら
        .spacer 
        CodeBlock(code="ctrl+s" showHeader="{false}" showLineNumbers="{false}")
        p で保存
        .spacer
        p ボードを選択して<code>upload</code>をクリック
        img.object-contain(class="max-h-[30vw]",src="/assets/usage/upload.png", alt="画面の使い方")

</template>
