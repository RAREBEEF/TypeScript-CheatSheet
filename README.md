# **TypeScript**

> **Typed JavaScript**

기존의 자바스크립트에 타입이라는 개념이 추가된 자바스크립트의 확장 언어이다.  

타입 스크립트는 에러를 사전에 방지해주고 코드의 작성에 편리성을 더해준다.  

하지만 실제로 실행 환경에서 작동되기 위해서는 JS로 컴파일(트랜스파일이라고 부르기도 한다) 하는 과정을 거쳐야 한다.

이 문서에서는 NPM을 통한 설치와 컴파일 방법만 설명한다.

<br/>
<br/>

# **Type Script 설치**

<br/>

## **글로벌 설치**

- `$ npm install typescript -g`

    - `-g` 플래그는 pc 환경 어디서든 접근이 가능하도록 설치하는 것을 의미한다.

<br/>

## **프로젝트에 설치**

1. 터미널에서 프로젝트 경로로 접근한다.

1. `$ npm install typescript -D`



<br/>
<br/>

# **컴파일**

<br/>

## **글로벌로 설치한 경우**

<br/>

### **특정 파일에 대한 컴파일**

특정 파일을 지정하여 컴파일하는 경우를 말한다.

1. 터미널에서 컴파일 할 ts파일 경로로 접근한다.

1. `$ tsc 파일명` 을 통해 ts파일을 js파일로 컴파일한다.

1. 컴파일이 정상적으로 완료되었다면 해당 경로에 같은 이름의 js파일이 생성된다.

<br/>

### **프로젝트 컴파일**
프로젝트 내의 모든 파일에 대해 컴파일하는 경우를 말한다.

1. 터미널에서 컴파일 할 프로젝트 경로로 접근한다.

1. `tsc --init` 으로 프로젝트 경로에 tsconfig.json 파일을 생성한다.  
이 파일은 프로젝트 내 ts 파일에 대한 컴파일 설정이 저장되어 있다.

1. `$ tsc` 으로 프로젝트 내의 모든 ts 파일을 js로 컴파일한다.

<br/>

### **자동 컴파일**

ts파일이 수정될 때 `$ tsc` 입력을 기다리지 않고 자동으로 컴파일하도록 명령할 수 있다.

- `$ tsc -w`

control + c 로 종료할 수 있다.

<br/>
<br/>

## **프로젝트에 설치한 경우**

`$ node_modules/.bin/tsc` 명령으로 컴파일러를 실행할 수 있다.  

`$ npx tsc` 명령도 가능하다. 이 쪽이 더 짧기 때문에 자주 사용된다.

혹은 package.json의 `"script"` 에 명령어 `tsc` 를 추가하여 사용할 수도 있다.

그 외 사용법과 플래그 등은 글로벌과 동일하다.

<br/>

<br/>

<br/>

# **Type Annotation**

<br/>

타입스크립트의 변수는 선언문에서 데이터를 할당 받으면 해당 데이터의 타입만 할당 받을 수 있도록 지정된다.

```ts
let a = "RAREBEEF";

a = 100; 

// Type 'number' is not assignable to type 'string'
```

<br/>

변수의 선언문에서 데이터를 할당하지 않으면 해당 변수는 `any` 라는 타입이 지정된다. 이 `any` 타입은 모든 타입의 할당과 재할당이 허용된다는 것을 말한다. 

```ts
let a;

a = 100;

a = "RAREBEEF";
```

<br/>

변수의 선언문에서 데이터를 할당하지 않아도 변수의 타입을 지정할 수 있다.  

이러한 타입의 지정을 **Type Annotation(타입 어노테이션)** 이라고 부른다.

```ts
let a: string;

a = "RAREBEEF";

a = 100;

// Type 'number' is not assignable to type 'string'
```

<br/>
<br/>

# **JS와 TS의 타입**

<br/>

**JavaScript**  
Dynamic Types  

JS에서의 타입은 코드의 실행 시 체크된다.

<br/>

**TypeScript**  
Static Types  

TS에서의 타입은 코드 작성 중에 체크된다.

<br/>

## **타입의 종류**

<br/>

### **JS 기본 제공 타입**

- string

- number

- boolean

- null

- undefined

- symbol

- array : object 형

<br/>

### **TS에서 추가된 타입**

- any

- void

- never

- unknown

- enum

- tuple : object 형

<br/>
<br/>


# **Primitive type**
Primitive Type 은 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.

  - boolean

  - number

  - string

  - symbol

  - undefined

  - null

<br/>

프리미티브 타입은 리터럴 방식으로 표현이 가능하다.
```ts
"Hello";
123.456;
true;
null;
undefined;
```

<br/>

반대로 래퍼 객체를 통해 object 타입으로 만들 수도 있는데, 이는 매우 권장되지 않는다.
```ts
new String("Hello");
new Number(123.456);
new Boolean(false);
```

