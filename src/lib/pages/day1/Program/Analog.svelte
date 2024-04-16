<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'prog_analog';
	export const name: string = 'Analog I/O';

	const code_analog_read = `analogRead(PIN);`;
	const code_analog_write = `analogWrite(PIN, VALUE);`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 Analog I/O
        p.text-warning アナログ入出力は、対応しているピンのみで使用できる。
        .full.grid.grid-cols-2.gap-4
            .full
                CodeBlock(code="{code_analog_read}" language="arduino")
                .spacer
                p アナログピンの状態を読み取る関数。
                p 
                    | ピンの状態を読み取り、
                    code 0
                    | から
                    code.text-error 1023
                    | (または
                    code 4095
                    | )の範囲で返す。
                p 電圧を読み取る場合、
                    code 0
                    | は
                    code 0V
                    | 、
                    code 1023
                    | は
                    code 5V
                    | に対応する。
                p 
                    | アナログピンの状態を読み取るには、
                    code INPUT
                    | モードにピンを設定する必要がある。
            .full
                CodeBlock(code="{code_analog_write}" language="arduino")
                .spacer
                p アナログピンに電圧を出力する関数。
                p 
                    | ピンに出力される電圧は、
                    code 0
                    | から
                    code.text-error 254
                    | の範囲で指定する。
                p
                    | 出力される電圧は、
                    code 0
                    | が
                    code 0V
                    | 、
                    code 255
                    | が
                    code 5V
                    | に対応する。
                p
                    | アナログピンに電圧を出力するには、
                    code OUTPUT
                    | モードにピンを設定する必要がある。
</template>
