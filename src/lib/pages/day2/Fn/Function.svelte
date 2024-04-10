<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'fu_function';
	export const name: string = '関数';

	const code_fn = `
// 返り値がint
int add(int a, int b) {
    return a + b; // return で返り値を返す
}
// 何も返さない
void say_hello() {
    Serial.println("Hello, World!");
}

int result = add(1, 2);
Serial.println(result); // 3
say_hello(); // Hello, World!
`;
</script>

<template lang="pug">
.full.p-4.flex.flex-col
    h2 関数
    .full
        CodeBlock(code="{code_fn}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        p 複数の処理をまとめて、再利用できるようにする
</template>
