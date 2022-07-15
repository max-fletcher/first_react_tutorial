import { greetings } from "./testing/greetings";

const AnotherBook = ( props /* {image, title, author, children} This will destructure the prop on receiving it. Use it if you wish. */
/* Otherwise, you need to receive prop as an object(single parameter) and then use with dot syntax(e.g props.author and props.children) */
/* to access the values in JSX. The children prop is special. It has to named children or it won't work. It is a tag that is nested */
/* inside the parent tag. It works like slots in vue/laravel. See below how its used. */
/* Both types of props(including the slot example) is NOT MANDATORY. If they are missing, they will simply NOT BE RENDERED(i.e blank) in JSX.*/
) => {
	// const {image, title, author} = props  
	// You can destructure the prop like this and use it inside the component if you please.
	// It can also be done inside the function parameter. See above
	console.log('Inside Another Book', props) // first way to console log
   console.log(greetings)

	const clickHandler = (e) => { // catch the event as a parameter. Can be accessed only if no parameters are present.
		console.log(e) // log the event
		console.log(e.target) // log what the event target was
		alert('Henlo ! WOW Hecc.')
	}

	const morecomplexexample = (author) => {
		alert(author)
	}

	const mouseoverEvent = (title) => {
		console.log(title)
	}

	return (
		<article className="book" onMouseOver={() => {mouseoverEvent(props.title)}}> {/* mouseOver event that logs to console the title(see above) */}
			This is another booklist
			<br></br>
			{/* <img src={props.image} alt="" />
			<h1>{props.title}</h1>
			<h6>{props.author.toUpperCase()}</h6> */}
			{/* {console.log(props)}  second way to console log */}
			<img src={props.image} alt="" />
			<h1 onClick={ () => alert(props.title) }>{props.title}</h1> {/* defining an onclick event with an inline function */}
			{props.children}
			<h6>{props.author.toUpperCase()}</h6>
			<button type="button" onClick={clickHandler}> Click Me </button> {/* defining an onclick event with a function declared separately */}
			<button type="button" onClick={() => morecomplexexample(props.author)}> More Complex Example </button> {/* same as line
			above. But you still need to pass an arrow function to make onClick work properly otherwise, react thinks you are 
			invoking the function so it runs on page load. In the current syntax, the function is invoked onclick since it is used
			as a callback.
			*/}
		</article>
	)
};

// many ways to export each with their different syntax each with their own advantages and disadvantages
// module.exports = AnotherBooks
// export AnotherBooks
export default AnotherBook