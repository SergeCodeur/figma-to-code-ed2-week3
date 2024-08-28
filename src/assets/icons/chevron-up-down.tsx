import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const ChevronUpDown = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.833 12.5 10 16.667l4.167-4.167M5.833 7.5 10 3.333 14.167 7.5"
    />
  </IconBase>
);
export default ChevronUpDown;
