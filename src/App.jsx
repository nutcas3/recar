// src/App.js
import React, { useState } from 'react';
import './App.css';
import LoanForm from './components/LoanForm';
import PredictionResult from './components/PredictionResult';

function App() {
  const [predictionResult, setPredictionResult] = useState('');

  const handlePredict = (applicantData) => {
    // Extract data from the applicantData object
    const {
      income,
      loanAmount,
      loanTerm,
      assets, // Add assets field
      mortgage, // Add mortgage field
    } = applicantData;

    // Calculate wealthTotal as the sum of income and assets
    const wealthTotal = income + assets;

    // Calculate liabilityTotal as the sum of loanAmount and mortgage
    const liabilityTotal = (loanAmount *loanTerm)+ mortgage;

    // Calculate the wealth-to-liability ratio as a percentage
    const wealthToLiabilityRatio = (wealthTotal / liabilityTotal) * 100;

    // Determine the credit score based on the ratio
    let creditScore = '';

    if (wealthToLiabilityRatio <= 20) {
      creditScore = 'Poor Credit Score';
    } else if (wealthToLiabilityRatio <= 40) {
      creditScore = 'Fair Credit Score';
    } else {
      creditScore = 'High Risk';
    }

    setPredictionResult(creditScore);
  };

  return (
    <div className="App">

      <LoanForm onPredict={handlePredict} />
      {predictionResult && <PredictionResult result={predictionResult} />}
    </div>
  );
}

export default App;
