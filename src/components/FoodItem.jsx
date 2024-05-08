import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <h1 className={styles.itemName}>{food.title}</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          Ver Receita
        </button>
      </div>
    </div>
  );
}
