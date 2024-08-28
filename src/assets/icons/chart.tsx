import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Chart = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 16.667V8.333M10 16.667V3.333M5 16.667v-5"
    />
  </IconBase>
);
export default Chart;
