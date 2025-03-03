// import viteLogo from '/vite.svg'
// import reactLogo from './../assets/react.svg'

export const FrameworkLogo = (props) => {
  // This is the child component
  return <img src={props.imgPath} alt={props.altText} />;
};

const Frameworks = (props) => {
  // this is parent component
  return (
    <p>
      <span>Best JS {props.type}:</span>
      <FrameworkLogo imgPath={props.imgPath} altText={props.altText} />
    </p>
  );
};

export default Frameworks;
