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

export {
    postContactForm ,
    getContactMsg,
    deleteMessages,
    getContactMsgById,
    postSubsInput,
    getSubs,
    getSubscriberById,
    deleteSubs
};
