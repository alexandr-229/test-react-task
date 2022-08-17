import './index.css';
import logo from './Vector (3).svg';

export const Buttons = () => {
    return (
        <div className="buttons">
            <div className="button1">
                <p className="textInButton">STREAM NOW</p>
                <img src={logo} alt="logo" className="imgInButton" />
            </div>
            <div className="button2">
                <p className="textInButton2">ALL EPISODES</p>
            </div>
        </div>
    );
};
