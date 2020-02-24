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
