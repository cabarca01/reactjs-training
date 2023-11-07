import "./ResultsTable.css";

import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ parameters }) {
  const investmentResults = calculateInvestmentResults(parameters);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((row) => {
          return (
            <tr key={"year_"+row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
