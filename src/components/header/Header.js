
import "./Header.css"
import { FontH1 } from "../fonts/fonts";

function Header(props) {
    return (
        <div className="headerMainWrapper">
            <FontH1 copy={props.copy}/>
        </div>
    );

}

export default Header;