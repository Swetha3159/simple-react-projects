import "./App.css";
//import Accordian from "./components/accordian";
//import Accordian from "./components/accordian/accordian";
//import Randomcolor from "./components/randomColor";
// import StarRating from "./components/starRating";
//import ImageSlider from "./components/image-slider";
// import LoadMoreButton from "./components/load-more-button";
import Treeview from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Randomcolor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreButton /> */}
      <Treeview menus={menus} />
    </div>
  );
}

export default App;
