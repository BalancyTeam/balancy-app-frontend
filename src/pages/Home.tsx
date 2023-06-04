import { NavLink } from "react-router-dom";


const Home: React.FC = () => {

    return (
        <div>
            <NavLink to={"/dashboard"}> Dashboard </NavLink>
        </div>
    )
};

export default Home;