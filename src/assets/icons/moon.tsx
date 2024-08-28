import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Moon = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 2.5a5.303 5.303 0 0 0 7.5 7.5A7.5 7.5 0 1 1 10 2.5Z"
    />
  </IconBase>
);
export default Moon;
