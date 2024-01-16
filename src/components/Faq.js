import React, { useEffect, useState } from "react";
import Box from '../components/Box.js';
import Accordion from './Accordion';
import { getAccordions } from '../Http/Requests';

const Faq = () => {
  const [accordion, setAccordion] = useState([]);
  // const [questions, setQuestions] = useState([]);

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
    <>
        <Box h2={'Please Refer to this Accordion to Read the Answers of the Most Asked Questions'}/>
      <div className="container">

        <div className="containerFaq">
          <div className="containerFaqInside">
            {accordion.length ?
              accordion.map((item) => {
                return <Accordion key={item.id} h3={item.question} p={item.answer} />;
              })
              : 
              <h3>There are not any questions !</h3>
            }
          </div>
        </div>        
      </div>
    </>
  );
}

export default Faq;