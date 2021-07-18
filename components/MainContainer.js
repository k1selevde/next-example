import A from "./A";
import Head from "next/head";

const MainContainer = ({children,keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={`nextjs simple example ${keywords}`}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Главная'} />
                <A href={'/users'} text={'Пользователи'} />
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
