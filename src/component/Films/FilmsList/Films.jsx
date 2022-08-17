import { Film } from '../Film/FilmItem';
import film1 from '../photo/Rectangle 6.svg';
import film2 from '../photo/Rectangle 7.svg';
import film3 from '../photo/Rectangle 8.svg';
import film4 from '../photo/Rectangle 9.svg';
import film5 from '../photo/Rectangle 10.svg';
import film6 from '../photo/Rectangle 11.svg';
import './Index.css';

export const FilmsList = () => {
    const films = [film5, film1, film2, film3, film4, film6];

    return (
        <div className="filmsList">
            {films.map((i) => (
                <Film film={i} />
            ))}
            <div className="limitation">
                <div className="redSquare"></div>
                <div className="graySquarу">
                    <p className="textInLimitation">16+</p>
                </div>
            </div>
        </div>
    );
};
