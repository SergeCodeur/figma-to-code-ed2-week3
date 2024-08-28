import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Ellipsis = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5ZM10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667Z"
    />
  </IconBase>
);
export default Ellipsis;
