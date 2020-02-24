# opentutorials-JavaScrip-Immutability

생활코딩 JavaScrip Immutability 강의 정리

- mutability : 정보의 원본이 변경될 수 있음
- immutability : 정보 원본의 훼손을 막는 것

정보세계의 4가지

- Create, Read, Update, Delete
- 가장 중요한 것은 Create와 Read
- origin
- 많은 정보들이 불변하거나 불변하고 싶어함
- 디지털에서는 무작위하게 정부, 수정이 가능하지만 이것을 제어할 필요가 있음

## 이름에 대한 불변함: const vs var

- 값의 이름을 어떻게 불변하게 할 것인가
- 변수는 이름이 가르키는 값이 계속 변할 수 있음
- 상수 변수는 한번 어떠한 값을 가르키게 되면 다른 값으로 변경되는 것을 금지하고 변경을 시도하였을시 에러를 발생시킴

## 변수 할당 방식 비교

- 원시(자) 데이터타입(Primitive) : Number, String, Boolean, Null, Undefined, Symbol
- 객체(Object) : Object, Array, Function
- 객체는 서로 연관된 정보를 정리정돈하는데 사용한다는 공통적인 특징이 있음

## 초기 값의 비교

```js
var p1 = 1;
var p2 = 2;
p1 === p2; // true
```

p1,p2는 같은 값을 가르키게 됨.

값이 같으면 같은 메모리 주소를 가르킴

```js
var o1 = { name: "kim" };
var o2 = { name: "kim" };
o1 === o2; // false
```

- 객체는 값이 같더라도 다른 메모리 주소를 가르킴.
- 이유 : 객체는 바꿔질 수 있는 가변성을 가지고 있기 때문임

## 객체의 가변성

- 객체는 별도의 값들로 만들어서 참조하고 원시 데이터 타입은 값이 달라져야 참조하는 것도 달라짐
- 원시 데이터 타입은 필요할때 까진 새로운 것을 만들지 않음
- 객체는 생성할때 마다 새로운 객체를 만듬

- 객체에서는 값을 프로퍼티를 통해서 변경할 수 잇음

```js
var o1 = { name: "kim" };
var o2 = { name: "kim" };
var o3 = o1;
o3.name = "lee";
```

- 원본데이터인 o1의 값도 변경되어 버림

## 객체의 복사

```js
var o1 = { name: "kim" };
var o2 = o1;
o2.name = "lee";
console.log(o1, o2); // {name: "lee"} {name: "lee"}
```

```js
var o1 = { name: "kim" };
var o2 = Object.assign({}, o1);
o2.name = "lee";
console.log(o1, o2); // {name: "kim"} {name: "lee"}
```

## 중첩된 개체의 복사

Nested object

```js
var o1 = { name: "kim", score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score.push(3);
```

- score의 값인 `[1,2]`는 별도의 공간에 저장되게 됨 (배열의 위치를 저장)
- 프로퍼티의 값이 오브젝트인 경우에는 값을 복제하는 것이 아니라 위치를 복제함 (복제한 곳에서 복제된 프로퍼티를 변경시 원본에 있던 값도 같이 변경됨)

```js
var o1 = { name: "kim", score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat();
o2.score.push(3);
```

- push는 원본을 변경시킴
- concat은 원본을 복제하고 거기에 인자로 들어온 값을 추가함
- 인자를 넣지 않으니 복제만 됨
- 복제 : concat, slice, Array.from()
- 위와 같은 방식으로 하면 원본이 불변함을 유지할 수 있음

## 불변의 함수 만들기

- 의도하지 않은 사이드이펙트가 버그를 발생시킴 (의도 하였다면 상관 없음)

## 가변과 불변 API 비교

- 원본을 참조하는 모든 것들이 변화하길 바라면 가변 API를 쓰면 되지만 아니라면 불변 API를 사용해야함
- 원본을 바꾸게 되면 복제라는 단계를 지나지 않아서 빠름
- concat 등을 사용하면 복제를 하기때문에 성능은 나쁨

## Object freeze로 객체를 불변하게 만들기

- `Object.freeze` : 객체를 수정 불가능하게 만듬 (객체의 프로퍼티를 얼림)
- push 등으로 변경이 가능한데 이것은 객체에 경우 레퍼런스만 해당 공간에 저장하기 때문에 값 자체는 변경이 가능함 => 그렇기 때문에 객체안의 객체도 얼려주어야 불변하도록 할 수 있음

## const vs. Object.freeze

```js
const o1 = { name: "kim" };
Object.freeze(o1);
const o2 = { name: "kim" };
o1 = o2;
o1.name = "lee";
```

- Object.freeze는 값 자체가 바꿔지는 막는 것 => 값을 규제함
- const는 이름이 가르치는 것을 다른 것으로 바꾸지 못하게 막는 것 => 이름을 규제함
