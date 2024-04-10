<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'prog_basics';
	export const name: string = '基本的な関数';

	const code_delay = `delay(1000);// 1000ms = 1s`;
	const code_delay_micro = `delayMicroseconds(1000);// 1000μs = 1ms`;
	const code_pinMode = `pinMode(13, OUTPUT);`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 基本的な関数
        .full.grid.grid-cols-2.grid-rows-2.gap-2
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_delay}" language="arduino")
                p 指定した時間（ミリ秒）だけ処理を停止する関数。引数は停止する時間。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_delay_micro}" language="arduino")
                p 指定した時間（マイクロ秒）だけ処理を停止する関数。引数は停止する時間。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_pinMode}" language="arduino")
                p ピンのモードを設定する関数。引数はピン番号とモード。
                p モードは
                    code INPUT
                    | か
                    code OUTPUT
                    | か
                    code INPUT_PULLUP
                    | が指定できる。
                p 
                    code setup
                    | 関数内で一度だけ実行する。

</template>
