<script lang="ts" context="module">
	import { CodeBlock } from 'svhighlight';
	export const id: string = 'prog_digital';
	export const name: string = 'Digital I/O';

	const code_digital_read = `digitalRead(PIN);`;
	const code_digital_write = `digitalWrite(PIN, HIGH);`;
</script>

<template lang="pug">
	.full.p-4.flex.flex-col
        h2 Digital I/O
        .full.grid.grid-cols-2.gap-4
            .full
                CodeBlock(code="{code_digital_read}" language="arduino")
                .spacer
                p デジタルピンの状態を読み取る関数。
                p 
                    | ピンの状態を読み取り、
                    code HIGH
                    | または
                    code LOW
                    | を返す。
                p 
                    code HIGH
                    | は、電流が流れている状態を示し、
                    code LOW
                    | は、電流が流れていない状態を示す。
                p 
                    | ピンの状態を読み取るには、
                    code INPUT
                    | モードにピンを設定する必要がある。
            .full
                CodeBlock(code="{code_digital_write}" language="arduino")
                .spacer
                p デジタルピンの状態を設定する関数。
                p 
                    | ピンの状態を設定するには、
                    code OUTPUT
                    | モードにピンを設定する必要がある。
                p
                    | ピンの状態は、
                    code HIGH
                    | または
                    code LOW
                    | を指定する。
</template>
