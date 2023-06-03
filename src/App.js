import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          Click Me!
        </Button>
      </div>

      <div>
        <Button outline secondary>
          <GoCloudDownload />
          Add to Cart
        </Button>
      </div>

      <div>
        <Button success>Buy Me!</Button>
      </div>

      <div>
        <Button warning rounded>
          <GoDatabase />
          View Cart
        </Button>
      </div>

      <div>
        <Button outline danger>
          Shipping Details
        </Button>
      </div>
    </div>
  );
}

export default App;
