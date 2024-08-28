import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const ArrowUp = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.167 10 10 4.167 15.833 10M10 15.833V4.167"
    />
  </IconBase>
);
export default ArrowUp;
