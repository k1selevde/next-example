import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="link">Главная</a>
                </Link>
                <Link href="/users">
                    <a className="link">Пользователи</a>
                </Link>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {
                    `
                        .navbar {
                            background: orange;
                            padding: 15px;
                        }
                        .link {
                            text-decoration: none;
                            color: white;
                            font-size: 20px;
                            margin: 10px;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Index;
