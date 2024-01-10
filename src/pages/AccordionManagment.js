import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/Dashboard';
import '../index.css';
import { postAccordion,getAccordions } from '../Http/Requests';

const AccordionManagment = () => {
  const [accordion, setAccordion] = useState([]);

  const [accordionForm, setAccordionForm] = useState({ question: '', answer: '' });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (accordionForm.question !== '' && accordionForm.answer !== '') {
      setAccordionForm(null);
      if ((await postAccordion(accordionForm))) {
        setAccordionForm({ question: '', answer: '' })
      };
    }
  }
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await getAccordions();
      setAccordion(response); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dashboardHeroHolder">
      <DashboardLayout />
      <form className="dashboardForm" onSubmit={onSubmitHandler} >
        <h2>FAQ Management</h2>
        <div className="formSection">
          <h3>Add FAQ</h3>
          <div className="formRow">
            <label>
              Question:
              <textarea onChange={(e) => { setAccordionForm({ ...accordionForm, question: e.target.value }); }} />
            </label>
            <label>
              Answer:
              <textarea onChange={(e) => { setAccordionForm({ ...accordionForm, answer: e.target.value }); }} />
            </label>
            <button onSubmit={onSubmitHandler}>Add FAQ</button>
          </div>
        </div>

      </form>
      <div className="faqList">
        <h3>FAQ List</h3>
      {accordion.map((item) => (
        <div key={item.id}>
          <h4>{item.question}</h4>
          <p>{item.answer}</p>
        </div>
      ))}
        <div className="faqCardContainer">
          <div className="editButtons">
            <button >Edit</button>
            <button >Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionManagment;
