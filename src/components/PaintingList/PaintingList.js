import React from 'react';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';
import './PaintingList.css';

const PaintingList = ({ paintings }) => (
    <ul className="PaintingList">
        {paintings.map(({id, url, title, price, author, quantity}) => (
            <li key={id} className="PaintingList__item">
                <Painting
                    // можно так же сделать распыление свойств {...item}, но при нём не ясно, что передаём
                    url={url}
                    title={title}
                    price={price}
                    authorUrl={author.url}
                    tag={author.tag}
                    quantity={quantity} />
            </li>))}
    </ul>
);

PaintingList.propTypes = {
    paintings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired,
}

export default PaintingList;