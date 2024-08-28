import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const ChevronDown = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 7.5 5 5 5-5"
    />
  </IconBase>
);
export default ChevronDown;
