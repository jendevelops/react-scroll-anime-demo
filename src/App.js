import "./styles.css";
import { Controller, Scene } from "react-scrollmagic";
import Slide from "./Slide";

export default function App() {
  const slides = ["Hi! I'm slide 1!", "Hi! I'm slide 2!", "Hi! I'm slide 3!"];
  return (
    <div className="App">
      <Controller>
        {slides.map((slide, index) => (
          <Scene
            duration={500}
            triggerElement={`.slide:nth-of-type(${index + 1})`}
            pin
          >
            {(progress, event) => (
              <Slide {...{ index, progress }}>{slide}</Slide>
            )}
          </Scene>
        ))}
      </Controller>
    </div>
  );
}
