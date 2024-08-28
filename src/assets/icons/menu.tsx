import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Menu = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.333 10h13.334M3.333 5h13.334M3.333 15h13.334"
    />
  </IconBase>
);
export default Menu;
