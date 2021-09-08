import SectionOne from './containers/Section_One/Section_One';
import SectionTwo from './containers/Section_Two/Section_Two';
import SectionThree from './containers/Section_Three/Section_Three';
import './App.scss';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <AnimatedCursor 
        innerSize={8}
        outerSize={12}
        color='255, 131, 3'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
