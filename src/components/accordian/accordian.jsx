import { useState } from "react";

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

export default function Accordian() {
  const [selected, setSelected] = useState([]);
  const [isMuliple, setIsmultiple] = useState(false);

  const handleMultiSelect = () => {
    setSelected([]);
    setIsmultiple(true);
  };

  const handleSelect = (id) => {
    if (isMuliple) {
      if (selected.includes(id)) {
        const newArray = selected.filter((selectedId) => selectedId !== id);
        setSelected(newArray);
      } else {
        setSelected([...selected, id]);
      }
      console.log(selected);
    } else {
      if (selected.includes(id)) {
        // const newArray = selected.filter((selectedId) => selectedId == id);
        setSelected([]);
      } else {
        setSelected([id]);
      }
    }
  };
  return (
    <div>
      <h2 onClick={handleMultiSelect}>Enable multiselect {isMuliple + ""}</h2>
      {data.map((item) => {
        return (
          <div>
            <h1 onClick={() => handleSelect(item.id)}>{item.question}</h1>
            {selected.map((selectedId) => {
              if (selectedId === item.id) {
                return <div>{item.answer}</div>;
              } else {
                return null;
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
