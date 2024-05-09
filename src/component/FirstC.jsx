import { click } from "@testing-library/user-event/dist/click";


function FirstC(props) {

  console.log(props);
  // const click = ()=> {
  //   alert("click me");

  // }

  // const shoot = (a)=>{
  //   alert(a);
  // }

  const click = (a,b) =>{
    alert(b.type);
  }
    return (
        <div>
            Hello World.
      <h1> First Component</h1>
      <ol>
        <li>Anchal</li>
        <li>Naman</li>
        <li>Sourav</li>
        <li>Rahul</li>
        <li>Keshav</li>
      </ol>   
      {/* <button onClick = {click}> Click here</button> */}
      {/* <button onClick = {() => shoot("Hello")}>click</button> */}

      <button onClick = {(event)=> click("hello", event)}>Click here</button>
        </div>
    )
}

export default FirstC;