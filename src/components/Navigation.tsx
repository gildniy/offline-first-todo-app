import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const Navigation = () => <>
    <ul>
        <li>
            <Link to={ROUTES.TODOS}>Home</Link>
        </li>
    </ul>
</>;

export default Navigation