import React, { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';

//Components
import DashboardLayout from '../components/SideBar.js';

//Http Requests
import { getContactMsg, deleteMessages, getContactMsgById } from '../Http/Requests';

const MessagesManagement = () => {
    const [messages, setMessages] = useState([]);
    const textareaRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayeMessages = messages.slice(startIndex, endIndex);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const result = await getContactMsg();
            setMessages(result);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    const deleteMessageHandler = async (id) => {
        try {
            setMessages(messages.filter(message => message.id !== id));
            textareaRef.current.value = '';
            const response = await deleteMessages(id);
            console.log(response.data);
        } catch (error) {
            console.log('Error deleting message:', error);
        }
    };

    const displayMessageHandler = async (id) => {
        try {
            const result = await getContactMsgById(id);
            textareaRef.current.value = result.msg;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="dashboardHeroHolder">
            <DashboardLayout />
            <div className="dashboardForm">
                <h3>Manage Messages</h3>
                <div className="formHolder">
                    <div className="formInputs">
                        <form >
                            <textarea ref={textareaRef} placeholder="Client Asks..." cols="40" readOnly></textarea>
                        </form>
                    </div>
                </div>
                <div className="tableHolder">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayeMessages.length ? (
                                displayeMessages.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.fullName}</td>
                                        <td>{item.email}</td>
                                        <td >{item.adress}</td>
                                        <td>
                                            <button onClick={() => displayMessageHandler(item.id)} className="btn btn-outline-warning">Read Message</button>

                                            <button className="btn btn-outline-info">  <a href="https://outlook.office.com/mail/" target="_blank" rel="noopener noreferrer"> Reply </a></button>

                                            <button onClick={() => deleteMessageHandler(item.id)} className="btn btn-outline-danger" >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center', color: 'gray', height: '50px' }}>
                                        Not Found user messages!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div><div className="pagination">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={Math.ceil(messages.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
            </div>
        </div>
    );
};

export default MessagesManagement;
