/*
  3.1 숫자
  다른 프로그래밍 언어들과 다르게 자바스크립트는 정수 값과 실수 값을 구분하지 않는다.
  자바스크립트에서는 모든 숫자를 실수로 표현한다.
  자바스크립트는 숫자를 IEEE 754 표준에서 정의한 64비트 실수 형태로 표현한다. 따라서 가장 큰 숫자로 ㅁㅁㅁ까지 표현할 수 있고 작게는 ㅁㅁㅁ 만큼 표현할 수 있다.
  자바스크립트는 ㅁㅁㅁ와 ㅁㅁㅁ사이의 정수 값을 정활하게 표현할 수 있다. 이보다 더 큰 정수 값을 사용한다면 낮은 자리에 대한 정밀도를 잃을 수도 있다. 하지만 자바스크립트는 배열 인덱싱이나 비트연산과 같은 특정한 연산은 32비트 정수로 수행한다.
  프로그램 안에서 있는 그대로 등장하는 숫자를 숫자 리터럴(numeric literal)이라고 한다.
  숫자 리터럴은 첫 번째 숫자 왼편에 뺄샘기호(-)를 사용하는 방법으로 음수를 표현할 수 있다. 하지만 기술적으로 - 는 단항부정연산자 이지 숫자 리터럴이 일부는 아니다.

  3.1.1 정수 리터럴
  자바스크립트에서 10진수 정수는 숫자를 일렬로 나열한 것이다.
  예)
   0
   3
   10000000

  자바스크립트는 10진수 리터럴 이외에도 16진수 값을 인식한다.
  16진수 리터럴은 '0x' 나 '0X' 뒤에 16진수 숫자들이 뒤따르는 형태다.
  16진수 숫자는 0에서 9까지의 문자와 10부터 15까지를 표현하는 a(혹은 A) 부터 f(혹은 F)까지의 문자 중 하나다.
  예)
   0xff // 15*16 + 15 = 255
   0xaaa // 10*16*16 + 10*16 + 10 = 2730

  일부 자바스크립트 구현체에서는 정수 리터럴을 8진수로도 표현할 수 있다. 하지만 ECMAScript 표준에서 8진수 표현을 지원하지 않는다. 8진수 리터럴은 숫자 0뒤에 0부터 7사이의 숫자 시퀀스가 뒤따르는 형태다.
  예)
   0377 // 3*64 + 7*8 + 7 = 255
  자바스크립트 구현체에 따라 8진수 리터럴을 지원할 수 있고 하지 않을 수도 있기 때문에 0으로 시작하는 정수 리터럴은 절대로 사용하지 말아야한다.
  이 경우, 리터럴이 8진수인지 10진수인지 사용자가 판단하기 힘들기 떄문이다.
  ECMAScript5의 엄격모드 (Strict Mode)에서는 8진수 리터럴을 명시적으로 금지하고 있다.


  3.1.2 부동소수점 리터럴
  부동소수점(floating-point) 리터럴은 소수점을 가질 수 있다. 부동 소수점 리터럴은 실수를 표현하는 전통적인 문법을 따른다. 실수는 정수 부분과 소수점, 소수점 이하 부분으로 표현한다.
  부동소수점 리터럴은 지수 표기법으로도 표현할 수 있다. 실수에 이어 문자 e(혹은 E)가 따라나오고, 그 뒤에 선택적으로 덧셈 혹은 뺄셈 기호가 나타나고 마지막으로 정수 지수 값이 따라온다. 지수 표기법으로 표현한 값은 실수에 10을 지수 횟수만큼 곱한 값을 나타낸다.
  예)
   3.14
   2345.789
   .333333333333333333 // 0.333333333333333333
   6.02e23 // 6.02e+23  6.02 x 10^23(10의 23승)
   1.4738223E-32 // 1.4738223e-32  1.4738223 x 10^-32(10의 -32승)


   3.1.3 산술 연산
   자바스크립트에서는 언어에서 제공하는 산술 연산자를 사용하여 숫자를 다룬다.
    - 덧셈 +
    - 뺄셈 -
    - 곱셈 *
    - 나눗셈 /
    - 나눗셈 연산을 한 후 나머지 %

   자바스크립트는 기본적인 산술 연산뿐 아니라, 더 복잡한 수치 연산을 Math 객체를 통해 지원한다. Math객체에는 수치 연산에 쓰이는 다양한 함수와 상수들이 프로퍼티 형태로 정의되어 있다.
   예)
    Math.pow(2,53); // 9007199254740992 (2의 53승)
    Math.round(.6); // 1 (반올림)
    Math.ceil(.6); // 1 (올림)
    Math.floor(.6); // 0 (내림)
    Math.abs(-5); // 5 (절대값)
    var x = 100;
    var y = 55;
    var z = 60;
    Math.max(x,y,z) // 100 (가장 큰 인자를 반환한다.)
    Math.min(x,y,z) // 55 (가장 작은 인자를 반환한다.)
    Math.random() // 0과 1.0 사이에 임의의 수 x를 반환한다.
    Math.PI // 3.141592653589793 (원주율, 파이)
    Math.E // 2.718281828459045 (자연 로그 상수 e)
    Math.sqrt(3) // 1.7320508075688772 (3의 제곱근)
    Math.pow(3,3) // 27 (3의 세제곱)
    Math.sin(0) // 0 삼각함수(Math.cos, Math.atan 등)
    Math.log(10) // 2.302585092994046 (자연 로그 10)
    Math.log(100)/ Math.LN10 // 2 (밑이 10인 로그 100)
    Math.log(512)/ Math.LN2 // 9 (밑이 2인 로그 512)
    Math.exp(3) // 20.085536923187668 (Math.E의 3 거듭제곱)

    자바스크립트가 지원하는 모든 수리 함수에 대한 자세한 설명은 레퍼런스의 Math부분을 살펴보기! http://www.w3schools.com/jsref/jsref_obj_math.asp

    자바스크립트의 산술 연산은 오버플로와 언더플로, 0으로 나누는 에러를 발생시키지 않는다.
    산술 연산의 결과가 표현할 수 있는 가장 큰 수보다 더 크다면(오버플로), 자바스크립트는 Infinity라고 표현하는 무한대의 값을 출력한다.
    표현 가능한 가장 작은 음수 값보다 더 작은 값은 음의 무한대가 되고 이 값을 -Infinity로 출력한다.
    언더플로(underflow)는 산술 연산의 결과가 표현할 수 있는 가장 작은 값보다 0에 가까울 때 발생한다. 이런 경우에 자바스크립트는 0을 돌려준다.
    만약 언더플로가 음수에서 발생했다면 자바스크립트는 특수 값인 '음의 0'을 반환한다.
    자바스크립트에서 0으로 나누는 연산은 에러가 아니다. 이런 경우에 무한대 또는 음의 무한대가 반환된다. 그런데 여기에는 한 가지 예외가 있다. 0을 0으로 나누는 것은 정의되지 않은 값을 갖고, 그 결과로 숫자가 아닌 특수한 값을 가진다.
    자바스크립트에서는 이러한 값을 NaN으로 출력한다.
    또한 NaN은 무한대를 무한대로 나누는 경우와 음수 값에 루트를 씌우는 경우, 숫자가 아닌 피연산자로 산술 연산을 시도하는 경우에도 발생한다.

    0/0 // NaN
    100/'s' // NaN

    자바스크립트는 양의 무한대와 숫자가 아닌 값을 표현하기 위해 전역 변수 Infinity, NaN을 미리 정의한다. ECMAScript3에서 Infinity와 NaN을 읽기 전용 값으로 정의한다. Number 객체에는 Infinity와 NaN이 따로 상수로 정의되어 있으며,
    이들 상수는 ECMAScript3에서도 읽기 전용이다
    예)
     Infinity // Infinity (읽고 쓰기 가능한 변수로 Infinity로 초기화 된다.)
     Number.POSITIVE_INFINITY // Infinity(Infinity와 같은 값이지만 읽기 전용이다.)
     1/0 // Infinity
     Number.MAX_VALUE // 1.7976931348623157e+308
     Number.MAX_VALUE + 1 // 1.7976931348623157e+308
     Number.NEGATIVE_INFINITY // -Infinity
     -1/0 // -Infinity
     -Number.MAX_VALUE -1 // -1.7976931348623157e+308
     NaN // NaN
     Nuber.NaN // NaN
     0/0 // NaN
     Number.MIN_VALUE/2 // 0 (언더플로)
     -1/Infinity // -0(음의 0)
     -0 // -0

     자바스크립트에서 NaN은 한 가지 독특한 기능을 가지고 있다.
     NaN은 그 자신 뿐만아니라 다른 값과 같은지 비교할 수 없다.
     예)
      var x = 0;
      x === NaN (x)
      x != x (o 이렇게 비교 해야 한다.)
      isNaN(x) // false

      x = 0/0;
      x === NaN // false
      x != x // true
      isNaN(x) // true
*/
