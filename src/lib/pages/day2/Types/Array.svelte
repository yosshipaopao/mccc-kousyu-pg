<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'type_array';
	export const name: string = 'Array';

	const code_array_int = `int n[3] = {3,2,1};`;
	const code_array_access = `Serial.println(n[0]);//3`;
</script>

<template lang="pug">
.full.p-4.flex.flex-col
    h2 Array
    p.text-warning データの塊を表す型
    .full
        CodeBlock(code="{code_array_int}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        p
            code int
            | や
            code float
            | 、
            code char
            | などのデータをひとまとまりに表す型。
        CodeBlock(code="{code_array_access}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        p
            code n[0]
            | のようにするとアクセスできる。
        p indexは0から始まる。
</template>
