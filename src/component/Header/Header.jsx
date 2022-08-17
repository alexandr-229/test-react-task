import { Left } from './Left';
import { Right } from './Right';
import './index.css';

export const Header = () => {
    return (
        <header className="header">
            <Left />
            <Right />
        </header>
    );
};
