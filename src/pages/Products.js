import Card from '../components/card';
import '../../src/index.css';
import effeclarProduct from '../assets/img/Effaclar_Serum.jpg'
import vitaminCProduct from "../assets/img/La-Roche-Posay-ProductPage-Anti-Aging-Pure-Vitamin-C10-30ml-3337875660570-Open.jpg";

function Products() {
    return (
        <><div className='minBanner'>
            <h2>Find your medicament here</h2>
        </div><div className='cardHolder'>
                <Card img={effeclarProduct} productTittle={"Effeclar Acid Salicilik"} productDesc={"For your face care."} btn={'/products'}></Card>
                <Card img={vitaminCProduct} productTittle={"Vitamin C"} productDesc={"Daily Vitamin C"} btn={'/products'}></Card>
                <Card img={effeclarProduct} productTittle={"Effeclar Acid Salicilik"} productDesc={"For your face care."} btn={'/products'}></Card>
                <Card img={vitaminCProduct} productTittle={"Vitamin C"} productDesc={"For your face care."} btn={'/products'}></Card>
                <Card img={effeclarProduct} productTittle={"Effeclar Acid Salicilik"} productDesc={"For your face care."} btn={'/products'}></Card>
                <Card img={vitaminCProduct} productTittle={"Vitamin C"} productDesc={"For your face care."} btn={'/products'}></Card>
                <Card img={effeclarProduct} productTittle={"Effeclar Acid Salicilik"} productDesc={"For your face care."} btn={'/products'}></Card>
            </div></>
            

    )
}

export default Products;