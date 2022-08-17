import logo from './png/netflix-logo-png-2562 1.svg';
import './index.css';

export const Left = () => {
    return (
        <div className="left lefrPartHeader">
            <img
                src={logo}
                alt="netflix"
                style={{
                    width: '156px',
                    height: '48.33px',
                    left: '80px',
                    top: '70px',
                }}
            />
            <div style={{ display: 'flex', marginTop: '-50px' }}>
                <p style={{ marginLeft: '25px', marginRight: '-30px' }}>|</p>
                <p>Friday July 8th</p>
            </div>
        </div>
    );
};
