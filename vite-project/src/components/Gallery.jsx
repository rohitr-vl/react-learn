import reactLogo from '/vite.svg'
export const ProfilePic = () => {
  return <img src={reactLogo} alt="ReactJS Alt" />;
};

export const Gallery = () => {
  return (
    <section>
      <h1>Amazing Frameworks</h1>
      <ProfilePic />
      <ProfilePic />
    </section>
  );
};