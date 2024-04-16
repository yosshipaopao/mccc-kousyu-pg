<script lang="ts" context="module">
	export const id: string = 'ex_led2';
	export const name: string = 'LEDちかちか';

</script>
<script lang="ts">    
	import { CodeBlock } from 'svhighlight';
    
    const code=`
void setup() {
  pinMode(LED_BUILTIN,OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN,HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN,LOW);
  delay(1000);
}
`;
  const fucking_code = `
// これは何もかもが完璧なコード 
void setup(){
  pinMode(3<<2|1,~0);
}
bool _;
void loop() {
  digitalWrite(0xF^1<<1,_=!_);
  delay(1<<10);
}`;
  const code_analog = `
void setup() {
  pinMode(13,OUTPUT);
}

int val=0;
void loop() {
  analogWrite(13,val);
  val++;
  val%=255;
  delay(10);
}`;
</script>

<template lang="pug">
	.full.p-4
        h2 えるちか
        CodeBlock(code="{code}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
        .spacer
        CodeBlock(code="{code_analog}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
</template>
