<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'type_num';
	export const name: string = 'Number';

	const code_int = `int n = 10;`
	const code_float = `float m = 3.14;`
</script>

<!--language=Pug-->
<template lang="pug">
	.full.p-4.flex.flex-col
		h2 Number
		p.text-warning 数値を扱う型。
		.full.grid.grid-cols-2.gap-4
			.full.bg-base-200.rounded-box.p-2
				CodeBlock(code="{code_int}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
				.spacer
				p 整数(厳密には
					code -2147483648~2147483647
					| )を表す型
				p 少数は含まれない
				p 基本的にはint で十分(いいえ)
			.full.bg-base-200.rounded-box.p-2
				CodeBlock(code="{code_float}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
				p 少数(厳密には浮動小数点数)を表す型。
</template>
