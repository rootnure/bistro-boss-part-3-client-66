import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="uppercase text-center">
            <div className="font-cinzel">
                <h3 className="text-3xl"><span className="tracking-wider">Bistro Bos</span>s</h3>
                <p><span className="tracking-[10px]">Restauran</span>t</p>
            </div>
        </Link>
    );
};

export default Logo;