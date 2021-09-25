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

복수의 타입을 지정할 수도 있다. 이를 Union Type이라 부른다.
```ts
let a: string | number;

a = "rarebeef";

a = 12345;
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
`undefined` 와 `null`은 둘 다 아무것도 아닌 것을 의미하는데, 다른 타입에 할당이 가능하다.

컴파일 옵션(tsconfig.json)에서 `--strictNullChecks` 를 활성화하면 `undefined` 와 `null`은 `void` 나 자기 자신에게만 할당할 수 있게 된다.

해당 옵션을 활성화하면 union type을 통해서 `null` 과 `undefined` 가 다른 타입에 할당이 가능하도록 해야한다.
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

컴파일 옵션 중 타입 추론 결과가 any일 경우 오류를 출력하는 옵션이 존재한다. 이후 나올 타입 시스템에서 후술.
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
    // 이 조건문에 만족될 경우 a는 number가 된다.
    const b:number = a;   // 당연히 number에 할당이 가능하다.
    return b
  };
};
```

<br/>

### **never**  
never는 주로 함수의 리턴에 사용된다. 이는 항상 오류를 출력하거나 리턴값을 절대 반환하지 않겠다는 것을 의미한다.

never는 모든 타입에 할당할 수 있지만,  
반대로 never에는 어떤 것도 할당할 수 없다.  

잘못된 타입을 할당하는 경우를 방지할 때 사용하기도 한다.
```ts
// 반환값으로 사용
function error(message: stgring): never {
  trow new Error(message)
};

// 잘못된 타입 방지
declare connst hi: string;
if (typeof hi !== "string") {
  // hi에 string 타입을 지정했지만
  // 이 조건문에 만족한다면 hi는 never가 된다.
  hi
};
```

<br/>

### **void**
어떠한 타입도 갖지 않는 공허한 상태이다. 값이 존재하지 않고 타입으로만 존재한다. 유일하게 undefined만 할당이 가능하다.

보통 함수에서 값을 반환하지 않는, 즉 undefined를 반환하도록 할 때 사용하지만, undefined 타입이 따로 있기 때문에 잘 사용되지는 않는다.  

반환값이 없는 함수를 작성할 경우, 혹은 빈 리턴문을 작성한 경우 타입스크립트가 타입을 예상하여 반환값에 void를 지정한다.

그래도 반환값이 없는 함수라는 것을 명시적으로 나타내기 위해 작성해두는 것을 권장한다.

<br/>
<br/>

# **타입 시스템**  

타입 시스템은 크게 두 가지로 나누어진다.

- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템

- 컴파일러가 자동으로 타입을 추론하는 시스템

타입스크립트의 타입 시스템은 위의 두 가지 모두 갖고 있다. 타입을 명시적으로 지정할 수 있지만, 지정하지 않을 경우 타입 스크립트의 컴파일러가 자동으로 타입을 추론한다.

타입은 해당 변수가 할 수 있는 일을 결정한다. 반대로 해당 변수가 할 수 없는 일도 결정해서 의도치 않은 상황을 사전에 방지한다.

<br/>
<br/>

## **타입 추론 관련 컴파일 옵션**

<br/>

### **`noImplicitAny` 옵션**
매개변수에 2를 곱해 반환하는 함수가 있다.
```js
function double(a) {return a*2};
```
a의 타입을 지정하지 않았기 때문에 TS는 a를 any 타입으로 추론하였다.  
리턴의 타입은 number로 추론하였다.

사용자는 a의 타입이 any이기 때문에 문제가 없을걸로 예상하고 string 타입을 인자로 전달하여 함수를 호출했다.

```ts
double("Hello again!"); // NaN
```
NaN이 반환되었다. NaN도 리턴 타입인 number의 일종이기 때문에 아무 문제 없이 실행이 완료되었다.


**`noImplicitAny`**  
이 옵션을 활성화하면 타입을 지정하지 않았을 때 추론 결과가 any라면 컴파일 에러를 발생시켜서 타입 지정을 유도한다.

<br/>

### **`strictNullChecks` 옵션**
매개변수가 1보다 클 경우 2를 곱해 반환하는 함수가 있다.
```ts
function double(a: number) {
  if (a>1) {
    return a*2;
  };
};
```
a의 타입은 number로 지정되었다.  
반환값은 타입이 지정되지 않았지만 number로 추론되었다.

사용자는 a가 number이기 때문에 숫자 -2를 인자로 전달하여 함수를 호출했다.  
그리고 반환값에 2를 더했다. 

반환값도 number로 추론되었기 때문에 (반환값 + 2)는 아무 문제가 없는 수식이다.
```ts
double(-2) +2;  // NaN
```
인자가 1보다 크다는 조건에 만족하지 않아서 리턴문을 거치지 못했고, undefined가 반환되었다.  
이 undefined에 +2가 되어 NaN이라는 결과가 나온 것이다.  

반환값이 number로 추론되었지만 undefined가 반환된 것을 통해 number에는 undefined가 포함된다는 것을 알 수 있다.


**`strictNullChecks`**  
이 옵션을 활성화하면 모든 타입에 포함되어 있는 null과 undefined를 제거한다.


