<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'if_logical_op_2';
	export const name: string = '論理演算子';

	const code_not = `
if (num1 == 1) {

}else{
    do_something();
}
// ↑これが
// ↓これになる
if(!(num1 == 1)) { // または if(num1 != 1) {
    // num1 が 1 でない場合
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
                h2 not  
                    code "!"
                CodeBlock(code="{code_not}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p 条件を満たさない場合に使用する。
</template>