/* .....JAVASCRIPT.....*/
// const heading = document.createElement('h1');
// heading.textContent = "Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);

/*........React......*/

// const reactElement = React.createElement("img", { className: "imgTag",src: "https://files.codingninjas.in/coding-ninjas-24647.png",});
// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

function App() {
  return (
    <>
      <h1>React Project</h1>
      <p>Skills used to make this projects</p>
      <ol>
        <li>HTML</li>
        <li>javascript</li>
        <li>CSS</li>
      </ol>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