해당 옵션을 켤 경우 위 함수의 반환값은 number | undefined 라고 추론된다.

<br/>

### **`noImplicitReturns` 옵션**
```ts
function double(a: number): number {
  if (a>1) {
    return a*2;
  };
};
```
매개변수는 물론 반환값에도 타입을 number로 지정하였다. 

이 경우 타입스크립트는 매개변수가 1보다 작아서 리턴문을 거치지 않고 undefined가 반환될 경우를 발견하고 예상 반환값이 지정한 타입과 일치하지 않는다는 에러를 뱉는다.

**`noImplicitReturns`**  
이 옵션을 활성화하면 함수 내 모든 경로 중 하나라도 리턴이 존재하지 않을 경우 에러가 발생한다.

<br/>

## **Structural & Nominnal**
타입 시스템은 또한 **Structural Type System** 과 **Nominal Type System** 으로 나눌 수 있는데, 타입 스크립트는 이 중 Structural Type System을 따르고 있다.

**Structural Type System** 은 이름이 달라도 구조가 같으면 같은 타입이라고 받아들이는 타입 시스템이다.

**Nominal Type System** 은 반대로 구조가 같아도 이름이 다르면 다른 타입이라고 받아들이는 타입 시스템이다.

<br/>
<br/>

# **타입 호환성**
## **서브 타입 & 슈퍼 타입**
서브타입이란 슈퍼타입의 하위에 속하는 타입이라고 볼 수 있다.  

서브타입은 슈퍼타입에 할당될 수 있지만, 슈퍼타입이 서브타입에 할당되는 것은 불가능하다.

<br/>

### **number 예시**

숫자 9는 슈퍼타입 number의 서브 타입이다.  
숫자 9는 number에 속하지만 number가 숫자 9에 속하지는 않는다. 따라서 숫자 9는 number에 할당이 가능하지만 반대는 불가능하다.
```ts
let subT: 9 = 9;
let superT: number = subT;  // number에 9 할당 가능
subT = superT;  // 에러, 9에 number 할당 불가능
```

### **array 예시**

array는 슈퍼타입 object의 서브 타입이다.  
array는 object에 속하지만 object가 array에 속하지는 않는다. 따라서 array는 object에 할당이 가능하지만 반대는 불가능하다.
```ts
let subT: number[] = [9];
let superT: object = subT;  // object에 array 할당 가능
subT = superT;  // 에러, array에 object 할당 불가능
```

### **class 예시**

상위 클래스는 슈퍼타입이고 이 슈퍼타입을 상속 받은 하위 클래스는 상위 클래스의 서브타입이다. 하위 클래스는 상위 클래스에 할당이 가능하지만 반대는 불가능하다.
```ts
class Computer {};

class Laptop extends Computer {
  foldable() {}
};

let subT = Laptop = new Laptop();
let superT: Computer = subT;  // 상위 클래스에 하위 클래스 할당 가능
subT = superT;  // 에러, 하위 클래스에 상위 클래스 할당 불가능
```

<br/>

## **공변 & 반공변**

위에서 알아본 것 처럼 할당은 서로 같거나 **서브 타입인 경우**에만 가능하고, 이를 공변이라고 부른다.

반대로 함수의 경우에는 매개변수 타입이 같거나 **슈퍼타입인 경우** 할당이 가능한데, 이를 반공변이라고 부른다.
```ts
// Computer > Laptop > Macbook
class Computer {};

class Laptop extends Computer {
  foldable() {};
};

class Macbook extends Laptop {
  expensive() {};
};

// 콜백함수가 매개변수로 Laptop을 받는다.
function myLaptop(func: (pc: Laptop) => Laptop) {
  return new Laptop()
};

// Computer는 Laptop의 슈퍼타입이고 할당이 가능하다.
myLaptop(function myComputer(pc: Computer): Laptop {  
  return new Laptop()
});

// 에러, Macbook은 Laptop의 서브타입이고 할당이 불가능하다.
myLaptop(function myMacbook(pc: Macbook): Laptop {
  return new Laptop()
});
```

- **공변성**  
같거나 서브타입인 경우 할당이 가능하다.

- **반공변성**  
같거나 슈퍼타입인 경우 할당이 가능하다. 함수에만 적용.

`strictFunctionTypes` 옵션을 켤 경우 함수를 할당할 때 함수의 매개변수 타입이 다르거나 슈퍼타입이 아닌 경우 에러가 발생한다.

<br>
<br>

# **Compilation Context**
컴파일과 관련된 다양한 옵션과 컴파일 할 파일 등을 지정하는 세부 사항을 의미하며, 보통 tsconfig.json 파일 내에 작성된다.

tsconfig.json 파일의 최상위 프로퍼티는 다음과 같다.

- compileOnSave
- extends
- compileOption
- files
- include
- exclude
- references
- typeAcquisition
- tsNode

이 중 compileOption만 파일 생성 시 자동으로 작성되고 나머지 프로퍼티는 필요에 따라 직접 작성해야 한다. compileOption 또한 필요에 따라 내용을 수정할 수 있다.

<br/>

