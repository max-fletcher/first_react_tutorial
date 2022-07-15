// IMPORTS
import React from "react"
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';  //React 18 Syntax
import bunchOfAnotherBooks from "./books";
import AnotherBook from "./AnotherBook";

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
		<AnotherBook image={firstAnotherBook.image} title={firstAnotherBook.title} author={firstAnotherBook.author} > {/* This is passing props from an object declared above*/}
			<p>
				maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed
			</p>
		</ AnotherBook>
		<AnotherBook image={secondAnotherBook.image} title={secondAnotherBook.title} author={secondAnotherBook.author} />
		{bunchOfAnotherBooks.map((book) => {
				return (
					<AnotherBook key={book.id} image={book.image} title={book.title} author={book.author} />
					// If you don't pass a key prop, then react will complain about having a missing key(only for components in a loop).
					// If you did this, <AnotherBook book={book} you could call the props like this inside AnotherBook->
					// props.book.title & props.book.title etc. Not doing it here since it might ruin the integrity of the current structure
				)
			})
		}

		{/* If you don't pass a key prop, then react will complain about having a missing key(only for components in a loop). */}
		{/* Here is an alternative if you don't have an id inside the objects you are looping through. */}
		{/* {bunchOfAnotherBooks.map((book, index) => {
			return (
				<AnotherBook key={index} image={book.image} title={book.title} author={book.author} />
			)
		}) } */}
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
	id: 1,
	image: 'http://via.placeholder.com/250x360?text=Visit+WhoIsHostingThis.com+Buyers+Guide',
	title: 'Another Book Title 1',
	author: 'Another Author 1'
}

// same as above
const secondAnotherBook = {
	id: 2,
	image: 'http://via.placeholder.com/250x360?text=Some+Text+LOL+GGWP',
	title: 'Another Book Title 2',
	author: 'Another Author 2'
}

// bunchOfAnotherBooks has been moved to books.js file. Otherwise, it would be here but hoisted up as per JS render rules.

// AnotherBook moved to AnotherBook.js file and imported. Otherwise, it would be here.

// Image is coming from the const image variable near the top.
const Image = () => {
	return (
		<img src={image} alt="" />
	)
}

// Title is coming from the const title variable near the top.
const Title = () => {
	return (
		<h1> {title} </h1>
	)
}

// Author is coming from the const author variable near the top.
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
