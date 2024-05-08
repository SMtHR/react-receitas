import Item from "./Item";

export default function Ingredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={self.crypto.randomUUID()} item={item} />
        ))
      )}
    </div>
  );
}
