<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'ex_serial';
	export const name: string = 'シリアル通信';

	const code = `
void setup(){
    Serial.begin(9600);
}
void loop(){
    Serial.println("Hello, World!");
    delay(1000);
}
`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 シリアル通信
        p 1秒ごとに"Hello, World!"とシリアル通信で送信するプログラム。
        .divider
        CodeBlock(code="{code}" language="arduino")
</template>
