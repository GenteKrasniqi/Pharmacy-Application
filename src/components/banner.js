import '../../src/index.css';

const Banner = ({ img, h3, altAttr,h6 }) => {
    return (
        <div className="contentHolder">
            <div className="imgHolder">
                <img src={img} alt={altAttr} />
            </div>
            <div className="txtHolder">
                <h3>{h3}</h3>
                <h6>{h6}</h6>                
            </div>
        </div>
    )
}

export default Banner;
