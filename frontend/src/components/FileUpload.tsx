import React, { useState } from "react";
import axios from "axios";

interface FileUploadProps {
  onResult: (result: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onResult }) => {
  const [code, setCode] = useState("");

  const handleAnalyze = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/analyze", { code });
      onResult(response.data);
    } catch (error) {
      onResult("Failed to analyze the code.");
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code snippet here..."
      />
      <button onClick={handleAnalyze}>Analyze Code</button>
    </div>
  );
};

export default FileUpload;
