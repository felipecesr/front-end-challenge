import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
    const imageBackCard = 'https://dkw5ssdvaqf8l.cloudfront.net/back.jpg';

    const card = {
        name: 'O MAGO',
        image: 'arcano1.jpg'
    };

    it('renders front card img with card.image as src and card.name as alt', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} />);
        const img = wrapper
            .find('img')
            .first()
            .getElement();

        expect(img.props.src).toBe(card.image);
        expect(img.props.alt).toBe(card.name);
    });

    it('render back card img with imageBackCard as src', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} />);
        const img = wrapper
            .find('img')
            .last()
            .getElement();

        expect(img.props.src).toBe(imageBackCard);
    });

    it('render card back when isClosed === true', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} isClosed={true} />);

        expect(wrapper.find('.Card').hasClass('--closed')).toBeTruthy();
    });

    it('change value modalIsOpen when card is clicked', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} isClosed={true} />);

        wrapper.find('.Card').simulate('click');

        expect(wrapper.state().modalIsOpen).toBe(true);
    });

    it('should not change modalIsOpen when card is clicked if isClosed === false', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} isClosed={false} />);

        wrapper.find('.Card').simulate('click');

        expect(wrapper.state().modalIsOpen).toBe(false);
    });
});
