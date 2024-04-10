<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'loop_for';
	export const name: string = 'For文';

	const code_for = `
do_something(0);
do_something(1);
do_something(2);
do_something(3);
do_something(4);
// ↑これが
// ↓これになる
for (int i = 0; i < 5; i++) {
    // 5回繰り返す
    do_something(i);
}
`;

    const code_rep = `
// 先頭に rep マクロを定義
#define rep(i, n) for (int i = 0; i < (int)(n); i++)

rep(i, 5) {
    // 5回繰り返す
    do_something(i);
}
`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 For
        .full.grid.grid-cols-2.gap-4
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_for}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p for文を使うと、同じ処理を繰り返すことができる。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_rep}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
                .spacer
                p マクロを定義すると、for文を簡潔に書くことができる。
</template>