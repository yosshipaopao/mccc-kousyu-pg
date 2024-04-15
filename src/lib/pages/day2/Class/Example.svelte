<script lang="ts" context="module">
	export const id: string = 'class_example';
	export const name: string = '例';

</script>
<script lang="ts">    
	import { CodeBlock } from 'svhighlight';
    
    const code_class=`
class Sensor{
  private:
    int pinsize = 6; // pinの数
    int pins[6] = {33,32,35,34,39,36}; // pin番号
    int bases = 2000; // pinの判断基準
  public:
    int data[6]; // 読み込んだデータの一時保存場所
    void setup(){
      for(int i=0; i < pinsize; i++)pinMode(pins[i],ANALOG);
    };
    // 値を読んで一時保存場所にセット
    void set(){      
      for(int i=0;i<pinsize;i++)data[i]=analogRead(pins[i]);
    }
    // 値の取得(基準を超えてるかチェック)
    bool get(int i){
      return data[i] > bases;
    };
    // Serialで値（上位二けたを表示)
    void debug(){
      for(int i=0; i < pinsize; i++){
        Serial.print(data[i]/100);
        Serial.print(" ");
      }
      Serial.println();
    };
};`;

const code_class_usage = `
// 使い方
Sensor sensor;
void setup() {
  Serial.begin(9600);
  sensor.setup();
}
void loop() {
  sensor.set();// 値を読み込む
  sensor.debug();// 上位二けたを表示
  delay(1000);  
}
`;
</script>

<template lang="pug">
	.full.p-4
        h2 コードから感じろ(こういうのもあるよっていう紹介)
        .grid.grid-cols-2.gap-2
            CodeBlock(code="{code_class}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
            CodeBlock(code="{code_class_usage}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
</template>
