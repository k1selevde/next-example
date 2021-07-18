import Link from "next/link"
import {useState} from "react"

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'petr'},
        {id: 2, name: 'vasya'},
    ])
    return (
        <div>
            <div>
                <a href="/">Главная</a>
                <a href="/users">Пользователи</a>
            </div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;
