import { Title } from './Title/Title';
import { Text } from './Text/Text';
import { Rating } from './Rating/Rating';
import { Buttons } from './Buttons/Buttons';

export const Main = () => {
    return (
        <div>
            <Title />
            <Text />
            <Rating />
            <Buttons />
        </div>
    );
};
