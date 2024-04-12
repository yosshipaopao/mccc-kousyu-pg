<script lang="ts" context="module">
	export const id: string = 'lib_include';
	export const name: string = '読み込み';

</script>
<script lang="ts">    
	import { CodeBlock } from 'svhighlight';
    const code = `#include <ライブラリ名.h>`;
</script>

<template lang="pug">
	.full.flex-center-col
        h2 読み込み
        .spacer
        p コードの先頭で
            CodeBlock(code="{code}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        .spacer
        img.object-cover(class="max-h-30 w-auto",src="/assets/lib/install.png",alt="")
</template>
