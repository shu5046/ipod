
export default function Menu({ selectedId ,Items}) {
  
  return (
    <>
      <div>
        
        {Items.map((items, index) => (
          <div
            key={index}
            className={`menu-item ${index === selectedId ? "selected" : ""}`}
          >
            {items}
            {index === selectedId && <span>&gt;</span>}
          </div>
        ))}
      </div>
    </>
  );
}
