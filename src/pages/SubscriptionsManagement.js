import React, { useEffect, useState, useRef } from 'react';
import DashboardLayout from '../components/SideBar.js';
import ReactPaginate from 'react-paginate';

//Http Requests
import { getSubs, deleteSubs, getSubscriberById } from '../Http/Requests';

const SubscriptionsManagement = () => {
    const [subs, setSubs] = useState([]);
    const textareaRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayeSubs = subs.slice(startIndex, endIndex);


    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        try {
            const result = await getSubs();
            setSubs(result);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }


    const displaySubscriberDetailsById = async (id) => {
        try {
            const result = await getSubscriberById(id);
            textareaRef.current.value = result.email + ' successfully subscribed to our service \n' + result.dateOfSubscribe;
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };


    const deleteMessageHandler = async (id) => {
        try {
            setSubs(subs.filter(subs => subs.id !== id));
            const response = await deleteSubs(id);
            console.log(response.data);
        } catch (error) {
            console.log('Error deleting email:', error);
        }
    };


    return (
        <div className="dashboardHeroHolder">
            <DashboardLayout />
            <div className="dashboardForm">
                <h3>Manage Subsctriptions</h3>
                <div className="formHolder">
                    <div className="formInputs">
                        <form >
                            <textarea ref={textareaRef} placeholder="Subscriber Details..." cols="50" readOnly ></textarea>
                        </form>
                    </div>
                    <div className="tableHolder">
                        <table>
                            <thead>
                                <tr>
                                    <th>Subscriber's Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayeSubs.length ? (
                                    displayeSubs.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.email}</td>
                                            <td>
                                                <button onClick={() => displaySubscriberDetailsById(item.id)} className="btn btn-outline-warning">Details</button>
                                                <button onClick={() => deleteMessageHandler(item.id)} className="btn btn-outline-danger">Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" style={{ textAlign: 'center', color: 'gray', height: '50px' }}>
                                            Error: Subscribers Not Found!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pagination">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={Math.ceil(subs.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'} />
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsManagement
