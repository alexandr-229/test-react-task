import arrow1 from '../photo/Group 2.svg';
import arrow2 from '../photo/Group 1.svg';
import './index.css';

export const TitleFilms = () => {
    return (
        <div className="titleFilms">
            <h3 className="h3titleFilms">POPULAR THIS WEEK</h3>
            <div className="imgTitleFilms">
                <img src={arrow1} alt="arrow1" className="arrow" />
                <img src={arrow2} alt="arrow2" className="arrow active" />
            </div>
        </div>
    );
};
