
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

//Components
import DashboardLayout from '../components/SideBar.js';

//Http Requests
import { postProductReq, getProductReq, getProductById, deleteProductReq, updateProduct } from '../Http/Requests';


const ManageProducts = () => {

    const [productForm, setProductForm] = useState({ name: '', price: '', img: '', scndImg: '', thirdImg: '', description: '', availability: '', expDate: '', discount: '' });
    const [product, setProducts] = useState([]);
    const [editID, setEditId] = useState(null);
    const [formTitle, setFormTitle] = useState('Create New Product');
    const [submitButtonTitle, setSubmitButtonTitle] = useState('Add In Stock');
    const [formTitleColor, setFormTitleColor] = useState('#008031');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const [infoMsg, setInfoMsg] = useState('');
    const inputRef = useRef(null);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = product.slice(startIndex, endIndex);


    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        try {
            const result = await getProductReq();
            setProducts(result);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (editID) {
                await updateProduct(editID, productForm);
                setProductForm({ name: '', price: '', img: '', scndImg: '', thirdImg: '', description: '', availability: '', expDate: '', discount: '' });
                inputRef.current.disabled = false;
                setEditId(null);
                setFormTitle('Create New Product');
                setFormTitleColor('#008031');
                setSubmitButtonTitle('Add In Stock');
                setInfoMsg('Product has been successfully updated !');
                setTimeout(() => {
                    setInfoMsg('');
                }, 3000);
            } else {
                await postProductReq(productForm);
                setProductForm({ name: '', price: '', img: '', scndImg: '', thirdImg: '', description: '', availability: '', expDate: '', discount: '' });
                setInfoMsg('Product has been successfully added !');
                setTimeout(() => {
                    setInfoMsg('');
                }, 2000);
            }
        } catch (error) {
            console.log('An error occured error:', error);
        }
    };


    const handleEditBtn = async (id) => {
        try {
            const response = await getProductById(id);
            console.log(response);
            setProductForm(response);
            setEditId(id);
            setFormTitle('Complete the product Updates');
            setSubmitButtonTitle('Update');
            inputRef.current.disabled = true;
            setFormTitleColor('#fcd970');
        } catch (error) {
            console.log('Error :', error);
        }
    };


    const onCancelHandler = async (e) => {
        e.preventDefault();
        setProductForm({ name: '', price: '', img: '', scndImg: '', thirdImg: '', description: '', availability: '', expDate: '', discount: '' });
        setEditId(null);
        inputRef.current.disabled = false;
        setFormTitle('Create New Product');
        setSubmitButtonTitle('Add In Stock');
        setFormTitleColor('#008031');
    }


    const deleteProductHandler = async (id) => {
        try {
            setInfoMsg('Product Has Successfully Deleted from List !');
            setProducts(product.filter(product => product.id !== id));
            setTimeout(() => {
                setInfoMsg('');
            }, 3000);
            setProductForm({ name: '', price: '', img: '', scndImg: '', thirdImg: '', description: '', availability: '', expDate: '', discount: '' });
            const response = await deleteProductReq(id);
            if (response) {
                console.log(response.data);
            }
        } catch (error) {
            console.log('Error deleting message:', error);
        }
    };


    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return new Date(dateTimeString).toLocaleString(undefined, options);
    };


    return (
        <div className="dashboardHeroHolder">
            <DashboardLayout />
            <div className="dashboardForm">
                <h3 style={{ color: formTitleColor }}>{formTitle}</h3>
                <div className="formHolder">
                    <div className="formInputs">
                        <form onSubmit={onSubmitHandler}>
                            <input placeholder="Name" type="text" ref={inputRef} required value={productForm.name} onChange={(e) => { setProductForm({ ...productForm, name: e.target.value }); }} />
                            <br />

                            <input placeholder="Price &#x20AC;" type="number" step=".01" min="0" required value={productForm.price} onChange={(e) => { setProductForm({ ...productForm, price: e.target.value }); }} />
                            <br />
                            <label id="prodUrlLabel">High Quality Product Images Go Here</label>
                            <br />
                            <input required placeholder="&#x2630; Put main URL of image " value={productForm.img} onChange={(e) => { setProductForm({ ...productForm, img: e.target.value }); }}></input>
                            <br />

                            <div className="inputsWrapper">
                                <div className="insideofInputWrapper">
                                    <input placeholder="&#x2630; Additional img url" value={productForm.scndImg} onChange={(e) => { setProductForm({ ...productForm, scndImg: e.target.value }); }}></input>
                                </div>
                                <div className="insideofInputWrapper">
                                    <input placeholder="&#x2630; Additional img url" value={productForm.thirdImg} onChange={(e) => { setProductForm({ ...productForm, thirdImg: e.target.value }); }}></input>
                                </div>
                            </div>

                            <input placeholder="Detailed Description" required value={productForm.description} onChange={(e) => { setProductForm({ ...productForm, description: e.target.value }); }}></input>
                            <br />
                            <input type="number" placeholder="Stock Availability (ex. 0, 10...)" required value={productForm.availability} onChange={(e) => { setProductForm({ ...productForm, availability: e.target.value }); }} />

                            <br />
                            <label htmlFor="exdate">Expiration Date</label>
                            <br />
                            <input type="datetime-local" value={productForm.expDate} onChange={(e) => { setProductForm({ ...productForm, expDate: e.target.value }); }} />
                            <br />

                            <label id="prodUrlLabel">If the product is discounted, specify the amount here : </label>
                            <input placeholder="Discount %" type="number" step=".01" min="0" value={productForm.discount} onChange={(e) => { setProductForm({ ...productForm, discount: e.target.value }); }} />

                            <br />
                            <div className="submitHome">
                                <button type={'submit'} className="btn btn-outline-success">{submitButtonTitle}</button>
                                <button onClick={onCancelHandler} noValidate className="btn btn-outline-dark">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="tableHolder">
                    <p>{infoMsg}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Product's Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Exp Date</th>
                                <th>Discount</th>
                                <th>Final Price</th>
                                <th>Action Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedProducts.length ? (
                                displayedProducts.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price.toFixed(2)} &#x20AC;</td>
                                        <td>{item.availability}</td>
                                        <td>{formatDateTime(item.expDate)}</td>
                                        <td id='discTd'>{item.discount} %</td>
                                        <td id="discTh">{item.discountedPrice.toFixed(2)}&#x20AC;</td>
                                        <td>
                                            <button onClick={() => { handleEditBtn(item.id) }} className="btn btn-outline-warning">Update</button>
                                            <Link to={`/products/${item.id}`}>
                                                <button className="btn btn-outline-info">View</button>
                                            </Link>
                                            <button onClick={() => { deleteProductHandler(item.id) }} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: 'center', color: 'gray', height: '50px' }}>
                                        No products to display on this page.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={Math.ceil(product.length / itemsPerPage)}
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

export default ManageProducts;