<br/>

타입 작성 시 첫 글자가 대문자로 시작되는 타입명은 프리미티브 타입을 나타내지 않는다.

프리미티브 타입을 그대로 프리미티브 타입으로 사용하기 위해서는 <span style="font-size: 16px;">**반드시 타입명을 전부 소문자로 작성**</span> 해야한다.  

<br/>

### **boolean**
```ts
let isTrue: boolean = true;

isTrue = false;
```

<br/>

### **number**
```ts
let age: number = 4;

age = 3.14;
```

<br/>

### **string**
```ts
let name: string = "RAREBEEF";

name = "rarebeef";
```


<br/>

### **symbol**

```ts
const symbol1 = Symbol();
```

<br/>

### **undefined & null**
`undefined` 와 `null`은 다른 타입이 지정된 변수에 할당할 수 있다.

컴파일 옵션(tsconfig.json)에서 `--strictNullChecks` 를 활성화하면 `undefined` 와 `null`은 `void` 나 자기 자신에게만 할당할 수 있게 된다.

이 경우 union type (`: 타입 | 타입`) 을 통해서 `null` 과 `undefined` 가 다른 타입에 할당이 가능하도록 만들 수 있다.
```ts
// strict = false

let age: number = null;


// strict = true

let age: number = null;
// Type 'null' is not assignable to type 'number'

// union type
let age: number | null = null;

```

<br/>
<br/>

# **object type**  
타입스크립트에서 **object**는 **primitive type이 아닌 것**을 의미한다.  

말 그대로 number, string, boolean, symbol, null, undefined를 제외한 나머지 타입들을 말한다.

<br/>

### **Array**
타입스크립트에서 배열의 타입을 지정할 때는 배열 내에 들어갈 요소의 타입을  함께 지정해야 한다.

요소의 타입이 복수일 경우 type union을 이용하여 지정한다.

```ts
// 배열의 요소 타입 지정
let arr: number[] = [1, 2, 3];

// 배열의 요소 타입 지정 2
let arr: Array<number> = [1, 2, 3];

// 배열의 요소 타입이 복수일 경우
let arr: (number | string)[] = [1, 2, 3, "a"]l
```

<br/>

### **Tuple**
튜플은 타입스크립트에서 추가된 타입으로 배열과 유사하지만 조금 더 엄격한 규칙을 갖고 있다.

- 각 index마다 할당 가능한 타입이 지정된다.

- 지정된 길이에 맞춰야 한다.

이 규칙은 비구조화 할당 시에도 반영된다.

```ts
let tuple: [string, number];

tuple = ["hello", 123];

tuple = [123, 456];
// Type 'number' is not assignable to type 'string'

tupel = ["hello"];
// Source has 1 element(s) but target requires 2.
```

<br/>

### **any**
any 는 타입에 상관 없이 모든 데이터가 들어오는 것이 가능하지만, 조금 더 깊게 들어가보면 제약 없이 모든 기능(메소드)를 사용할 수 있다는 것을 의미하기도 한다.  

따라서 타입 안정성을 위해 불가피한 상황을 제외하고는 정확한 타입을 지정해주는 것이 좋다.

컴파일 옵션 중 any를 써야하는 상황으로 예상되지만 아무 타입도 지정하지 않으면 오류를 출력하는 옵션이 존재한다.
`noImlicitAny`
```ts
// 매개변수 a의 타입을 any로 지정,
// 함수의 내부 로직을 거쳐도
// any의 누수가 발생하여
// 반환값도 any가 된다.
function any(a: any) {
  const b = a;
  const c = b;
  return c
};

const d = any(123);
// d의 타입도 any이다.


// 매개변수의 타입을 any로 지정했더라도
// 내부에서 매개변수를 number 타입으로 규정하여
// 누수를 막을 수 있다.
function any(a: any) {
  const b: number = a;
  const c = b;
  return c
};

const d = any(123);
// d의 타입은 number이다.
```

<br/>

### **unknown**

unknown은 any와 마찬가지로 어떤 값이던지 할당될 수 있지만, 타입이 식별되기 이전에는 다른 타입에 할당되거나 사용할 수 없다.

검증 과정을 거쳐 타입이 식별된 unknown은 해당하는 타입으로 변환되고, 해당하는 타입의 변수에 할당될 수 있다.

이 검증 과정을 타입 가드라고 부른다.

any보다 타입 안정성이 높기 때문에 any의 대체재로 사용된다.

```ts
// 매개변수 a가 unknown이기에 number 타입의 변수 b에 할당할 수 없어서 에러가 발생한다.
function func(a: unknown) {
  const b:number = a;
  retrun b
};

// 매개변수 a의 타입이 unknown이지만 a가 타입 가드를 거쳐 number 타입의 변수로 지정된다.
function func(a: unknown) {
  if (typeof a === 'number') {
    const b:number = a;
    return b
  };
};
```