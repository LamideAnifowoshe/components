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
        <Button secondary outline>
          <GoCloudDownload />
          Add to Cart
        </Button>
      </div>

      <div>
        <Button success outline>
          Buy Me!
        </Button>
      </div>

      <div>
        <Button warning rounded>
          <GoDatabase />
          View Cart
        </Button>
      </div>

      <div>
        <Button danger outline>
          Shipping Details
        </Button>
      </div>
    </div>
  );
}

export default App;
