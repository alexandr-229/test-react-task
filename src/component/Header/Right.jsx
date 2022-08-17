import logo from './png/Ellipse 2.svg';
import search from './png/Vector.svg';

export const Right = () => {
    return (
        <>
            <img src={search} alt="search" />
            <img
                src={logo}
                alt="logo"
                style={{
                    width: '74px',
                    height: '74px',
                    marginLeft: '50px',
                    top: '42px',
                }}
            />
        </>
    );
};
