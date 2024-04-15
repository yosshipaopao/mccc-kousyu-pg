<script lang="ts" context="module">
	export const id: string = 'lib_use';
	export const name: string = '実際に使う';

</script>
<script lang="ts">    
	import { CodeBlock } from 'svhighlight';
</script>

<template lang="pug">
	.full.flex-center-col
        h2 実際に使う
        .spacer
        p 各自のライブラリで使い方を調べて実際に使う。
        .spacer
        img.object-cover(class="max-h-30 w-auto",src="/assets/lib/use.png",alt="")
</template>
