import "./styles/app.css"
import logo from "./assets/images/planet-earth.png"
const App = () => {
    return (
        <div>
            Hello World!
            <img src={logo} alt={'planet logo'}/>
        </div>
    );
};
export default App;