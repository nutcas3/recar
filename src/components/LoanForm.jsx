import React, { useState } from "react";

function LoanForm({ onPredict }) {
  const [applicantData, setApplicantData] = useState({
    income: 0,
    creditScore: 0,
    loanAmount: 0,
    loanTerm: 0,
    assets: 0,
    mortgage: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setApplicantData({ ...applicantData, [name]: parseFloat(value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPredict(applicantData);
  };

  return (
    <div className="LoanForm bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Loan Health Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Income:</label>
          <input
            type="number"
            name="income"
            value={applicantData.income}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Credit Score:</label>
          <input
            type="number"
            name="creditScore"
            value={applicantData.creditScore}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Loan Amount:</label>
          <input
            type="number"
            name="loanAmount"
            value={applicantData.loanAmount}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Loan Term (months):</label>
          <input
            type="number"
            name="loanTerm"
            value={applicantData.loanTerm}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Assets:</label>
          <input
            type="number"
            name="assets"
            value={applicantData.assets}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Mortgage:</label>
          <input
            type="number"
            name="mortgage"
            value={applicantData.mortgage}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Predict
        </button>
      </form>
    </div>
  );
}

export default LoanForm;
