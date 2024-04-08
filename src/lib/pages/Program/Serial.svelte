<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'prog_serial';
	export const name: string = 'Serial';

	const code_serial_begin = `Serial.begin(9600);`;
	const code_serial_write = `Serial.write("Hello, world!\\n");`;
	const code_swrial_write_int = `Serial.write(121);// y`;
	const code_serial_print = `Serial.print("Hello, world!\\n");`;
	const code_serial_print_int = `Serial.print(121);// 121`;
	const code_serial_println = `Serial.println("Hello, world!");`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 Serial
        p プログラムの変数や処理の状態をシリアルモニタに表示するための関数群。
        .full.grid.grid-cols-2.grid-rows-2.gap-4
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_serial_begin}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                .spacer
                p シリアル通信を開始する関数。引数は通信速度（ボーレート）。
                p 基本的には9600bps（ビット/秒）を指定する。
                p 
                    code setup
                    | 関数内で一度だけ実行する。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_serial_write}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                p シリアルモニタに文字列を表示する関数。引数は表示する文字列。
                p
                    | 改行は自動で行われないので、改行する場合は改行コード（
                    code \n
                    | ）を追加する。
                CodeBlock(code="{code_swrial_write_int}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                p 数値を引数に入れても、そのまま表示されないので注意。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_serial_print}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                p シリアルモニタに値を表示する関数。引数は表示する値。
                CodeBlock(code="{code_serial_print_int}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                p 数値を引数に入れると、そのまま表示される。
            .full.bg-base-200.rounded-box.p-2
                CodeBlock(code="{code_serial_println}" language="arduino" headerClasses="h-[3vw] p-1 bg-base-300")
                p シリアルモニタに文字列を表示する関数。引数は表示する文字列。
                p 
                    |基本的には
                    code Serial.print
                    | と同じだが、自動で改行を行う。
</template>
