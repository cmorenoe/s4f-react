import User from "../models/User";

function Avatar({ user, imageSize }: { user: User; imageSize: number }) {
  return (
    <>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{ width: imageSize, height: imageSize }}
      />
    </>
  );
}

export default Avatar;
