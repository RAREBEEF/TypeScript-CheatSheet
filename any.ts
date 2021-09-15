// any는 한 번 등장하면 어디까지 이어질지 모르는 누수가 발생할 수 있다.
// 함수의 매개변수를 any로 설정했을 때 내부 로직을 여러번 거쳤어도 반환값의 타입은 any로 유지되었다.
function any(parameter: any) {
  const a = parameter;
  const b = a;
  const c = b;
  return c
};

const d = any(1);



// any 타입으로 매개변수를 받더라도 내부에서 매개변수를 number로 규정하여 any의 누수를 막을 수 있다.
function any2(a: any) {
  const b:number = a;
  const c = b;
  return c
};

const e = any2(1)

