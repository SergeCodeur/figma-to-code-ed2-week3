import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Bell = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 6.667a5 5 0 1 1 10 0c0 5.833 2.5 7.5 2.5 7.5h-15S5 12.5 5 6.667ZM8.583 17.5a1.617 1.617 0 0 0 2.834 0"
    />
  </IconBase>
);
export default Bell;
