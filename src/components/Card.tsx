'use client';
import { useState } from 'react';
import './Card.scss';

interface CardProps {
    title: string;
    text: string;
}

export const Card = ({ title, text }: CardProps): JSX.Element => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const onClickCard = () => {
        setIsSelected(!isSelected);
    };
    return (
        <div
            onClick={onClickCard}
            className={isSelected ? 'card card--selected' : 'card'}
        >
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{text}</p>
        </div>
    );
};
