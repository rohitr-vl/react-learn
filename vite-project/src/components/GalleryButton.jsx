import { useRef } from "react";

const ButtonGallery = () => {
  let ref = useRef(0);
  return <button onClick={countClicks}>Click Gallery Button!</button>;

  function countClicks() {
    ref.current = ref.current + 1;
    console.log("Click Count:" + ref.current);
  }
};

export default ButtonGallery; // Default export

export const Gallerys = () => {
  return (
    <section>
      <h1>Amazing Gallery</h1>
      <ButtonGallery />
    </section>
  );
};
