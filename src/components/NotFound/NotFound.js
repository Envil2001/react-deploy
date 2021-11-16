import { Link } from "react-router-dom";
import "./notFound.css";



const NotFound = () => {
    return (
        <div className="centerFixed">
            <div className="contentFix">
                <h3 style={{fontSize: "140px"}}>PAGE 404</h3>
                <Link to="/"><p>Back to main</p></Link>
            </div>
        </div>
    );
}

export default NotFound;