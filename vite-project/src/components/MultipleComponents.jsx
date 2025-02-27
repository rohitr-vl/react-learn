import viteLogo from '/vite.svg'
import reactLogo from './../assets/react.svg'

export const ViteLogo = () => {
 return <img src={viteLogo} alt="Vite Alt" />;
};
export const ReactLogo = () => {
 return <img src={reactLogo} alt="ReactJS Alt" />;
};

const Frameworks = () => {
    return (
        <div>
            <p>Best Framework combo:</p>
            <ViteLogo />
            <ReactLogo />
        </div>
    );
};

export default Frameworks;