function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.display}</div>
        <div>{item.option}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
