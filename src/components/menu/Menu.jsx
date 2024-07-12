import SmoothScroll from "./SmoothScroll";
import dynamic from "next/dynamic";
import Projects from "./projects";

const Earth = dynamic(() => import("./Earth"), {
  ssr: false,
  loading: () => (
    <img src="/models/earth/placeholder.png" className="w-1/2"></img>
  ),
});

const Menu = () => {
  return (
    <SmoothScroll>
      <nav
        className="w-full h-[80vw] sm:h-[60vw] flex justify-center items-center bg-black"
        id="menu"
      >
        <Projects />
        <Earth />
      </nav>
    </SmoothScroll>
  );
};

export default Menu;
