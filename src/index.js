import React from "react"
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';  //React 18 Syntax

// stateless functional component
// always returns JSX

// JSX rules
// return single element(just like vue parent div)
// div/section/article or Fragment
// use camelCase for html attributes (e.g use onClick="" instead of onclick="")
// className instead of class (e.g className="mx-3 my-2 d-flex", instead of class="mx-3 d-flex")
// close every element (e.g you can't do <img src="" alt="">, you have to use <img src="" alt="" /> to the close tag properly. Another example is <input type="button" value="" /> and not <input type="button" value="">).
// formatting (e.g use opening and closing brackets when returning JSX e.g return ( <div> <h4>This is my first component</h4> </div> ) )

// function Greeting(){
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h1>My name is John Doe</h1>
// const Message = () => <h4>This is my first component</h4>

// ReactDOM.render(<Greeting />, document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('app'));    //React 18 Syntax
// root.render(<App tab="home" />);                                     //React 18 Syntax

function Booklist(){
  return (
    <section> This is a booklist </section>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
