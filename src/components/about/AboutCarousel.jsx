import "./about.css";
export default function AboutCarousel(props) {
  const cards = [
    { content: "Text", index: 1 },
    { content: "Text", index: 2 },
    { content: "Text", index: 3 },
    { content: "Text", index: 4 },
    { content: "Text", index: 5 },
    { content: "Text", index: 6 },
    { content: "Text", index: 7 },
    { content: "Text", index: 8 },
    { content: "Text", index: 9 },
  ];
  const listCards = cards.map((card) => (
    <div className="card">{card.content}</div>
  ));
  return (
    <div className="scroll-parent">
      <div className="scroll-element primary">{listCards}</div>
      <div className="scroll-element secondary">{listCards}</div>
    </div>
  );
}