## **compileOnSave**
```json
"compileOnSave": true
```
파일 저장 시 자동으로 컴파일 할 것인지 지정한다. 기본값은 false이다.

<br/>

## **extends**
```json
"extends": "./base.json"
```
config을 불러올(상속) 파일을 지정한다.  

타입 스크립트는 extends가 가능한 tsconfig.json 파일을 모아둔 <a href="https://github.com/tsconfig/bases"> git 저장소 </a>를 운영 중에 있다. 여기서 자신의 상황에 맞는 config를 찾아 extends하여 편하게 사용할 수 있다.

1. `$ npm install -D @tsconfig/설정명` 으로 해당 저장소에서 필요한 설정 파일을 불러온다.

2.  `extends` 경로로 `"@tsconfig/설정명/tsconfig.json"`을 지정한다.

<br/>

## **files, include, exclude**
어떤 파일을 컴파일하고 어떤 파일을 제외할 것인지 지정한다. 파일이 지정되지 않으면 컴파일러는 모든 파일을 컴파일하려 시도한다.

files와 include는 컴파일 할 파일을 지정한다. 

exclude는 컴파일에서 제외할 파일을 지정한다.

exclude는 include에 명시된 파일은 제외시킬 수 있지만 files에 명시된 파일은 제외시킬 수 없다. (files > exclude > include)

### **files**
컴파일 할 파일을 지정한다.  
상대 혹은 절대 경로의 리스트 배열이다.  
가장 권한이 높다.

### **include**
컴파일 할 파일을 지정한다.  
glob 패턴으로 작성한다.  
권한이 가장 낮다.

### **exclude**
컴파일에서 제외할 파일을 지정한다.  
glob 패턴으로 작성한다.  
별도의 설정이 없어도 node_modules, browser_components, jspm_packages, outDir은 기본값으로 제외한다.  

<br/>

## **compileOption**
### **typeRoots & types**
타입 선언이 없어서 TS에서 사용 불가능한 JS의 라이브러리에 대한 옵션들이다. 이 두 옵션은 함께 사용되지 않는다. 

라이브러리에 대한 타입 선언 파일은 아래 명령을 통해 설치가 가능하다.  
`$ npm install -D @types/라이브러리명`   
기본 설치 경로는 /node_modules/@types 이다. 

- **typeRoots**  
  타입 선언 파일들이 저장되는 경로를 지정한다.
  지정한 경로를 통해 라이브러리와 타입 선언 파일을 연결할 수 있다.  
  기본값으로 활성화 되며 기본 경로도 지정되지만 필요에 따라 다른 경로도 추가가 가능하다.

- **types**  
  typeRoots와 달리 경로가 아닌 모듈명을 지정하며 /node_modules/@types에서 파일을 찾아 연결한다.

<br/>

### **target & lib**
- **target**  
JS의 버전(ES)을 지정한다.

- **lib**
기본 타입 definition 라이브러리를 지정한다.  
따로 지정하지 않을 경우 target에 맞는 라이브러리를 자동으로 사용하게 된다. 

<br/>

### **outDir, rootDir**
- **outDir**  
컴파일 된 결과물을 저장할 경로를 지정한다.

- **rootDir**  
컴파일 할 파일을 찾을 경로를 지정한다.

<br/>

## **strict**
타입 체크의 엄격도를 지정하며, 이 옵션은 항상 활성화하는 것을 권장한다.  

다양한 하위 옵션들이 존재한다. 

- **`noImplicitAny`**  
타입 추론 결과가 any일 경우 에러가 발생한다.

- **`noImplicitThis`**  
this의 타입을 지정하지 않아서 any로 추론될 경우 에러가 발생한다.  

  타입 스크립트는 함수의 선언 시 this를 첫 번째 매개변수로 선언할 수 있다. 이 때 this의 타입을 지정할 수 있다.  

  this의 타입을 any로 지정하는 것은 그렇게 큰 문제가 되지는 않는다. 하지만 명확한 목적과 사용처가 있는 경우에는 타입을 지정하는 것이 좋다.

  클래스는 이 옵션과 관련하여 this 에러가 발생하지 않는다.

- **`strictNullCheacks`**  
  null 과 undefiend를 다른 타입의 서브타입에서 제거하고 오직 자기 자신에게만 할당이 가능하도록 한다.  
  한 가지 예외로 undefined 에 void 할당은 가능하다.

- **`strictFunctionTypes`**  
   함수를 할당할 때 함수의 매개변수 타입이 다르거나 슈퍼타입이 아닌 경우 에러가 발생한다.

- **`strictPropertyInitialization`**  
정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인하도록 한다. `strictNullCheacks` 옵션이 선행되어야 한다.

- **`strictBindCallApply`**  
function의 내장 함수인 `bind`, `call`, `apply` 를 더 엄격하게 체크하도록 한다.  

  - `bind`, `call`, `apply` 란?  
    `bind`는 해당 함수 안에서 사용할 `this` 와 인자를 설정하는 역할을 하고, `call` 과 `apply` 는 `this` 와 인자를 설정하고 실행까지 한다.

    `call` 과 `apply` 의 차이점은 인자의 설정 방식이다.  
    `call` 은 함수의 인자를 여러 인자의 나열로 넣어서 사용하고, `apply` 는 모든 인자를 배열 하나로 넣어서 사용한다.


