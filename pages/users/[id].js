import {useRouter} from "next/router";

export default function () {
    const {query: { id }} = useRouter()

    return (
        <div>
            <h1>Пользователь с id {id}</h1>
        </div>
    )
}