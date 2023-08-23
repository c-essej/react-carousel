import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 * - leftArrow only visible if currCardIdx !== 0
 * - rightArrow only visible if currCardIdx !== 2
 * //TODO: move down
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrement currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  //if currCardIdx === 2 hide right arrow;
  //if currCardIdx === 0 hide left arrow;

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx !== 0 && <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx !== 2 && <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}
//TODO: use length instead & < >

export default Carousel;
