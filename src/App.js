import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary>Click Me!</Button>
      </div>

      <div>
        <Button secondary>Add to Cart</Button>
      </div>

      <div>
        <Button success>Buy Me!</Button>
      </div>

      <div>
        <Button warning>View Cart</Button>
      </div>

      <div>
        <Button danger>Shipping Details</Button>
      </div>
    </div>
  );
}

export default App;
