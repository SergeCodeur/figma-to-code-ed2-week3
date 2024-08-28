import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";

const ArrowDown = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4.167v11.666M15.833 10 10 15.833 4.167 10"
    />
  </IconBase>
);
export default ArrowDown;
