import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const ChevronRight = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.5 15 5-5-5-5"
    />
  </IconBase>
);
export default ChevronRight;
