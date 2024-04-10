<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'if_logical_op_1';
	export const name: string = '論理演算子';

	const code_and = `
if (num1 == 1) {
    if (num2 == 2) {
        do_something();
    }
}
// ↑これが
// ↓これになる
if(num1 == 1 && num2 == 2) {
    // num1 が 1 かつ num2 が 2 の場合
    // この中の処理が実行される
    do_something();
}
`;

    const code_or = `
if (num1 == 1) {
    do_something();
}
if (num2 == 2) {
    do_something();
}
// ↑これが
// ↓これになる
if(num1 == 1 || num2 == 2) {
    // num1 が 1 または num2 が 2 の場合
    // この中の処理が実行される
    do_something();
}
`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 論理演算子
        p.text-warning if文を短縮する
        .full.grid.grid-cols-2.gap-4
            .full.bg-base-200.rounded-box.p-2
                h2 and  
                    code "&&"
                CodeBlock(code="{code_and}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p 複数の条件を組み合わせる際に使用する。
            .full.bg-base-200.rounded-box.p-2
                h2 or  
                    code "||"
                CodeBlock(code="{code_or}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p 複数の条件のうち、どれか一つでも条件を満たす場合に使用する。
</template>