import Link from "next/link"
import {useState, useEffect} from "react"

const Users = ({users}) => {

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

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}