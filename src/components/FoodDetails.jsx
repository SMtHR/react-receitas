import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "be8a5f6e3d164de587046012daa31024";
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕛{food.readyInMinutes} minutos</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serve {food.servings} </strong>
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegetariano" : "🍖 Não-Vegetariano"}
          </span>
          <span>
            <strong>
              <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              ${Number(food.pricePerServing / 100).toFixed(2)} por pessoa
            </strong>
          </span>
        </div>
        <h2>Ingredientes:</h2>
        <Ingredients food={food} isLoading={isLoading} />
        <h2>Instruções:</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
