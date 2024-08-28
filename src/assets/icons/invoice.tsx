import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Invoice = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.333 15.538V6.712c0-2.378 0-3.568.732-4.306.733-.74 1.911-.74 4.268-.74h3.334c2.357 0 3.535 0 4.267.74.733.738.733 1.928.733 4.306v8.826c0 1.26 0 1.89-.385 2.138-.63.405-1.602-.445-2.091-.753-.404-.255-.606-.383-.83-.39-.243-.008-.449.114-.885.39l-1.593 1.004c-.43.27-.644.406-.883.406-.24 0-.454-.135-.883-.406l-1.593-1.004c-.404-.255-.606-.383-.83-.39-.243-.008-.448.114-.885.39-.49.308-1.462 1.158-2.09.753-.386-.248-.386-.878-.386-2.138ZM9.167 9.167h-2.5M11.667 5.833h-5"
    />
  </IconBase>
);
export default Invoice;