- **`alwaysStrict`**  
각 소스 파일에 대해 JS의 strict mode로 코드를 분석하고 "엄격하게 사용"을 해제한다.

<br/>
<br/>

# **Type Alias(타입 별칭)**
타입 체크를 위해 사용되며, Primitive, Union Type, Tuple, Function 등 세부적인 내용의 작성이 필요한 타입에 별칭을 지정하여 편하게 불러올 수 있다.

다음에 나올 Interface랑 비슷해보이지만 다른 점이 존재한다. 후술.

```ts
type strNum = string | number;

let id: strNum = 12345;
id = "rarebeef"; 
```
```ts
type userType = [string, number];

const user1: userType = ["rarebeef", 4];
```

<br/>
<br/>

# **Interface**
인터페이스는 타입 체크를 위해 사용되며, 변수와 함수 그리고 클래스에 사용이 가능하다.  
```ts
interface PersonI {
  name: string;
  age: number
};

function greeting(person: PersonI): void {
  console.log(`나는 ${person.name}, ${person.age}살이다.`)
};

const p1: PersonI = {
  name: "rarebeef",
  age: 4
};
greeting(p1);
```

<br/>

## **Optional property**
인터페이스를 정의할 때 옵셔널 프로퍼티를 지정할 수 있다.  
이 옵셔널 프로퍼티는 할당 시 있어도 되고 없어도 되는 프로퍼티를 말한다.
```ts
interface PersonI {
  name: string;
  age?: number;  // 옵셔널 프로퍼티
};

function greeting(person: PersonI): void {
  console.log(`나는 ${person.name}이다.`);
};

const p1: PersonI = {name: "rarebeef"};  // age를 넣지 않아도 할당이 가능하다.
greeting(p1);
```

### **Indexable type**
인터페이스에 옵셔널 프로퍼티를 지정하는 방법이 한가지 더 존재한다.  

위의 `?`는 특정 프로퍼티가 들어와도 되고 안들어와도 되는 상황에서 사용했다면,  
이 방법은 특정되지 않은 다양한 프로퍼티가 들어올 수 있도록 허용해준다.

JS의 프로퍼티 할당 방법 중 하나인 `obj["key"] = value` 를 이용한 방법이다.
```ts
interface PersonI {
  name: string;
  // key는 string, value는 any에 한해서 프로퍼티 추가를 허용한다.
  [index: string]: any;  
};

function greeting(person: PersonI): void {
  console.log(`나는 ${person.name}이다.`);
};

const p1: PersonI = {
  name: "rarebeef",
  age: 4  // 옵셔널 프로퍼티
};
greeting(p1);

const p2: PersonI = {
  name: "Peter",
  hobby: "coding"  // 옵셔널 프로퍼티
};
greeting(p2);
```

<br/>

## **Function in interface**
인터페이스로 함수(메소드)를 지정할 수 있다.  
인터페이스에서 지정된 함수를 할당하는 방법은 두 가지가 있다.
```ts
interface PersonI {
  name: stirng;
  age: number;
  getName(): string;
};

// 함수 할당 방법 1
const p1: PersonI = {
  name: "rarebeef",
  age: 4,
  getName: function (): string {
    return this.name
  }
};

// 함수 할당 방법 2
const p2: PersonI = {
  name: "Peter",
  age: 3,
  getName(): string {
    return this.name
  };
};

// 화살표 함수도 사용은 가능하나, 이 경우 this의 정의에서 문제가 발생한다.
const p3: PersonI = {
  name: "Stark",
  age: 5,
  getName: (): string => {
    return this.name  // 에러 발생
  };
};
```

<br/>

## **Class implements interface**
인터페이스를 통해 클래스를 생성할 수 있다.
```ts
interface PersonI {
  name: string;
  age?: number;
  getName(): string;
};

class Person implements PersonI {

  // 클래스의 프로퍼티에 대한 타입을 지정한다.
  name: string;
  age?: number | undefined;

  // 필수 프로퍼티인 name만 초기값을 지정한다.
  constructor(name: string) {
    this.name = name;
  };

  getName(): string {
    return this.name;
  };
};

// p1은 클래스로 생성했지만 해당 클래스는
// PersonI라는 인터페이스를 통해 만들어졌기 때문에
// p1의 타입을 PersonI로 지정해도 문제가 없고 오히려 더 권장된다.
const p1: PersonI = new Person("rarebeef");
```

<br/>

## **Interface extends**
인터페이스는 상속이 가능하다.
```ts
interface PersonI {
  name: string;
  age?: number;
};

interface StudentI extends PersonI {
  school: string;
};

const s1: StudentI = {
  name: "rarebeef",
  age: 4,
  school: "TS middle school"
};
```

<br/>

## **Function interface**
인터페이스로 함수의 매개변수와 반환값의 타입을 지정할 수 있다.  

