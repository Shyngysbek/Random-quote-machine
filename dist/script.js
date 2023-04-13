import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import * as mathjs from "https://cdn.skypack.dev/mathjs@11.5.0";

const QUOTE = [
{ author: "Oscar Wilde", text: "“Be yourself; everyone else is already taken.”" },
{ author: "Albert Einstein", text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
{ author: "Frank Zappa", text: "“So many books, so little time.”" },
{ author: "Marcus Tullius Cicero", text: "“A room without books is like a body without a soul.”" },
{ author: "Bernard M. Baruch", text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" },
{ author: "Dr. Seuss", text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" },
{ author: "Mae West", text: "“You only live once, but if you do it right, once is enough.”" },
{ author: "Mahatma Gandhi", text: "“Be the change that you wish to see in the world.”" }];


const COLOR = ["#CAF4F4", "#FCFFE9", "#FFF2CC", "#FDE0D9", "#CAEFD1"];
const COLOUR = ["red", "blue", "lime", "orange", "pink"];
let style = {
  backgroundColor: "lightblue" };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuoteIndex: Math.floor(Math.random() * QUOTE.length),
      randomColorIndex: Math.floor(Math.random() * COLOR.length) };

    this.handleRandomQuote = this.handleRandomQuote.bind(this);
  }
  handleRandomQuote() {
    this.setState({
      randomQuoteIndex: Math.floor(Math.random() * QUOTE.length),
      randomColorIndex: Math.floor(Math.random() * COLOR.length) });

    // style.backgroundColor = COLOUR[randomColorIndex];
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "main", style: { backgroundColor: COLOR[this.state.randomColorIndex] } }, /*#__PURE__*/
      React.createElement("div", { id: "main-box" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/
      React.createElement("p", null, QUOTE[this.state.randomQuoteIndex].text)), /*#__PURE__*/

      React.createElement("div", { id: "author" }, /*#__PURE__*/
      React.createElement("h2", null, "-", QUOTE[this.state.randomQuoteIndex].author)), /*#__PURE__*/

      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-md-4" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", class: "btn btn-primary btn-block", onClick: this.handleRandomQuote }, "New Quote")), /*#__PURE__*/

      React.createElement("div", { class: "col-md-8" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", class: "btn btn-warning", href: "https://twitter.com/intent/tweet", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fa-brands fa-twitter" }))))), /*#__PURE__*/



      React.createElement("h2", { id: "madeBy" }, "by ", /*#__PURE__*/React.createElement("span", null, "Shyngysbek")))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));