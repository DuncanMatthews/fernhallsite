import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='reviews-form-label'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <div className='reviews-form-label'>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <div className='reviews-form-label'>
      <label>
        Write your review:
        <input
          type="review"
          name="review"
          value={formData.review || ''}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