함수의 호출 시 인자의 타입 체크는 함수가 아닌 인터페이스가 직접 하게 된다. 
```ts
interface PrintPerson {
  (name: string, age?: number): void;
};

const printPerson: PrintPerson = function (name: string, age?: number): void {
  console.log(name, age)
};

printPerson("rarebeef", 4);
```
이 때 함수 선언부의 `age?: number` 에서 `?` 를 빼면 에러가 발생한다.  

인터페이스에서는 `age` 매개변수를 옵셔널로 지정하였는데 함수에서는 필수 매개변수로 지정하였기 때문이다.

<br/>

## **Readonly interface property**
readonly 키워드를 사용하여 인터페이스 프로퍼티를 생성하면 해당 프로퍼티는 한 번 값이 할당된 후 재할당이 불가능해진다.
```ts
interface PersonI {
  readonly name: string;
  age: number;
};

const p1: PersonI = {
  name: "rarebeef",
  age: 4
};

p1.age = 5;
p1.name = "Peter" // 에러 발생
```

<br/>
<br/>

# **Interface VS Type alias**
가장 눈에 띄는 차이점으로 두 가지가 있다.

- 타입 앨리어스는 원시값, 유니온 타입, 튜플 등을 타입으로 지정할 수 있지만 인터페이스는 불가능하다.  

- 인터페이스는 extends와 implements가 가능하지만 타입 앨리어스는 불가능하다. 

그 외 문법, 세부적인 차이점은 아래와 같다.

## **Function**
```ts
// type alias
type PersonT = (person: string) => void;

// interface
interface PersonI {
  (person: string): void
};
```

## **Array**
```ts
// type alias
type ListT = string[];

// interface
// indexable type을 사용한다.
interface ListI {
  [index: number]: string;
};
```

## **Intersection**
인터섹션은 복수의 타입을 `&` 으로 이어서 해당 타입들을 모두 지정하는 것을 말한다.
```ts
interface PersonI {
  name: string;
  age: number;
};

interface GameLoverI {
  favorite: string;
  level: number;
};

// type alias
type GamerT = PersonI & GameLoverI;

// interface
// extends를 이용한다.
interface GamerI extends PersonI, GameLoverI {};
```

## **Union type**
인터페이스는 union type을 표현하지 못한다.
```ts
interface Female {
  gender: string;
};

interface Male {
  gender: string;
};

type Person = Female | Male;
```

## **Declaration Merging**
인터페이스는 이름이 같을 경우 합쳐지지만 타입 앨리어스는 이름을 같게 만들 수 없다.
```ts
interface Animal {
  canSwim: boolean;
};

interface Animal {
  canFly: boolean;
};

const duck: Animal = {
  canSwim: true,
  canFly: false
};
```

<br/>
<br/>

# **Classes**
객체를 만드는 청사진과 같은 역할을 한다.

타입 스크립트에서 클래스는 사용자 지정 타입의 일종이다.

<br/>

## **클래스 기본 구조**

```ts
class Person {
  // JS와 달리 프로퍼티를 constructor 이전에 선언하지 않으면 에러가 발생한다.
  name;

  constructor(name: string) {
    this.name = name;
  };
};

const p1 = new Person("rarebeef");
```

<br/>

## **Constructor & Initailize**

<br/>

### **초기화**
strict 옵션 활성화 시 클래스를 생성할 때 프로퍼티를 초기화하지 않으면 할당된 값이 없다는 에러가 발생한다.
```ts
// Property 'name'('age') has no initializer and is not definitely assigned in the constructor.
class Person {
  name: string;
  age: number;
};
```
아래와 같이 프로퍼티에 값을 할당하여 초기화 할 경우 에러 없이 정상적으로 동작한다.
```ts
class Person {
  name: string = "rarebeef";
  age: number = 4;
};
```
클래스의 선언 단계가 아닌 그 **이후에 프로퍼티 값을 할당**할 것을 **`!`** 를 통해 명시할 수 있다. 

이 경우 클래스의 선언 때 값을 할당하지 않아도 에러가 발생하지 않는다.

이 경우 나중에 프로퍼티 값을 부여하는 것을 잊지 않도록 주의해야 한다.
```ts
class Person {
  name: string = "rarebeef";
  age!: number;
};
``` 

<br/>

### **생성자 (`constructor`)**

- **생성자가 없는 경우**  
생성자가 없는 클래스는 디폴트 생성자를 갖게 되며 인자가 없어도 초기화된 프로퍼티 값으로 인스턴스를 생성한다.  

  따라서 클래스 생성 시 프로퍼티에 값을 모두 할당해야 한다. (`!` 제외)

- **생성자가 있는 경우**  
생성자가 있는 클래스는 디폴트 생성자를 더 이상 갖지 않는다. 따라서 인자 없이는 호출할 수 없다. 대신 클래스 선언 단계에서 프로퍼티에 값을 할당하지 않아도 된다.

  생성자 함수에 포함된 프로퍼티는 `!`를 통해 초기화를 연기시킨 프로퍼티와 같다고 볼 수 있다.

  인자 없이 호출도 가능하기 위해서는 `?`를 붙여서 옵셔널 프로퍼티를 만들면 된다. 이 경우 조건문을 통해 값이 undefined가 되지 않도록 제어할 필요가 있다.
