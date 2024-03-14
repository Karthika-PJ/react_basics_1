import {useState} from 'react';
import ReactComponentImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx"
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import {CORE_CONCEPTS,EXAMPLES} from "./Data.js";




function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handSelect(selectedButton){
    setSelectedTopic(selectedButton);
    

  }
  return (
    <div>
      <Header/>
      <main>
      
        <section id ="core-concepts">
          <h2> CORE CONCEPTS</h2>
          <ul>
        {/* <CoreConcepts title ={CORE_CONCEPTS[0].title} description ={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
        <CoreConcepts title ={CORE_CONCEPTS[1].title} description ={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
        <CoreConcepts title ={CORE_CONCEPTS[2].title} description ={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
        <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
        {CORE_CONCEPTS.map((conceptItem )=>(
          <CoreConcepts {...conceptItem}/>
        ))}
        </ul>
        </section>
        <section id="examples">
          <h2> Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic==='components'} onSelect ={()=>handSelect('components')}>Components</TabButton>
            <TabButton isSelected ={selectedTopic==='jsx'} onSelect ={()=>handSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic==='props'} onSelect ={()=>handSelect('props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic==='state'} onSelect ={()=>handSelect('state')}>State</TabButton>
            </menu>
      
     {!selectedTopic ?  <p>Please select a topic</p> :(<div id ="tab-content"> 
      <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
            </code>
        </pre>
        </div>)}
     
          </section>
      </main>
    </div>
  );
}

export default App;
