import User from "../models/User";
import Avatar from "./Avatar";
import Card from "./Card";
import { ListItem } from "./ListItem";

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
