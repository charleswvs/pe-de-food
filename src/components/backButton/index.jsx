import React from "react";

import {Link} from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi';

import './styles.css';

const BackButton = ({goTo}) => (
    <Link to={goTo} className="backButton">
        <FiChevronLeft size={22}/> Voltar
    </Link>
);

export default BackButton