// import viteLogo from '/vite.svg'
// import reactLogo from './../assets/react.svg'

export const FrameworkLogo = (props) => {
  return <img src={props.imgPath} alt={props.altText} />;
};

const Frameworks = (props) => {
  return (
    <p>
      <span>Best JS {props.type}:</span>
      <FrameworkLogo imgPath={props.imgPath} altText={props.altText} />
    </p>
  );
};

export default Frameworks;
