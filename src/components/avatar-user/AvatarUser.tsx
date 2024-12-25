import { User } from "@/types/github.types.ts";
import { Avatar } from "@nextui-org/avatar";

interface AvatarUserProps {
  user: User;
}

function AvatarUser(props: AvatarUserProps) {
  const { user } = props;

  return  <Avatar className='avatar' isBordered radius="md" src={user.avatar_url} name={user.login}/>
}

export default AvatarUser;