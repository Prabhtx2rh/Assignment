// Do not change the classNames of the elements from the default markup

      // Create the state variables for name, email, and about.
      // Add handlers for each input field to capture the user input.

      let name = "";
      let email = "";
      let about = "";

      const Card = () => (
        <div className="card">
          {/* Display the values of name, email, and about dynamically */}
          <h3>Name: {name}</h3>
          <p>Email: {email}</p>
          <p>About: {about}</p>
        </div>
      );
      function handleCard(event){
        const value = event.target.value;
        const placeholder = event.target.placeholder;
        if(placeholder === "Name"){
          name= value;
        } else if(placeholder === "Email"){
          email = value;
        } else if(placeholder === "About"){
          about = value;
        }
       rootElement.render(<App />);
      }

      const App = () => (
        <div className="App">
          {/* TODO: Add the Card component here to render the user's input values (name, email, about).*/}
          <Card />
          
          <div className="inputs">
            {/* Add event handlers to capture the input value with the use of correct event*/}
            <input onChange ={handleCard} placeholder="Name" />
            <input onChange ={handleCard} type="email" placeholder="Email" />
            <textarea onChange ={handleCard} placeholder="About"></textarea>
          </div>
        </div>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);