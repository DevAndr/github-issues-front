import { Eye, Flame, Heart, Laugh, Minus, Plus, Rocket } from "lucide-react";
import { JSX } from "react";

export const REACTIONS_NAMES = {
  PLUS: "+1",
  MINUS: "-1",
  LAUGH: "laugh",
  HOORAY: "hooray",
  CONFUSED: "confused",
  HEART: "heart",
  ROCKET: "rocket",
  EYES: "eyes"
} as const;

type ReactionName = (typeof REACTIONS_NAMES)[keyof typeof REACTIONS_NAMES];

export const REACTIONS_ICONS: Record<ReactionName, string> = {
  [REACTIONS_NAMES.PLUS]: '👍',
  [REACTIONS_NAMES.MINUS]: '👎',
  [REACTIONS_NAMES.LAUGH]: '😄',
  [REACTIONS_NAMES.HOORAY]: '🎉',
  [REACTIONS_NAMES.CONFUSED]: '😕',
  [REACTIONS_NAMES.HEART]: '❤️',
  [REACTIONS_NAMES.ROCKET]: '🚀',
  [REACTIONS_NAMES.EYES]: '👀'
} as const;