// в этом файле мы принимаем пропсы в шаблон и экспортируем на рендер
import React from 'react';
import defaultImage from './default.jpg';
import PropTypes from 'prop-types';

const Painting = ({ url, title, price, authorUrl, tag, quantity }) => (
    <div className="painting">
            <img src={url} alt={title} width="480" />
            <h2>{title}</h2>
            <p>
                Автор: <a href={authorUrl}>{tag}</a>
            </p>
            <p>Цена: {price} кредитов</p>
            <p>Доступность: {quantity < 10 ? "Заканчивается" : "Есть в наличии"}</p>
            <button type="button">Добавить в корзину</button>
    </div>
);

Painting.defaultProps = {
    url: defaultImage,
    price: 1000,
};

// дпроверка для каждого пропса, описываем тип и обязательность
Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    authorUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};


export default Painting;