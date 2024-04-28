import React, { useState } from 'react';

function Homepage() {
  const [subject, setSubject] = useState('');
  const [ia1Marks, setIA1Marks] = useState('');
  const [ia2Marks, setIA2Marks] = useState('');
  const [subjectsData, setSubjectsData] = useState([]);
  const [error, setError] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const calculatePassingMarks = (ia1, ia2) => {
    const iaAverage = (ia1 + ia2) / 2;
    return 40 - ((iaAverage * 40) / 30);
  };

  const handleCalculate = () => {
    if (subject.trim() === '') {
      setError('Please enter a subject name');
      return;
    }
    const ia1 = parseFloat(ia1Marks);
    const ia2 = parseFloat(ia2Marks);
    if (isNaN(ia1) || isNaN(ia2) || ia1 > 30 || ia2 > 30) {
      setError('Please enter valid IA marks (not greater than 30)');
      return;
    }
    const passingMarks = calculatePassingMarks(ia1, ia2);
    if (editIndex !== -1) {
      const updatedData = [...subjectsData];
      updatedData[editIndex] = { subject, ia1, ia2, passingMarks };
      setSubjectsData(updatedData);
      setEditIndex(-1);
    } else {
      const newData = [...subjectsData, { subject, ia1, ia2, passingMarks }];
      setSubjectsData(newData);
    }
    setSubject('');
    setIA1Marks('');
    setIA2Marks('');
    setError('');
  };

  const handleEdit = (index) => {
    const editItem = subjectsData[index];
    setSubject(editItem.subject);
    setIA1Marks(editItem.ia1.toString());
    setIA2Marks(editItem.ia2.toString());
    setEditIndex(index);
  };

  return (
    <div className="font-sans flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Passing Marks Calculator</h1>
        <div className="mb-8">
          <table className="w-full mb-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Subject</th>
                <th className="border p-2">IA 1 Marks</th>
                <th className="border p-2">IA 2 Marks</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full block p-2 border border-gray-300"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={ia1Marks}
                    onChange={(e) => setIA1Marks(e.target.value)}
                    max={30}
                    className="w-full block p-2 border border-gray-300"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={ia2Marks}
                    onChange={(e) => setIA2Marks(e.target.value)}
                    max={30}
                    className="w-full block p-2 border border-gray-300"
                  />
                </td>
                <td>
                  <button onClick={handleCalculate} className="w-full block p-2 border border-gray-300">{editIndex === -1 ? 'Add' : 'Update'}</button>
                </td>
              </tr>
            </tbody>
          </table>
          {error && <div className="text-red-600">{error}</div>}
        </div>
        {subjectsData.length > 0 && (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Subject</th>
                <th className="border p-2">IA 1 Marks</th>
                <th className="border p-2">IA 2 Marks</th>
                <th className="border p-2">Required Marks</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {subjectsData.map((data, index) => (
                <tr key={index}>
                  <td className="border p-2 text-center">{data.subject}</td>
                  <td className="border p-2 text-center">{data.ia1}</td>
                  <td className="border p-2 text-center">{data.ia2}</td>
                  <td className="border p-2 text-center">{data.passingMarks.toFixed(2)}</td>
                  <td className="border p-2">
                    <button onClick={() => handleEdit(index)} className="w-full block p-2 border border-gray-300">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Homepage;
