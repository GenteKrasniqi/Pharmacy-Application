import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Box from '../components/Box.js';
import ReactPaginate from 'react-paginate';

// Http Request
import { getProductReq } from '../Http/Requests';

function Products() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 9;

  async function fetchData() {
    try {
      const result = await getProductReq();
      setProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = products
    .slice(pageNumber * productsPerPage, (pageNumber + 1) * productsPerPage)
    .map((item, i) => (
      <Card
        key={item.id}
        img={item.img}
        productTittle={item.name}
        price={item.price}
        discountPrcnt={item.discount}
        discountedPrice={item.discountedPrice}
        path={`/products/${item.id}`}
      ></Card>
    ));

  return (
    <>
      <Box h2={'Find Your Medicament Here'} />
      <div className='heroHolderProd'>
        <div className="heroHolder">
          <div className="cardHolder">
            {displayProducts.length ? (
              displayProducts
            ) : (
              <h3>The products are not available in stock. Please check back later!</h3>
            )}
          </div>

        </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={<>&lt; Prev</>}
          nextLabel={<>Next &gt;</>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
      </div>
    </>
  );
}

export default Products;
