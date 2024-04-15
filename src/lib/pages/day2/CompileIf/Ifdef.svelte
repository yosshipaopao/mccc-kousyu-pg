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
}`;
    const code_debug=`
void setup() {
    Serial.begin(9600);
    Serial.println("DEBUG MODE");
}`;
    const code_release=`
void setup() {
    Serial.begin(9600);
    Serial.println("RELEASE MODE");
}
`;
</script>

<template lang="pug">
	.full.p-4
        h2 Ifdef
        p 本番だと必要だけどテストするうえで時間短縮やバグ発見のために不要なコードを削除したいときに使う
        .spacer
        .grid.grid-cols-2.gap-2
            CodeBlock(code="{code}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
            div
                p DEBUGだと、
                CodeBlock(code="{code_debug}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                p RELEASEだと、(
                    code #define DEBUG
                    | をコメントアウトすると)
                CodeBlock(code="{code_release}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                p にコンパイルされる
</template>
