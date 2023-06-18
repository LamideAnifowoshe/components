import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "efky1",
      label: "hey click me",
      content: "Thanks for clicking me",
    },
    {
      id: "efky2",
      label: "hey click me 2",
      content: "Thanks for clicking me 2",
    },
    {
      id: "efky3",
      label: "hey click me 3",
      content: "Thanks for clicking me 3",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
