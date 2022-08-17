import './index.css';
import filledStar from './photo/Vector (1).svg';
import blankStar from './photo/Vector (2).svg';

export const Rating = () => {
    return (
        <div className="rating">
            <img
                src={filledStar}
                alt="filledStar"
                style={{ marginLeft: '86px' }}
            />
            <img src={filledStar} alt="filledStar" />
            <img src={filledStar} alt="filledStar" />
            <img src={blankStar} alt="blankStar" />
            <img src={blankStar} alt="blankStar" />
        </div>
    );
};
