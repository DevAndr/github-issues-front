import { Reactions } from "../../types/github.types.ts";
import "./styles.scss";
import { REACTIONS_ICONS } from "@/config/reactions.config.tsx";
import { Tooltip } from "@nextui-org/tooltip";
import { useMemo } from "react";

interface UserReactionsProps {
  reactions: Reactions;
}

function UserReactions({ reactions }: UserReactionsProps) {
  const reactionsFiltered = useMemo(() => {
    return  Object.entries(reactions).filter(([key, count]) => {
      if (count)
        return [key, count];
    });
  }, [reactions]);

  return <Tooltip content="Реакции" className="capitalize" placement="bottom">
    <div className="reactions">
      {
        reactionsFiltered.map(([key, count]) => {
          const icon = REACTIONS_ICONS[key];

          if (!icon) return null;

          return <div key={key} className="reaction">
            {icon}
            <span>{count}</span>
          </div>;
        })
      }
    </div>
  </Tooltip>;
}

export default UserReactions;