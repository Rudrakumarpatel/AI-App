import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ResultDisplay from "./components/ResultDisplay";

const App: React.FC = () => {
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>AI Code Analyzer</h1>
      <FileUpload onResult={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default App;
