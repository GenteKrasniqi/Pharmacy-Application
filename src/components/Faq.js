import React, { useEffect, useState } from "react";

import AccordionFaq from './AccordionFaq';

import './Faq.css';

const Faq = () => {


  const [questions, setQuestions] = useState([]);


  useEffect(() => {


    const responsesQuestions = {
      status: 200,
      data: [
        {
          h3: "- What is Pharmacy?",
          p: `Pharmacy is the science and practice of discovering,
          producing, preparing, dispensing, reviewing and monitoring medications, aiming
          to ensure the safe, effective, and affordable use of medicines. It is a miscellaneous
          science as it links health sciences with pharmaceutical sciences and natural sciences.`
        },
        {
          h3: "- What is the role of a Pharmacist?",
          p: `Pharmacists are responsible for: Ensuring that the supply of medicines is within the law. Ensuring that the medicines prescribed
          to patients are suitable. Advising patients about medicines, including how to take them, what reactions may occur and answering patients questions`
        },
        {
          h3: "- What should I do if I accidentally take too much of my medication?",
          p: `If you are experiencing severe symptoms such as difficulty breathing, loss of consciousness, or seizures, call your local emergency services or go to the nearest emergency room immediately.
          It is important to not take any more of the medication until you speak with a medical professional. In some cases, you may be advised to induce vomiting or take activated charcoal to help remove the medication from your system.
          Do not take any other medications or supplements without consulting with your doctor.`
        },
        {
          h3: "- Can I still take my medication if I am pregnant or breastfeeding?",
          p: `It depends on the medication and the individual situation.
           Some medications are safe to take during pregnancy and breastfeeding, while others may not be recommended due to potential risks to the developing fetus or infant.`
        },
        {
          h3: "- How can I contact a Pharmacist?",
          p: `It never has been easier ! Just scroll down and finish your question to the pharmacist. Your answer will come by the online qualified pharmacist in 30 minutes, or if you want you can come at our local pharmacy too. Take care!`
        },
      ]
    };

    if (responsesQuestions.status === 200) {
      setQuestions(responsesQuestions.data);
    }

  }, []);

  return (
    <>
      <div className="container">
        <div className="containerFaq">
          <div className="containerFaqInside">
            <h1>Read Frequently Asked Questions</h1>

            {questions.length ?
              questions.map((item, index) => {
                return <AccordionFaq key={index} id={index} h3={item.h3} p={item.p} />;
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