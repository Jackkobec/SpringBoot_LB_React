import * as React from "react";
import './hello.css';
import {Link} from 'react-router'

export const UserTable = ({users}) => {

    /*let f = () => {}; // создание функции для дальнейшего експорта
     function s() {} // простое создание функции */

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DETAILS</th>
                </tr>
                {users.map((item, i) =>
                    <tr key={ i }>
                        <td>{ item.id }</td>
                        <td>{ item.name }</td>
                        <td>
                            <Link
                                to={`/users/detail/${item.id}`} activeClassName="active">
                                { 'Details' }
                            </Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
