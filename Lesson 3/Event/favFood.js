 const food = {
        pizza: {
          name: "Pizza",
          image:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/shourav-sheikh-a66sGfOnnqQ-unsplash_dufyvk.jpg",
        },
        burger: {
          name: "Burger",
          image:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/food-photographer-E94j3rMcxlw-unsplash_kuljtd.jpg",
        },
        pasta: {
          name: "Pasta",
          image:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
        },
        sushi: {
          name: "Sushi",
          image:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294934/assets/pixzolo-photography-aeESmmFKH0M-unsplash_wag5lc.jpg",
        },
        chickenBiryani: {
          name: "Chicken Biryani",
          image:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1672294935/assets/mario-raj-ysmeQt1dzcw-unsplash_ivdvre.jpg",
        },
      };

      let favouriteFood;

      // Task: Refactor to create a single handleFoodClick function that works for all items

      const handleFoodClick=(foodKey) => {
        favouriteFood = food[foodKey];
         rootElement.render(<App />);
      }
 
      const FavouriteFood = () => (
        <div className="favourite-food">
          <span>Your favourite food is:</span>
          <h3>{favouriteFood.name}</h3>
          <img src={favouriteFood.image} />
        </div>
      );

      const App = () => (
        <div className="App">
          {/* Hint: Use logical && to render FavouriteFood only if favouriteFood is defined */
          favouriteFood && <FavouriteFood />
          }
          {/* Write code here to render the FavouriteFood component conditionally */}
          <h2>Select your favourite food</h2>
          <div className="food-list">
            {/* Refactor the onClick handlers below to use a single handler function */}
            <div onClick={()=>{handleFoodClick("pizza")}}>
              <h3>{food.pizza.name}</h3>
              <img src={food.pizza.image} />
            </div>

            <div onClick={()=>{handleFoodClick("burger")}}>
              <h3>{food.burger.name}</h3>
              <img src={food.burger.image} />
            </div>

            <div onClick={()=>{handleFoodClick("pasta")}}>
              <h3>{food.pasta.name}</h3>
              <img src={food.pasta.image} />
            </div>

            <div onClick={()=>{handleFoodClick("sushi")}}>
              <h3>{food.sushi.name}</h3>
              <img src={food.sushi.image} />
            </div>

            <div onClick={()=>{handleFoodClick("chickenBriyani")}}>
              <h3>{food.chickenBiryani.name}</h3>
              <img src={food.chickenBiryani.image} />
            </div>
          </div>
        </div>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);