```ts
// 생성자가 없는 경우
class Person1 {
  name: string = "rarebeef";
  age: number = 4;
};
const p1 = new Person1();

// 생성자가 있는 경우
class Person2 {
  name: string;
  age: number;
  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  };
};
const p2 = new Person2("rarebeef", 4);

// 옵셔널 프로퍼티 예시
class Person3 {
  name: string;
  age: number;
  constructor(name?: string, age: number) {
    if (name = undefined) {
      this.name = "no name";
    } else {
      this.name = name
    };
    this.age = age;
  };
};
```
생성자에는 async를 붙일 수 없다.

<br/>

## **접근 제어자**
접근 제어자는 생성자, 프로퍼티, 메소드의 외부, 내부, 상속 접근을 제어한다. 

각 생성자, 프로퍼티, 메소드의 앞에 접근 제어자를 붙여서 사용한다.

`public` 은 모든 접근을 허용하며 기본값이다.

`private` 은 클래스 내부에서만 접근을 허용한다. 이 접근제어자가 붙은 프로퍼티, 메소드 등은  이름 앞에 `_`를 붙인다. 필수는 아니다.

`propected` 는 외부 접근은 거부하지만 상속 관계에서 접근은 허용한다.


```ts
class Person {
  name: string;
  age: number;
  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
};

// 생성자가 private일 경우 아래와 같은 생성자 호출이 불가능하다.
const p1 = new Person("rarebeef", 4);
```

<br/>

## **프로퍼티 할당 축약**
생성자의 매개변수를 this의 프로퍼티로 할당하는 코드를 축약할 수 있다.
```ts
// 기존의 코드
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
};

// 축약한 코드
class Person {
  constructor (public name: string, public age: number) {};
};
```
프로퍼티의 선언과 this 할당 부분을 생략하여 코드를 보다 짧게 작성할 수 있다.  
생성자의 매개변수에 붙은 `public`이 `Person`의 `this`를 가리키는 역할을 한다.  
`public` 대신 `private` 를 사용하는 것도 가능하다. 이 경우 할당은 정상적으로 되지만 값을 참조하는 것은 불가능하다. 

<br/>

## **Getters & Setters**
프로퍼티의 값을 참조하기 위해 불러오는 것을 get, 프로퍼티의 값을 수정하는 것을 set이라고 한다.   

```ts
class Person {
  constructor(public name: string, public age: number) {};
};

const p1 = new Person("rarebeef", 4);

console.log(p1.name);  // get

p1.age = 100;  // set
```
이러한 get과 set을 수행하는 함수 또는 메소드를 각각 **getter**와 **setter**라고 부른다.  

**getter와 setter는 클래스에서 선언**할 수 있다.  

getter와 setter의 이름은 보통 프로퍼티와 동일하게 하는데, 문제는 이름이 겹치면 에러가 발생하기 때문에 프로퍼티의 이름 앞에 `_` 를 붙여서 에러를 방지한다.

getter와 setter는 함수지만 호출 시 `()`를 붙이지 않는다. 따라서 동일한 문법으로 get과 set을 수행할 수 있다.

또한 함수이기 때문에 원래의 역할인 get과 set 외에 다른 로직을 함께 수행하도록 지정할 수 있다. 따라서  데이터를 가공하여 get 혹은 set하는 것이 가능하다.

`private` 접근 제어자와 함께 사용하면 getter와 setter를 거치지 않고서는 프로퍼티에 접근할 수 없게 만들 수 있다.


```ts
class Person {
  constructor(private _name: string, private age: number) {};  // _를 붙여서 구분한다.

  get name() {
    console.log("get");  // console.log()를 get 이전에 수행한다.
    return this._name;  // 반환(get)한다.
  };

  set name(n: string) {
    console.log("set");
    this._name = n;  // 할당(set)한다.
  };
};
const p1 = new Person("rarebeef", 4);

// get, set을 하는 문법은 이전과 동일하다.
console.log(p1.name);
p1.age = 100;
```

<br/>

## **readonly properties**
읽기 전용 프로퍼티를 만들어서 모든 인스턴스가 같은 값을 갖지만 수정이 불가능하도록 만들 수 있다.  
`public`과 `private`에서 모두 수정이 불가능하다.

```ts
class Person {
  public readonly national: string = "Korean";
  constructor(public name: string, public age: number;) {};
};
```

<br/>

## **Index Signatures in class**
인스턴스들이 각각 다른 프로퍼티 이름을 갖도록 클래스 구조를 만들 수 있다.  

```ts
// {이름: 성별} 프로퍼티 구조를 갖는 클래스
class Person {
  [index: string]: "male" | "female";
};

const korean = new Person();
korean.rarebeef = "male";
korean.jisu = "female";

const american = new Person();
american.peter = "male";
american.lena = "female";
```

<br/>

## **Static Properties & Methods**
프로퍼티와 메소드 앞에 `static`을 붙여서 정적 프로퍼티와 메소드를 만들 수 있다.  

정적 프로퍼티와 메소드의 호출은 인스턴스명이 아닌 클래스명을 통해 이루어지며 모든 인스턴스가 같은 값을 공유한다. 

