// import viteLogo from '/vite.svg'
// import reactLogo from './../assets/react.svg'

export const FrameworkLogo = (props) => {
  return <img src={props.imgPath} alt={props.altText} />;
};

const Frameworks = (props) => {
  return (
    <div>
      <p>Best JS {props.type}:</p>
      <FrameworkLogo imgPath={props.imgPath} altText={props.altText} />
    </div>
  );
};

export default Frameworks;
