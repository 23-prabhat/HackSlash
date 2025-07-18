import React, { useState } from 'react';

const requiredDocs = [
  { label: 'PAN Card', id: 'pan' },
  { label: 'Aadhaar Card (Front)', id: 'aadhaarFront' },
  { label: 'Aadhaar Card (Back)', id: 'aadhaarBack' },
  { label: 'GST Certificate (PDF)', id: 'gst' },
  { label: 'Company Registration Certificate', id: 'registration' },
  { label: 'Ownership or Rent Agreement', id: 'addressProof' },
  { label: 'Quality Control Certificate (Optional)', id: 'qc' }
];

const DocumentForm = ({ category }) => {
  const [formData, setFormData] = useState({});

  const handleFileChange = (id, file) => {
    setFormData((prev) => ({ ...prev, [id]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with Firebase upload or backend API
    alert('Documents submitted successfully!');
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Required Documents for {category}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {requiredDocs.map((doc) => (
          <div key={doc.id}>
            <label className="block mb-1">{doc.label}</label>
            <input
              type="file"
              accept={doc.id === 'gst' ? '.pdf' : 'image/*'}
              onChange={(e) => handleFileChange(doc.id, e.target.files[0])}
              className="w-full border p-2 rounded"
              required={doc.id !== 'qc'}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;
