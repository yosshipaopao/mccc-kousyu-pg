<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'type_others';
	export const name: string = 'Others';

	const code_bool = `bool y = true;
bool n = false;`;
    const code_bool_to_int = `int ans = int(true); // 1`
	const code_string = `string h = 'Hello world!';`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 Others
        p.text-warning 数値を扱う型。
        .full.grid.grid-cols-2.gap-4
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_bool}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p 真偽(True または false)を表す
                CodeBlock(code="{code_bool_to_int}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                p 
                    code int
                    | 型に変換すると
                    code true
                    | が
                    code 1
                    | に
                    code false
                    | が
                    code 0
                    | になる。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_string}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                p 文字列を表す型。
</template>
