import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Comment = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.667 11.25h6.666M6.667 7.083H10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.082 15.833c-1.083-.106-1.895-.432-2.439-.976-.976-.976-.976-2.548-.976-5.69V8.75c0-3.143 0-4.714.976-5.69.976-.977 2.548-.977 5.69-.977h3.334c3.142 0 4.714 0 5.69.977.976.976.976 2.547.976 5.69v.417c0 3.142 0 4.714-.976 5.69s-2.548.976-5.69.976c-.467.01-.84.046-1.205.13-.998.23-1.923.74-2.837 1.186-1.302.635-1.953.953-2.362.655-.782-.582-.017-2.386.154-3.22"
    />
  </IconBase>
);
export default Comment;
