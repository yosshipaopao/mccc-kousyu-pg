<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'if_switch';
	export const name: string = 'Switch';

	const code_switch = `
// num が 1 なら straight、
// num が 2 なら turn_left、
// num が 3 なら turn_right、
// num が 4 なら back するプログラム
int num = 2;
switch (num) {
    case 1: // if(num == 1) { と同じ
        straight();
        break; // break しないと case 2 が実行される可能性がある
    case 2:
        turn_left();
        break;
    case 3:
        trun_right();
        break;
    case 4:
        back();
        break;
    default: // どの case にも当てはまらない場合 (else と同じ)
        stop();
        break;
}
`;
</script>

<template lang="pug">
.full.p-4.flex.flex-col
    h2 Switch
    .full
        CodeBlock(code="{code_switch}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        p 条件式を入れてあてはまる、変数の値によって処理を分岐する
</template>
