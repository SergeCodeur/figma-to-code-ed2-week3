import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";

const AddWallet = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M13.335 11.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1.668 9.167c0-3.143 0-4.714.977-5.69C3.62 2.5 5.192 2.5 8.335 2.5h3.333c.775 0 1.163 0 1.48.085a2.5 2.5 0 0 1 1.768 1.768c.086.318.086.705.086 1.48m-6.667 0h5c2.357 0 3.535 0 4.268.733.732.732.732 1.91.732 4.267V12.5c0 2.357 0 3.535-.732 4.268-.733.732-1.911.732-4.268.732h-2.918M8.333 14.167H5m0 0H1.667m3.333 0V17.5m0-3.333v-3.334"
    />
  </IconBase>
);
export default AddWallet;
