import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function MegaMenu() {
  let acc = [
    {
      title: "Category 1",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 2",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 3",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 4",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 5",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 6",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 7",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 8",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 9",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 10",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 11",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 12",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 13",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 14",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 15",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Category 16",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/44/44289.png",
      items: ["Item 1", "Item 2"],
    },
  ];
  const [accordions, setAccordions] = useState(acc);

  function handleDropDown(event) {
    event.classList.toggle("active");

    let panel = event.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        {accordions.map((accordion, index) => (
          <>
            <Button
              key={index}
              className="accordion"
              onClick={(e) => handleDropDown(e.target)}
            >
              <img
                className="accordionMenuIcon me-2"
                src={accordion.iconSrc}
                alt=""
              />
              {accordion.title}
            </Button>

            <div className="panel">
              <ul>
                {accordion.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="accordionItem">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
