import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Close = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 5 5 15M5 5l10 10"
    />
  </IconBase>
);
export default Close;
