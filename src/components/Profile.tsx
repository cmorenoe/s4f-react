import { Card, Avatar, ListItem } from ".";
import User from "../models/user";

function Profile() {
  const user: User = {
    name: "John Doe",
    imageUrl: "https://i.pravatar.cc/150?img=50",
    stuff: ["Software engineer", "Working at LIDL", "Winner padel player"],
  };
  const imageSize: number = 90;
  return (
    <>
      <h2>{user.name}</h2>
      <Card>
        <Avatar user={user} imageSize={imageSize}></Avatar>
      </Card>
      <ListItem stuff={user.stuff}></ListItem>
    </>
  );
}

export default Profile;