```ts
class Person {
  public static national: string = "Korean";
  constructor(public name: string) {};
  static nationalChange(country: string) {
    Person.national = country;
  };
};

Person.national;
Person.nationalChange("American");
```

<br/>

## **Singletons**  
클래스는 객체의 청사진 역할을 하며 같은 구조의 객체를 여러개 찍어낼 수 있다.  

싱글턴이란 클래스로 **단 하나의 객체**만 만들어서 사용하는 것을 말한다.  

생성자를 `private` 으로 만들어서 접근을 거부하고 특정 메소드를 통해서만 인스턴스를 생성할 수 있도록 만든다.  
이 때 이 메소드는 최초 호출 시 인스턴스를 생성하고, 이후 호출에서는 최초에 만든 인스턴스를 반환하도록 만든다.
```ts
class Example {
  // 인스턴스의 생성 여부를 판단하고 저장할 변수
  private static instance: null | Example = null;

  // 인스턴스가 없으면 생성 후 반환, 있으면 반환
  public static getInstance(): Example {
    if (!Example.instance) {
      Example.instance = new Example();
    };
    return Example.instance;
  };

  // private 생성자
  private constructor() {};
};

// 정적 메소드를 호출하여 인스턴스를 불러온다.
const ex1 = Example.getInstance();
```

<br/>

## **상속**
상속은 새로운 클래스를 만들 때 기존의 다른 클래스로부터 그 구조를 불러와서 사용하는 것을 말한다.  

`extends` 로 상속을 받을 수 있으며, `protected` 접근 제어자로 내부와 상속 관계에서만 접근이 가능하도록 할 수 있다. 

자식 클래스는 생성자를 새롭게 선언할 경우 `super()` 를 이용하여 부모 클래스의 생성자를 호출해야 한다. 이 때 부모 생성자의 구조에 맞게 인자를 전달해야 한다. `super()`는 자식 생성자에서 가장 먼저 등장해야 한다.

또한 부모 클래스에서 이미 정의된 내용을 자식 클래스에서 별도로 오버라이드 할 수 있다.
```ts
class Parent {
  constructor(protected name: string, private age: number) {}
  public print(): void {
    console.log(this.name, this.age);
  };
};

class Child extends Parent {

  // 생성자를 오버라이드한다.
  constructor(age: number, public national: string) {
    
    // super()로 부모 생성자를 호출한다.
    // 값을 할당하는 것도 가능하다.(name에 "child" 할당)
    super("child", age);
  };

  // 부모 클래스 매소드 오버라이드
  // 여기서는 age를 참조할 수 없다. 부모 클래스에서 private으로 정의되었기 때문이다.
  // name은 protected여서 자식 클래스에서 참조가 가능하다.
  public print(): void {
    console.log(this.name, this.national);
  };
};

const p = new Parent("parent", 4);
const c = new Child(3, "Korean");
```

<br/>

## **Abstract Classes**
`abstract` 키워드로 완전하지 않은 클래스를 표현할 수 있다.  

완전하지 않은 클래스는 new를 통해 객체를 생성할 수 없고, 상속을 통해 완전한 클래스를 만들어서 사용해야 한다.
```ts
// abstract 키워드를 통한 완전하지 않은 클래스 선언
abstract class AbstractPerson {
  protected _name: string = "rarebeef";

  // abstract 키워드를 통한 완전하지 않은 메소드 선언
  // 블록 스코프를 작성하지 않는다.
  abstract setName(name: string): void;
};

// abstract 클래스를 상속 받아서 완성시킨다.
class Person extends AbstractPerson {

  // 완전하지 않았던 메소드를 완성시킨다.
  setName(name: string): void {
    this._name = name;
  };
};
```

<br/>

## **타입 스크립트 클래스 요약**
### **생성자**
클래스에 별도의 생성자가 없을 경우 디폴트 생성자가 부여된다.  
클래스 내부에서 선언/할당된 내용으로만 인스턴스가 생성되지만 프로퍼티에 `!`를 붙여 값 할당을 외부에서 실행하도록 선언할 수 있다.

클래스에 생성자가 있을 경우 디폴트 생성자는 사용되지 않는다.  
이 경우 클래스 호출 시 반드시 인자가 필요하다.
### **프로퍼티 선언**
타입 스크립트는 생성자 이전에 프로퍼티가 선언되어야 한다.
```ts
class Example {
  a: string; 
  constuctor(a: string) {
    this.a = a
  };
};
```
### **접근 제어자**
접근 제어자는 프로퍼티와 메소드의 접근 권한을 지정한다.
- `public`  
클래스 내부, 자식 클래스 내부, 인스턴스 접근 허용.  
기본값으로 생략 가능.
- `protected`  
클래스 내부, 자식 클래스 내부 접근 허용  
- `private`  
클래스 내부 접근 허용,  
`private`가 붙은 매개변수는 이름 앞에 `_` 를 붙인다. 필수는 아님.
### **생성자 매개변수 접근 제어자**
생성자의 매개변수에 접근 제어자를 선언하면 해당 매개변수는 클래스의 프로퍼티로 선언되어 별도의 선언문 혹은 할당문을 작성할 필요가 없다.  
코드를 축약시킬 수 있다.
```ts
class Example {
  constructor(public a: string) {};
};
```
### **readonly**
프로퍼티에 `readonly` 키워드를 붙이면 읽기 전용 프로퍼티가 되며 값의 재할당이 불가능해진다.
### **static**
`static` 키워드로 정적 프로퍼티 혹은 메소드를 선언할 수 있다.  
정적 프로퍼티 혹은 메소드는 인스턴스명이 아닌 클래스명으로 호출이 가능하며, 인스턴스가 없어도 정상 동작한다. 
모든 인스턴스가 같은 값(메모리 주소)를 공유한다.
### **abstract**
`abstract` 키워드를 통해 미완성된 클래스를 생성할 수 있다. 미완성된 클래스는 `new`를 통해 인스턴스를 생성할 수 없고 상속을 통해 완성시켜서 사용하여야 한다.

