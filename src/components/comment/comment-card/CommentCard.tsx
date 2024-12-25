import { Comment } from "@/types/github.types.ts";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import "./styles.scss";
import CreateAtIssue from "@/components/date-fields/CreateAtIssue.tsx";
import AvatarUser from "@/components/avatar-user/AvatarUser.tsx";
import ReactMarkdown from "react-markdown";
import UserReactions from "@/components/reactions/UserReactions.tsx";

interface CommentCardProps {
  comment: Comment;
}

function CommentCard({ comment }: CommentCardProps) {
  return <Card className="comment">
    <CardBody className='body'>
      <AvatarUser user={comment.user} />
      <div className='content'><ReactMarkdown>{comment.body}</ReactMarkdown></div>
    </CardBody>
    <CardFooter className='footer'>
      <CreateAtIssue date={comment.created_at} />
      <UserReactions reactions={comment.reactions}/>
    </CardFooter>
  </Card>;
}

export default CommentCard;