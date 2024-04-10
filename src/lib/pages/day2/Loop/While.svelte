<script lang="ts" context="module">
	import While from './While.svelte';
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'loop_while';
	export const name: string = 'While文';

	const code_while = `
// is_primeがtrueの場合 i を2倍、
// falseの場合 i に1を足す
// iが100未満の間繰り返す

int i = 1;
// 無限に繰り返したいきもち
rep(_,1000000000000000){
    if(i < 10000){
        if(is_prime(i)) i*=2;
        else i+=1;
    }
}
// ↑これが
// ↓これになる
int i = 1;
while(i < 10000){
    if(is_prime(i)) i*=2;
    else i+=1;
}
`;

        const code_break = `
while(true){ // 無限ループ
    if(sensor.read() > 100){
        break; // ループを抜ける
    }
}

`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 While
        .full.grid.grid-cols-2.gap-4
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_while}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                p while文を使うと、同じ処理を回数を指定することなく繰り返すことができる。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_break}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p break文を使うと、ループを抜けることができる。
</template>