<br/>
<br/>

# **Generic**
generic은 함수, 클래스 등이 선언되는 시점이 아닌 사용되는 시점에 타입을 정의할 때 사용된다.

타입별로 새로운 코드를 작성할 필요가 없어져서 코드의 재사용성이 높아진다.

```ts
// 타입 매개변수 T 선언. T를 함수의 매개변수와 반환값에 지정한다.
// 타입 매개변수의 이름이 꼭 T일 필요는 없지만 일반적으로 사용된다.
function generic<T>(a: T): T {
  return a;
};

// 함수 호출 시 타입을 지정한다.
// 타입을 지정하지 않으면 매개변수에 따라 T의 타입이 추론된다.
generic<string>("str");


// 타입 매개변수는 복수도 가능하다.
function generic2<T1, T2>(a:T1, b:T2): T2 {
  console.log(a);
  return b;
};

generic2<string, number>("rarebeef", 4);
```

<br/>

## **Generic Array & Tuple**
배열과 튜플도 제네릭으로 지정할 수 있다.

<br/>

### **Array**
```ts
// 매개변수의 타입을 배열로 지정한다.
// 배열 요소의 타입과 반환값은 T이다.
function generic<T>(a: T[]): T {
  return a[0];
};

// T가 string으로 추론된다.
generic(["A", "B"]);

// T가 string | number로 추론된다.
generic(["A", 123])
```

<br/>

### **Tuple**
```ts
function generic<T1, T2>(a: [T1, T2]): T1 {
  return a[0];
};

// T1과 T2가 각각 string으로 추론된다.
generic(["A", "B"]); 

// T1과 T2가 [string, number]로 추론된다.
generic(["A", 123]); 
```

<br/>

## **Generic function**
제네릭을 이용하여 함수의 구조 타입을 지정할 수 있다.
```ts
type FuncGeneric1 = <T>(a: T) => T;

const Func: FuncGeneric1 = <T>(a: T): T => {
  return a;
};


interface FuncGeneric2 {
  <T>(a: T): T;
};

const Func2: FuncGeneric2 = <T>(a: T): T => {
  return a;
};
```
<br/>
 
## **Generic class**
클래스 내에서도 제네릭을 사용할 수 있다.  
```ts
class Person<T1, T2> {
  private _name: T1;
  private _age: T2;
  constructor(name: T1, age: T2) {
    this._name = name;
    this._age = age;
  };
};

const p1 = new Person<string, number>("rarebeef", 4);
```

<br/>

## **Generic with extends**
extends는 보통 상속을 말하는데, generic에서의 extends는 상속이 아닌 타입의 선택지를 제한하는 역할을 한다. 
```ts
// 타입의 범위를 string과 number로 제한한다.
class Person<T extends string | number> {
  private _name: T;
  constructor(name: T) {
    this._name = name
  };
};

const p1 = new Person(true);  // 에러 발생
```

<br/>

## **keyof & type lookup system**

<br/>

### **keyof**
`keyof` 는 객체의 문자열 리터럴 key를 유니온 타입으로 반환한다.
```ts
const obj = {
  name: "rarebeef",
  age: 4
};

keyof obj;  // "name" | "age"
```

<br/>

### **type lookup system**
`keyof` 와 generic을 활용하면 객체 프로퍼티에 따라 타입을 다르게 지정할 수 있다.
```ts
// 객체 구조 인터페이스 생성
interface PersonI {
  name: string;
  age: number;
};

// 객체 생성
const person: PersonI = {
  name: "rarebeef",
  age: 4
};


// 객체의 프로퍼티 값을 재할당하는 함수 만들기

// 예시 1, keyof와 generic 사용 X
// name에는 string을, age에는 number를 전달해야 한다.
// 하지만 전달값이 string | value의 유니온 타입이어서 구분이 불가능하다.
function setValue(obj: PersonI, key: "name" | "age", value: string | number): void {
  obj[key] = value;
};

// 예시 2, keyof와 generic 사용
// T1은 객체를, T2는 해당 객체의 key를 가리킨다.
// T2(key)가 정의되는 순간 value의 타입이 해당 key와 동일하게 지정된다.
function setValue<T1, T2 extends keyof T1>(obj: T1, key: T2, value: T1[T2]): void {
  obj[key] = value;
};
```