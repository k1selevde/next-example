import {useRouter} from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query: { id }} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id {id}</h1>
                <div>Name: {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params: {id}}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()

    return {
        props: {user}
    }
}