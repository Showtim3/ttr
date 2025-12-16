"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function UploadExcel() {
  const [excelData, setExcelData] = useState<any[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = await file.arrayBuffer();

    const workbook = XLSX.read(data);
    const sheetName = workbook.SheetNames[0]; // first sheet
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setExcelData(jsonData);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-gray-500">Upload Excel File</h1>

        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
          className="mb-4 text-gray-500"
        />

        <div className="mt-6">
          {excelData.length > 0 ? (
            <table className="w-full border-collapse overflow-hidden rounded-lg shadow-md">
            <thead>
              <tr className="bg-sky-600 text-white">
                {Object.keys(excelData[0]).map((header) => (
                  <th
                    key={header}
                    className="border border-sky-700 px-3 py-2 text-left font-semibold tracking-wide"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          
            <tbody>
              {excelData.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-sky-50" : "bg-white"} // alternating rows
                >
                  {Object.values(row).map((cell: any, j) => (
                    <td
                      key={j}
                      className="border border-sky-200 px-3 py-2 text-sky-900"
                    >
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          
          ) : (
            <p className="text-gray-600">No data uploaded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
