import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Circle = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <circle cx={10} cy={10} r={9.25} stroke="currentColor" strokeWidth={1.5} />
  </IconBase>
);
export default Circle;
