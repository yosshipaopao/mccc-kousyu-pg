<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'if_if';
	export const name: string = 'If';

	const code_if = `
/* センサーに反応がないとき back , あるとき foward するプログラム */
int sensor = 1; // 反応あり
if (sensor == 1) // もし反応があるなら
{
    // ここのコードが実行される。
    // ここに反応アリのコード
    back();
} 
else // 違うとき
{ 
// else if (/* 条件式*/) 違うときもし、、、と続けられる
// その前のものが実行されたらそのあとは必ず実行されない
    // ここに反応なしのコード
    foward();    
}
`
</script>

<template lang="pug">
.full.p-4.flex.flex-col
    h2 If
    .full
        CodeBlock(code="{code_if}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        p 条件式を入れてあてはまる、あてはまらないで実行するコードを変えることができる。
</template>
