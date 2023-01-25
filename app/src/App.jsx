import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Editor from '@monaco-editor/react';
import './App.css';

const files = {
  'script.py': {
    name: 'script.py',
    language: 'python',
    value: 'Here is some Python Code...',
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '<div>Here is some HTML Code...</div>',
  },
};
function App() {
  const [fileName, setFileName] = useState('script.py');
  const file = files[fileName];

  return (
    <div className="App">
      <button onClick={() => setFileName('index.html')}>
        Switch to index.html
      </button>
      <button onClick={() => setFileName('script.py')}>
        Switch to script.py
      </button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      ></Editor>
    </div>
  );
}

export default App;
