<script lang="ts" context="module">
	import Ifdef from './Ifdef.svelte';
	export const id: string = 'compif_ifdef';
	export const name: string = 'Ifdef';

</script>
<script lang="ts">    
	import { CodeBlock } from 'svhighlight';
    
    const code=`
// デバッグの時と本番で出力する内容を変える
#define DEBUG

void setup() {
    Serial.begin(9600);
#ifdef DEBUG
    // debug code
    Serial.println("DEBUG MODE");
#else
    // release code
    Serial.println("RELEASE MODE");
#endif
}
    `;
</script>

<template lang="pug">
	.full.p-4
        h2 Ifdef
        .spacer
        p 本番だと必要だけどテストするうえで時間短縮やバグ発見のために不要なコードを削除したいときに使う
        .spacer
        CodeBlock(code="{code}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
</template>
