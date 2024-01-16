import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/SideBar.js';
import '../index.css';
import { postAccordion, getAccordions, deleteAccordion, editAccordion } from '../Http/Requests';

const AccordionManagment = () => {
  const [accordion, setAccordion] = useState([]);
  const [accordionForm, setAccordionForm] = useState({ question: '', answer: '' });
  const [editMode, setEditMode] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getAccordions();
      setAccordion(response);
    } catch (error) {
      console.error('Error fetching data:', error.message || error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this accordion?');
    if (confirmDelete) {
    try {
      console.log(`Deleting accordion with ID: ${id}`);
      await deleteAccordion(id);
      console.log(`Accordion with ID ${id} deleted successfully`);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting accordion:', error);
    }
  }
};

  const handleEdit = (id) => {
    const accordionToEdit = accordion.find((item) => item.id === id);
    setEditMode(id);
    setAccordionForm({ question: accordionToEdit.question, answer: accordionToEdit.answer });
  };

  // Example usage in your component
const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    if (editMode !== null) {
      const updatedAccordion = {
        question: accordionForm.question,
        answer: accordionForm.answer,
      };
      console.log('Updated Accordion:', updatedAccordion);
      await editAccordion(editMode, updatedAccordion);
      fetchData();
      setEditMode(null);
    } else {
      if (accordionForm.question !== '' && accordionForm.answer !== '') {
        await postAccordion(accordionForm);
        setAccordionForm({ question: '', answer: '' });
        fetchData();
      }
    }
  } catch (error) {
    console.error('Error:', error.message || error);
  } finally {
    setLoading(false);
  }
};

// ...


  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboardHeroHolder">
      <DashboardLayout />
      <form className="dashboardForm" onSubmit={onSubmitHandler}>
        <h2>FAQ Management</h2>
        <div className="formSection">
          <h3>{editMode !== null ? 'Edit FAQ' : 'Add FAQ'}</h3>
          <div className="formRow">
            <label className="label">
              Question:
              <textarea
                className="textarea"
                value={accordionForm.question}
                onChange={(e) => setAccordionForm({ ...accordionForm, question: e.target.value })}
              />
            </label>
            <label className="label">
              Answer:
              <textarea
                className="textarea"
                value={accordionForm.answer}
                onChange={(e) => setAccordionForm({ ...accordionForm, answer: e.target.value })}
              />
            </label>
            <button type="submit">{editMode !== null ? 'Save FAQ' : 'Add FAQ'}</button>
          </div>
        </div>

        <div className="faqList">
          <h3>FAQ List</h3>
          {accordion.map((item) => (
            <div key={item.id} className="faqItem">
              <div>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>

              <div className="faqCardContainer">
                <div className="editButtons">
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AccordionManagment;
