/* eslint-disable react/prop-types */
export const AvatarLogo = (props) => {
  console.log("Logo: " + props.scrPath);
  return (
    <img
      src={props.srcPath}
      style={props.style}
      alt={props.altText}
      className="logo"
    />
  );
};
const Avatar = (props) => {
  return (
    <a href={props.linkPath} target="_blank">
      <AvatarLogo
        style={props.style}
        altText={props.altText}
        srcPath={props.srcPath}
      />
    </a>
  );
};

export default Avatar;
