import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "efky1",
      display: "hey click me",
      option: "Thanks for clicking me",
    },
    {
      id: "efky2",
      display: "hey click me 2",
      option: "Thanks for clicking me 2",
    },
    {
      id: "efky3",
      display: "hey click me 3",
      option: "Thanks for clicking me 3",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
