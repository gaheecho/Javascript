/*
  프로그래밍 언어의 기본적인 특징
  1. 그 언어가 지원하는 데이터 타입의 종류
      데이터 타입 : 프로그래밍 언어로 다룰 수 있는 값의 유형
  2. 변수의 작동 방식
      프로그램은 값이 유지될 필요가 있을 때, 변수에 값을 할당한다. 변수명은 그 값의 이름이므로, 그 이름을 통하면 값을 참조할 수 있다.

  자바스크립트의 타입
    * 원시 타입
      - 숫자
      - 텍스트의 나열(문자열, string)
      - 불리언 진리 값(불리언, boolean)

    * null과 undefined는 원시값이긴 하지만, 숫자도 아니고, 문자열이나 불리언도 아니다. 자바스크립트에서 null 과 undefined는 자기 자신만을 값으로 갖는 독립적인 타입에 속한다.

    * 객체 타입

      - 숫자와 문자열, 불리언, null, undefined 외의 값은 객체다. (객체는 이름과 값을 갖는 프로퍼티의 집합이다. 여기서 값은 숫자나 문자열 같은 기본 데이터 타입 값이 될 수도 있고 객체가 될 수도 있다.)

      - 일반적인 자바스크립트 객체는 순서가 없는 값들의 집합이며, 각 값에는 이름이 지정되어 있다.

      - 배열이라는 특별한 종류의 객체도 있다. 배열은 순서가 있는 값들의 집합이며, 각 값에는 번호(index)가 부여된다. 배열은 일반적인 객체와는 다르게 동작한다.

      - 함수라는 특별한 객체도 갖고 있다. 함수는 실행코드를 가지고 있는 객체로서, 함수를 호출하면 코드가 수향되고 계산된 값이 반환된다. 배열과 마찬가지로 함수는 일반 객체와 다르게 동작한다. 그리고 자바스크립트는 함수를 실행하기 위한 특별한 문법을 가지고 있다.
        함수에 대해 알아야 할 가장 중요한 점은 함수는 값이고, 자바스크립트 프로그램은 함수를 보통 객체처럼 다룰 수 있다는 점이다.

      - 함수 중에는 새로 생성된 객체를 (new 연산자를 이용하여) 초기화 하기 위해 사용되는 함수가 있는데, 이를 생성자(constructor) 함수라고 한다. 생성자는 객체들의 클래스를 정의한다. 여기서 객체는 생성자로 초기화되는 대상을 말한다. 여기서 객체는 생성자로 초기화되는 대상을 말한다.

      - 클래스는 객체 타입의 하위 타입(subtype)으로 생각할 수 있다.
        코어 자바스크립트에서는 Array 와 Function 클래스뿐만 아니라 세 개의 다른 유용한 클래스들을 정의하고 있다.
        Date 클래스는 날짜를 표현하는 객체를 정의
        RefExp 클래스는 정규 표현식을 표현하는 객체를 정의
        Error 클래스는 자바스크립트 프로그램에서 발생할 수 있는 문법과 런타임 에러를 표현하는 객체를 정의
        적절한 생성자 함수를 이용하여 자신만의 클래스를 정의할 수도 있다.

      - 자바스크립트 인터프리터는 메모리 관리를 위해 자동으로 가비지 컬렉션(garbage collection)을 수행한다. 프로그램이 필요할 때 객체를 생성할 수 있고, 프로그래머는 이 객체를 어떻게 해제할지 걱정할 필요가 없다.
        객체에 더 이상 접근할 수 없을 때(프로그램이 더 이상 객체를 참조하지 않을 때) 인터프리터는 그 객체가 다시 사용되지 않을 거라 판단하고 자동으로 메모리에서 해제한다.

      - 자바스크립트는 객체지향 언어다. 넓은 의미에서 이는, 다양한 타입의 값을 다루는 전역 함수를 정의해두기보다, 어떠너 값과 작동하는 메서드를 그 값의 탕ㅂ에 정의해둔다는 말이다.
        예) 배열의 원소들을 정렬할 때는 배열 a를 sort함수에 인자로 전달하지 않고 a의 sort() 메서드를 호출하여 정렬한다.
        var a = [1, 2, 3];
        sort(a); // x
        a.sort(); // o

      - 자바스크립트 객체만이 메서드를 소유한다.
        하지만 숫자, 문자열, 불리언 값은 메서드를 가진 것처럼 동작한다.
        null과 undefined는 자바스크립트에서 유일하게 메서드를 가질 수 없는 값이다.

    * 자바스크립트 타입
      - 원시타입
      - 객체타입

      or

      - 메서드를 가진 타입
      - 메서드를 갖지 않은 타입

      or

      - 수정 가능한(mutable)타입 : 값을 바꿀 수 있다. 객체와 배열은 수정가능하기 때문에 객체 프로퍼티와 배열 원소의 값을 변경할 수 있다.
      - 수정할 수 없는(immutable) 타입 : 숫자, 불리언, null, undefined는 수정할 수 없는 타입이다.
        숫자는 그 자체로 값이므로 변경한다는 것 자체가 말이 안된다.
        문자열은 문자들의 배열이니 변경가능한 타입이라고 생각할지도 모르겠지만 자바스크립트에서 문자열은 수정할 수 없는 타입이다. 문자열의 인덱스를 이용하여 문자에 접근할 수는 있지만 자바스크립트의 문자열의 문자를 바꾸는 어떤 방법도 제공하지 않는다.
        예) 1 = 2; // x
          "s" = "p"; // x
          null = 0; // x
          undefined = 0; // 에러가 나지는 않았지만
          console.log(undefined); // 그대로 undefined로 출력

    * 자바스크립트의 값은 타입 변환이 자유롭다
      예)
       프로그램이 문자열을 인자로 받아 처리하는데 숫자를 인자로 넘겼다면 숫자를 자동으로 문자열로 변경한다.
       불리언 값을 다루는 곳에 불리언 값이 아닌 값을 사용한다면 자바스크립트는 적절하게 불리언 값으로 변경한다.

    * 자바스크립트 변수들은 타입이 정해져 있지않다.
      var 키워드로 선언한 변수에 어떤 타입의 값도 선언할 수 있다.
      예)
       var testString = 'string';
       var testNumber = 10;
       var testObject = {x: 1, y:1};
       var testFunction = function(){
        console.log('hello world!');
       }

    * 자바스크립트는 어휘 유효범위(scope)를 사용한다.
      함수 밖에서 선언된 변수들은 전역 변수고 자바스크립트 프로그램 어디서든 사용할 수 있다. 함수 안에 선언된 변수들은 유효범위가 함수 영역이며, 오직 함수 안에서만 사용할 수 있다.
      예)
       var global = '123';
       function testLocalVariable() {
       var local = '456';
       console.log(global + ',' + local);
       }
       testLocalVariable(); // 123,456
       console.log(local); // undefined

*/
