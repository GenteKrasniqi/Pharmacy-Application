const postContactForm = async (data) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Contacts`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',       
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
  }
};


const getContactMsg = async () => {
    try {
      const response = await fetch(`https://localhost:7282/api/Contacts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  };

  
const getContactMsgById = async (id) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Contacts/${id}`);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching message by ID:', error);
      throw error;
  }
};

const deleteMessages = async (id) => {
    try {
      const apiUrl = `https://localhost:7282/api/Contacts/${id}`;
  
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
    }
  };
  
const postSubsInput = async (data) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Subscribers`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',       
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
  }
};

const getSubs = async () => {
  try {
    const response = await fetch(`https://localhost:7282/api/Subscribers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};

const getSubscriberById = async (id) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Subscribers/${id}`);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching message by ID:', error);
      throw error;
  }
};

const deleteSubs = async (id) => {
  try {
    const apiUrl = `https://localhost:7282/api/Subscribers/${id}`;

    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }), 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};

const postProductReq = async (data) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Products`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',       
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
  }
};
    
const postAccordion = async (data) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Accordions`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
  }
};

const getProductReq = async () => {
  try {
    const response = await fetch(`https://localhost:7282/api/Products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
      const response = await fetch(`https://localhost:7282/api/Products/${id}`);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching message by ID:', error);
  }

  }
const getAccordions = async () => {
  try {
      const response = await fetch(`https://localhost:7282/api/Accordions`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error during fetch:', error);
      throw error;
  }
};

const deleteProductReq = async (id) => {
  try {
    const apiUrl = `https://localhost:7282/api/Products/${id}`;

    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }), 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
}
    const deleteAccordion = async (id) => {
      try {
          const apiUrl = `https://localhost:7282/api/Accordions/${id}`;
    
          const response = await fetch(apiUrl, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
    
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const result = await response.json();
          return result;
      } catch (error) {
          console.error('Error during fetch:', error);
          throw error;
      }
    };

<<<<<<< Updated upstream
const updateProduct = async (id, data) => {
  try {
    const response = await fetch(`https://localhost:7282/api/Products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = response.status === 204 ? null : await response.json();

    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};

const login = async (email,password) => {
  try {
    const response = await fetch(`https://localhost:7282/api/LogIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email,password),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};
=======
    const editAccordion = async (id, updatedAccordion) => {
      try {
        const apiUrl = `https://localhost:7282/api/Accordions/${id}`;
    
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAccordion),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Check if the response body is empty
        const result = response.status === 204 ? null : await response.json();
        console.log('Edit Accordion Result:', result);
    
        return result;
      } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
      }
    };
    
    
    
    const updateProduct = async (id, data) => {
      try {
        const response = await fetch(`https://localhost:7282/api/Products/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Check if the response body is empty
        const result = response.status === 204 ? null : await response.json();
    
        return result;
      } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
      }
    };
    
    
    const login = async (email,password) => {
      try {
        const response = await fetch(`https://localhost:7282/api/Users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email,password),
        });
    
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
        }
    
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
      }
    };
>>>>>>> Stashed changes

export {
    postContactForm ,
    getContactMsg,
    deleteMessages,
    getContactMsgById,
    postSubsInput,
    getSubs,
    getSubscriberById,
    deleteSubs, 
    postProductReq,
    getProductReq,
    getProductById,
    deleteProductReq,
    updateProduct,
    login,
    deleteAccordion,
    getAccordions,
    postAccordion,
    editAccordion
};
