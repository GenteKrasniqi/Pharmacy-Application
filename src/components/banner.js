import '../../src/index.css';
import Button from '../components/button';
import '../../src/index.css'
import { Link } from 'react-router-dom';

const Banner = ({ img, h3, altAttr, h6, title }) => {
    return (
        <div className="contentHolder">
            <div className="imgHolder">
                <img src={img} alt={altAttr} />
            </div>
            <div className="txtHolder">
                <h3>{h3}</h3>
                <h6>{h6}</h6>
                <Link to={'/products'}>
                    <Button title={title} />
                </Link>

            </div>
        </div>
    )
}

export default Banner;
