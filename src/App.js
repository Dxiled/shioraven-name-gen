import './App.css';
import { useEffect, useState } from 'react';
const names = require('./names.json');

function App() {

  const [namesList, setNamesList] = useState('');

  function GenerateName(number, mfb) {
    var male;
    if (mfb === 0) {
      male = true;
    } else if (mfb === 1) {
      male = false;
    } else {
      if (Math.random() > 0.5) {
        male = true;
      } else {
        male = false;
      }
    }
    var firstName;
    if (male) {
      firstName = names.maleNames.at(Math.floor(Math.random() * names.maleNames.length));
    } else {
      firstName = names.femaleNames.at(Math.floor(Math.random() * names.femaleNames.length));
    }
    const middleName = names.numberNames.at(number).at(Math.floor(Math.random() * names.numberNames.at(number).length));
    const chunniNoun = names.chunniNouns.at(Math.floor(Math.random() * names.chunniNouns.length));
    const chunniVerb = names.chunniVerbs.at(Math.floor(Math.random() * names.chunniVerbs.length));
    const lastName = names.lastNames.at(Math.floor(Math.random() * names.lastNames.length));
    const finalName = `${firstName} ${middleName} ${chunniNoun} ${chunniVerb} ${lastName}`;
    return finalName;
  }

  function GenerateNames(mfb) {
    let generatedNames = [];
    for (var i = 0; i < 10; i++) {
      generatedNames.push(GenerateName(i, mfb));
    }
    return generatedNames;
  }

  const GenerateMaleNames = () => {
    const names = GenerateNames(0);
    const namesList = names.map((generatedName) =>
      <li>{generatedName}</li>
    );
    setNamesList(namesList);
  }
  const GenerateFemaleNames = () => {
    const names = GenerateNames(1);
    const namesList = names.map((generatedName) =>
      <li>{generatedName}</li>
    );
    setNamesList(namesList);
  }
  const GenerateAnyNames = () => {
    const names = GenerateNames(2);
    const namesList = names.map((generatedName) =>
      <li>{generatedName}</li>
    );
    setNamesList(namesList);
  }

  useEffect(() => {
    document.title = "ShioRaven Name Generator";
    GenerateAnyNames();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>ShioRaven Children Name Generator</h1>
      </div>
      <div className='App-body'>
        <div className='random-name-generator'>
          <ul className='generated-names'>{namesList}</ul>
        </div>
        <div className='button-container'>
          <button className='male-names' onClick={GenerateMaleNames}>Male Names</button>
          <button className='female-names' onClick={GenerateFemaleNames}>Female Names</button>
          <button className='any-names' onClick={GenerateAnyNames}>Any Names</button>
        </div>
      </div>
    </div>
  );
}

export default App;
