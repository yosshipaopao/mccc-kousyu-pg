<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'prog_template';
	export const name: string = 'テンプレート';

	const code_setup = `
void setup() {
    // put your setup code here, to run once:
}`;
	const code_loop = `
void loop() {
    // put your main code here, to run repeatedly:
}`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 テンプレート
        .full.grid.grid-cols-2.gap-4
            .full
                CodeBlock(code="{code_setup}" language="arduino")
                .spacer
                p セットアップ関数。プログラムの開始時に一度だけ実行される。
            .full
                CodeBlock(code="{code_loop}" language="arduino")
                .spacer
                p メインループ関数。セットアップ関数の後に繰り返し実行される。
                p この関数が終了すると、再度loop関数が呼び出される。
                p この関数が終了するまで、次のloop関数は呼び出されない。
</template>
