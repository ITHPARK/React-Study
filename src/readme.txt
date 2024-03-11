### 'JSX (Javascript Syntax Extension)' ;

자바스크리브의 확장 문법. 리액트에서 JSX를 이용해서 회면에서 UI를 출력해준다.

const simple = <h1>Hello World</h1>;

위 처럼 자바스크립트와 html구조가 혼용되어 UI의 데이터가 변하는 것들이나 이벤트들이 처리되는 부분을 더욱 쉽게 구현 가능하다.

**JSX문법으로 작성하면 bable이 자동으로 문법을 변환시켜서 적용이 된다.**

*리액트 주의사항*

- 컴포넌트 안에 루트 엘리먼트는 무조건 1개여야한다. (컴포넌트 내 최상단에 형제요소 태그가 있으면 안된다. 부모는 무조건 1개)





### '리액트에서 화면을 그리는 방식 (JSX를 사용 안 할 때)'

React.createElement Api를 사용해서 엘리먼트를 생성한 후 이 엘리먼트를 in-Memory에 저장 후 ReactDeom.render 함수를 사용해서 실제 웹 브라우저에서 그려주는 방식이다.

*아래의 방식으로 엘리먼트를 생성 후 출력한다.

const myelement = React.createElemnet('h1', {}, 'I do not use JSX');
ReactDOM.render(document.getElementById('root'));



### Props 

다른 컴포넌트에게 데이터를 전달해줄 때 사용. A라는 부모 컴포넌트가 B라는 자식 컴포넌트에게 데이터를 전달. 전달받은 데이터는 읽기 전용으로 자식 컴포넌트에서는 변하지 않는다. 
(변경을 원할 시) 부모 컴포넌트에서 state를 변경을 해줘야한다.

ex.

  renderSquare (i) {
      return <Square  value={i} />
  }

  위처럼 부모 컴포넌트에서 함수를 생성하고 리턴값으로 자식 컴포넌트를 설정 그리고 원하는 
  props(속성) 이름과 값을 할당.

  

  export class Square extends Component {
    render () {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
  }

  그리고 자식 컴포넌트로 넘어와 {this.props.속성이름}으로 호출하면 됨



  ### state
  
  컴포넌트 안에서 데이터를 기억하기 위해서 사용.
  클래스형 컴포넌트에서는 Constructor를 사용해서 state를 만든다.
  state가 변경되게 되면 컴포넌트는 다시 렌더링 하게 된다.

  constructor란?

  인스턴스화 된 객체에서 다른 메서드를 호출하기 전에 수행해야하는 사용자 지정 초기화를 제공 할 수 있다.

  예시코드
 
  class User {

    cosntructor(name) {
        this.name = name;
    }

    sayName() {
        alert(this.name);
    }

  }

  let user = new User("John");
  user.sayName  => John 문구가 삽입된 알림창을 띄움

  super? 

  자식 클래스 내에서 부모 클래스의 생성자, 메서드를 호출할 때 사용됨.

  자식 클래스에서 this를 이용하여 새로운 프로퍼티를 부여하거나 상속받은 프로퍼티를 수정하고
  싶다면 먼저 super()를 이용하여 부모 클래스의 기존 프로퍼티 값을 호출해야 한다.


  리액트에서 super에 props를 인자로 전달하는 이유는?

  컴포넌트 객체가 생성될 때 props 속성을 초기화하기 위해서 부모컴포넌트에 props를 전달

  
   
### 라액트 불변성 지키기

자바스크립트의 원시 타입은 불변성을 가지고 있고 참조 타입은 그렇지 않다

원시타입 : Boolean, String, Number, null, undefined, Symbol
참조타입: Object, Array

원시타입은 고정된 크기로 Call Stack 메모리에 저장
참조타입은 데이터의 크기가 정해지지 않고 Call Stack 메모리에 저장 데이터 값이 heap에 저장되며 변수에 heap메모리 주소값이 할당.


원시타입은 변수의 값이 변경 되어도 이전 값은 메모리 영역 a에 남아있고 새로운 값을 메모리 영역 b에 할당하는 방식이다.
참조타입은 배열의 요소나 객체의 값이 변경되는 경우 Call Stack의 참조 ID는 동일하게 유지되고 heap 메모리에서만 변경이 된다. (변경된 새로운 값이 다른 영역에 저장되는게 아닌 동일 위치에서 내용이 바뀌는 것임)
 
이전 값과 비교하기 위해 불변성을 지켜줘야한다.

불변성을 지키는 방법은?

새로운 배열을 반환하는 메소드를 사용하면 된다. (spread operator, map, filter, slice, reduce)

원본 데이터 값을 변경하는 메소드 : splice, push



### react hooks


