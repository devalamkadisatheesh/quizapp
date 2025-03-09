export const questions = {
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used to define an image in HTML?", options: ["<img>", "<image>", "<picture>", "<figure>"], answer: "<img>" },
        { question: "What is the purpose of the <head> tag in HTML?", options: ["Contains metadata", "Defines body content", "Creates a footer", "None of the above"], answer: "Contains metadata" },
        { question: "Which attribute specifies an alternative text for an image?", options: ["alt", "title", "src", "href"], answer: "alt" },
        { question: "What does the <title> tag define?", options: ["Page title", "Main heading", "Footer", "Navigation bar"], answer: "Page title" },
        { question: "Which tag is used for creating a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
        { question: "What is the default display property of a <div> element?", options: ["block", "inline", "flex", "grid"], answer: "block" },
        { question: "Which tag represents the largest heading in HTML?", options: ["<h1>", "<h2>", "<h3", "<h6>"], answer: "<h1>" },
        { question: "What is the correct way to create an ordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ol>" },
        { question: "Which tag is used to create a table in HTML?", options: ["<table>", "<tr>", "<td>", "<tab>"], answer: "<table>" }
    ],
    css: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style System", "Cascading System Style"], answer: "Cascading Style Sheets" },
        { question: "Which property is used to change text color?", options: ["color", "text-color", "font-color", "background-color"], answer: "color" },
        { question: "Which CSS unit is relative to the font-size of the root element?", options: ["rem", "em", "px", "%"], answer: "rem" },
        { question: "Which display property makes an element a flex container?", options: ["flex", "grid", "block", "inline"], answer: "flex" },
        { question: "Which property is used to set background images?", options: ["background-image", "background", "img-src", "image"], answer: "background-image" },
        { question: "Which CSS property controls the space between lines of text?", options: ["line-height", "spacing", "text-indent", "height"], answer: "line-height" },
        { question: "Which property is used to make text bold?", options: ["font-weight", "bold", "text-style", "weight"], answer: "font-weight" },
        { question: "What is the default position of an element in CSS?", options: ["static", "relative", "absolute", "fixed"], answer: "static" },
        { question: "Which property is used for rounded corners?", options: ["border-radius", "corner", "radius", "border-style"], answer: "border-radius" },
        { question: "Which pseudo-class selects the first child of an element?", options: [":first-child", ":nth-child(1)", ":first", ":only-child"], answer: ":first-child" }
    ],
    javascript: [
        { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
        { question: "What does `typeof null` return?", options: ["null", "object", "undefined", "string"], answer: "object" },
        { question: "Which method converts a JSON string into an object?", options: ["JSON.parse", "JSON.stringify", "JSON.object", "parse.JSON"], answer: "JSON.parse" },
        { question: "Which function is used to delay execution of code?", options: ["setTimeout", "setInterval", "delay", "timeout"], answer: "setTimeout" },
        { question: "Which operator is used for strict comparison?", options: ["===", "==", "!=", "!=="], answer: "===" },
        { question: "Which built-in method removes the last element of an array?", options: ["pop", "push", "shift", "splice"], answer: "pop" },
        { question: "What does NaN stand for?", options: ["Not a Number", "No assigned Number", "Not an Null", "Next available Number"], answer: "Not a Number" },
        { question: "Which statement is used to handle exceptions in JavaScript?", options: ["try...catch", "error...catch", "exception", "catch"], answer: "try...catch" },
        { question: "Which loop will always execute at least once?", options: ["do...while", "while", "for", "forEach"], answer: "do...while" },
        { question: "Which method is used to add a new element to an array?", options: ["push", "pop", "unshift", "splice"], answer: "push" }
    ],
    react: [
        { question: "What is React primarily used for?", options: ["Building user interfaces", "Server-side programming", "Database management", "Operating system development"], answer: "Building user interfaces" },
        { question: "Which hook is used to manage state in a functional component?", options: ["useState", "useEffect", "useReducer", "useRef"], answer: "useState" },
        { question: "What is JSX?", options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "None of the above"], answer: "JavaScript XML" },
        { question: "Which method is used to render components in React?", options: ["ReactDOM.render", "React.render", "ReactDOM.create", "renderDOM"], answer: "ReactDOM.render" },
        { question: "What is the virtual DOM in React?", options: ["A lightweight representation of the actual DOM", "An alternative to HTML", "A type of database", "A real DOM replacement"], answer: "A lightweight representation of the actual DOM" },
        { question: "Which lifecycle method is invoked after a component is rendered?", options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "shouldComponentUpdate"], answer: "componentDidMount" },
        { question: "What is React Router used for?", options: ["Managing navigation in a React application", "Managing state", "Styling components", "Handling HTTP requests"], answer: "Managing navigation in a React application" },
        { question: "Which attribute in JSX is used for adding inline styles?", options: ["style", "css", "class", "styles"], answer: "style" },
        { question: "What is the default state management library in React?", options: ["React has no built-in state management library", "Redux", "Context API", "MobX"], answer: "React has no built-in state management library" },
        { question: "How do you pass data to a component in React?", options: ["Using props", "Using state", "Using context", "Using reducers"], answer: "Using props" }
    ]
};
