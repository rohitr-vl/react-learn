const getImageUrl = (imageId, size = "s") => {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
};

export const Profile = ({ profile1, profile2, profile3 }) => {
  //   const {  } = props;
  console.log(profile1);
  return (
    <section className="profile">
      <h2>{profile1.name}</h2>
      <img
        className="avatar"
        src=<getImageUrl imageId={profile1.imgSrc} size="m" />
        alt={profile1.imgAlt}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profile1.profession}
        </li>
        <li>
          <b>Awards: {profile1.awardCount} </b>
          {profile1.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {profile1.discovery}
        </li>
      </ul>
    </section>
  );
};
