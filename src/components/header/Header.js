
import "./Header.css"

function Header(props) {
    return (
        <div className="headerMainWrapper">
            <h1 className="fontH1">{props.H1}</h1>
        </div>
    );

}

export default Header;