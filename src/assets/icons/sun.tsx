import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Sun = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 13.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666ZM10 3.333h.008M16.667 10h.008M10 16.667h.008M3.333 10h.009M14.714 5.286h.008M14.714 14.714h.008M5.286 14.714h.008M5.286 5.286h.008"
    />
  </IconBase>
);
export default Sun;
