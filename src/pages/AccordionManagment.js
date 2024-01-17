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
    const confirmDelete = window.confirm('Are you sure you want to delete this ?');
    if (confirmDelete) {
    try {
      setAccordion(accordion.filter(accordion => accordion.id !== id));
      console.log(`Deleting accordion with ID: ${id}`);
      await deleteAccordion(id);
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
        <div className="formSection">
          <div className="formRow">
          <h3>{editMode !== null ? 'Edit FAQ' : 'Add FAQ'}</h3>
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
            <button type="submit" className="btn btn-outline-success">{editMode !== null ? 'Save' : 'Add'}</button>
          </div>
        </div>

        <div className="tableHolder">
          <h3>FAQ List</h3>
          {accordion.map((item) => (
            <div key={item.id} className="faqItem">
              <div>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>

              <div className="faqCardContainer">
                <div className="editButtons">
                  <button onClick={() => handleEdit(item.id)} className="btn btn-outline-warning">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger">Delete</button>
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
