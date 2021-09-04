import React from 'react'
import { Link } from 'react-router-dom';

import './style.scss';

export default function PushToPublication(props) {
    return (
        <li>
            <Link
                to="/Postagem"
                className="push-to-post"
                onClick={props.onclick}
            >
                {props.title}
            </Link>
        </li>
    );
}