import React from "react"
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';  //React 18 Syntax

// CSS
import './index.css'
// VARIABLES
// these variable will still be available to the entire file so it will render if called e.g {author} or {title}
const title = "Some Book You Wanna Read"
const author = "Some Author Who Wrote The Book"
const image = "http://via.placeholder.com/250x360?text=Visit+WhoIsHostingThis.com+Buyers+Guide"

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
      <section className="booklist">
         <Book job="developer"/>
         <Book title="Some Title" number={22} /> {/* Inside Book component, 1st prop is rendered as string. 2nd prop is rendered as a number. */}
         <Book />
         <AnotherBook image={firstAnotherBook.image} title={firstAnotherBook.title} author={firstAnotherBook.author} >
            <p>
               maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed
            </p>
         </ AnotherBook>
         <AnotherBook image={secondAnotherBook.image} title={secondAnotherBook.title} author={secondAnotherBook.author} />
      </section>
   )
}

const Book = (props) => {
   console.log(props) // first way to console log
   return (
      <article className="book">
         This is a booklist
         <br></br>
         <Image />
         <Title />
         <Author />
         {props.job} <br></br>
         {props.title} <br></br>
         {props.number}
         {console.log(props)}  {/* second way to console log */}
      </article>
   )
};

// Just a JS object that we will pass as prop. It gets hoisted up before "BookList" function so it can still be passed into
// "AnotherBook" component as a prop.
const firstAnotherBook = {
   image: 'http://via.placeholder.com/250x360?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
   title: 'Another Book Title 1',
   author: 'Another Author 1'
}

// same as above
const secondAnotherBook = {
   image: 'http://via.placeholder.com/250x360?text=Some+Text+LOL+GGWP',
   title: 'Another Book Title 2',
   author: 'Another Author 2'
}

const AnotherBook = ( props /* {image, title, author, children} This will destructure the prop on receiving it. Use it if you wish. */
   /* Otherwise, you need to receive prop as an object(single parameter) and then use with dot syntax(e.g props.author and props.children) */
   /* to access the values in JSX. The children prop is special. It has to named children or it won't work. It is a tag that is nested */
   /* inside the parent tag. It works like slots in vue/laravel. See below how its used. */
   /* Both types of props(including the slot example) is NOT MANDATORY. If they are missing, they will simply NOT BE RENDERED(i.e blank) in JSX.*/
   ) => {
   // const {image, title, author} = props  
   // You can destructure the prop like this and use it inside the component if you please.
   // It can also be done inside the function parameter. See above
   // console.log(props) // first way to console log
   return (
      <article className="book">
         This is another booklist
         <br></br>
         {/* <img src={props.image} alt="" />
         <h1>{props.title}</h1>
         <h6>{props.author.toUpperCase()}</h6> */}
         {/* {console.log(props)}  second way to console log */}
         <img src={props.image} alt="" />
         <h1>{props.title}</h1>
         {props.children}
         <h6>{props.author.toUpperCase()}</h6>
      </article>
   )
};

const Image = () => {
   return (
      <img src={image} alt="" />
   )
}

const Title = () => {
   return (
      <h1> {title} </h1>
   )
}

// the style uses double curly braces for a reason. The first one is to denote that it contains JS inside it. The 2nd is an ojbect we are passing to
// the tag as JS properties. Also notice the lack of double quotes after the = sign. Its the norm for dealing with pure JS.
const Author = () => {
   return (
      <div>
         <h6 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}> {author.toUpperCase()} </h6>
         {/* let x = 12 (Throws error since it doesn't return anything) */}
         <p>{6 + 6}</p>
      </div>
   )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
