import reactLogo from '/vite.svg'
export const Profile = () => {
    return <img src={reactLogo} alt="ReactJS Alt" />;
};

export const Gallery = () => {
    return (
        <section>
            <h1>Amazing Frameworks</h1>
            <Profile />
            <Profile />
        </section>
    );
};