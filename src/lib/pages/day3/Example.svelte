<script lang="ts" context="module">
	export const id: string = 'sample';
	export const name: string = 'サンプルコード';
</script>
<script lang="ts">
    import { CodeBlock } from 'svhighlight';
    const code = `
    // サーボモーターを動かすためのライブラリ
#include <Servo.h>

// マクロ
#define rep(i, n) for (int i = 0; i < (int)(n); i++)

//// ピン番号の設定
// 左モーター
const int LEFT_1 = 4;
const int LEFT_2 = 2;
const int LEFT_A = 15;
// 右モーター
const int RIGHT_1 = 16;
const int RIGHT_2 = 17;
const int RIGHT_A = 5;
// サーボモーター
const int DecorationLPIN = 19;
const int DecorationRPIN = 18;
// センサー
#define PIN_SIZE 4
#define PINS {32,35,34,39}

//// 微調整ようの変数
// 通常走行の速度
const int RUN_SP=66;
// ゆっくり曲がるときの速度
const int HALF_STOP_SP=40;
// 強く曲がるときの速度
const int STOP_SP=25;


// set 関数で値を読み取ります
// data[i]  で直接値(int)を取得できます。 
// get(i)で黒色かどうか(bool)を取得できます。
class Sensor{
  private:
    // センサーのpin番号
    int pins[PIN_SIZE] = PINS;
    // pinの判断基準
    int base = 2000;
  public:
    // 読み込んだデータの一時保存場所
    int data[PIN_SIZE];
    // setup
    void setup(){
      rep(i,sizeof(pins)){
        pinMode(pins[i],INPUT);
      }
    };
    //　値を読んで一時保存場所にセット
    void set(){      
      rep(i,sizeof(pins))data[i]=analogRead(pins[i]);
    }
    // 値の取得(基準を超えてるかチェック)
    bool get(int i){
      return data[i] > base;
    };
    // Serialで値（上位二けたを表示)
    void debug(){
      rep(i,sizeof(pins)){
        Serial.print(data[i]/100);
        Serial.write(" ");
      }
      Serial.println();
    };
};

// speed は -255 ~ 255で設定できます。
// straight(speed) で直進（または後退）
// turn(left_speed,right_speed) で回転
class Motor{
  private:
    // 左のモーター用の制御
    void leftMotor(int speed) {  // -255 ~ 255
      if (speed > 0) {
        // speedだけ進めるコード
        // モータードライバによって操作方法が違うので注意
        digitalWrite(LEFT_1, HIGH);
        digitalWrite(LEFT_2, LOW);
        analogWrite(LEFT_A, speed);
      } else {
        digitalWrite(LEFT_1, LOW);
        digitalWrite(LEFT_2, HIGH);
        analogWrite(LEFT_A, speed * -1);
      }
    };
    // 右のモーター用の制御
    void rightMotor(int speed) {
      if (speed > 0) {
        digitalWrite(RIGHT_1, HIGH);
        digitalWrite(RIGHT_2, LOW);
        analogWrite(RIGHT_A, speed);
      } else {
        digitalWrite(RIGHT_1, LOW);
        digitalWrite(RIGHT_2, HIGH);
        analogWrite(RIGHT_A, speed * -1);
      }
    };
  public:
    // setup
    void setup(){
      // left
      pinMode(LEFT_A, OUTPUT);
      pinMode(LEFT_1, OUTPUT);
      pinMode(LEFT_2, OUTPUT);
      // right
      pinMode(RIGHT_A, OUTPUT);
      pinMode(RIGHT_1, OUTPUT);
      pinMode(RIGHT_2, OUTPUT);
    };
    void straight(int speed) {
      leftMotor(speed);
      rightMotor(speed);
    };
    void turn(int left_speed, int right_speed) {
      leftMotor(left_speed);
      rightMotor(right_speed);
    };
};

// speedは -90 ~ 90
// straight(speed) で直進（または後退）
// turn(left_speed,right_speed) で回転
class Decoration{
  private:
    // ESP32Servo の ラッパー
    Servo DecorationL;
    Servo DecorationR;
  public:
    void setup(){
      DecorationL.attach(DecorationLPIN, 500, 2400);
      DecorationR.attach(DecorationRPIN, 500, 2400);
      DecorationL.write(92);
      DecorationR.write(90);
    };
    // 直進処理
    void straight(int speed) {
      DecorationL.write(-speed+92);
      DecorationR.write(speed+90);
    };
    // 回転(左のモーターと右のモーターの速度をそれぞれ)
    void turn(int left_speed, int right_speed) {
      DecorationL.write(-left_speed+92);
      DecorationR.write(right_speed+90);
    };
};


// クラスを実体化
Motor motor;
Sensor sensor;
Decoration decoration;

// 直進用関数
// spped -100 ~ 100
void straight(int speed){
  motor.straight( speed * 255 / 100 );
  decoration.straight( speed * 70 / 100 );
}
// 回転用、 第一引数でl側、第二引数でr側を設定できます。
// spped -100 ~ 100
void turn(int l_speed,int r_speed){
  motor.turn( l_speed * 255 / 100 , r_speed * 255 / 100 );
  decoration.turn( l_speed * 70 / 100 , r_speed * 70 / 100 );
}

void setup() {
  // main motor
  motor.setup();
  // sensor
  sensor.setup();
  // Decoration
  decoration.setup();
  Serial.begin(9600);
}


// timer(10msごとに1++)
// 0 ~ 18446744073709551615 まで表せる unsigned が負の値がないことを示す
// int は -2147483648 ~ 2147483647 までしか表せない
unsigned long long timer = 0LL;

// 前回どっち側検出したか
// 1で右-1で左
int before = 0;

void loop() {
  sensor.set(); //　センサーの値を読み取ります。
  ////// line trace start
  //// 基本方針は検知されたセンサー側に行けば機体の中心にラインが来る

  // 真ん中二つが同時についたら直進する
  if(sensor.get(1) && sensor.get(2)){
    straight(RUN_SP);
    before=0;
  }
  // 真ん中の右だけだったら少しだけ右に
  else if(sensor.get(2)){
    turn(RUN_SP,HALF_STOP_SP);
    before=0;
  }
  // 真ん中の左だけだったら少しだけ左に
  else if(sensor.get(1)){
    turn(HALF_STOP_SP,RUN_SP);
    before=0;
  }
  // 右端だったら強く右に曲がる
  else if(sensor.get(3)){
    turn(RUN_SP,STOP_SP);
    before=1;
  }
  // 左端だったら強く左に曲がる
  else if(sensor.get(0)) {
    turn(STOP_SP,RUN_SP);
    before=-1;
  }
  // 4つが検出されてないとき
  else{    
    // 前回と同じ動きをする
    if(before>0){
      turn(RUN_SP,STOP_SP);
    }else if(before<0){
      turn(STOP_SP,RUN_SP);
    }else{
      // どっちでもないときは直進
      straight(50);
    }
  }
  ///// line trace end
  timer+=1;
  delay(10);
}
`
</script>

<template lang="pug">
	.full.p-4.overflow-y-auto
        h1 サンプルコード
        CodeBlock(code="{code}" language="arduino" headerClasses="h-4 p-1 bg-base-300")
</template>
