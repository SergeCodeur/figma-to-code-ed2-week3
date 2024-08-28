import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const HeadPhone = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 11.667H5a1.667 1.667 0 0 1 1.667 1.666v2.5A1.666 1.666 0 0 1 5 17.5h-.833A1.667 1.667 0 0 1 2.5 15.833V10a7.5 7.5 0 0 1 15 0v5.833a1.666 1.666 0 0 1-1.667 1.667H15a1.666 1.666 0 0 1-1.667-1.667v-2.5A1.667 1.667 0 0 1 15 11.667h2.5"
    />
  </IconBase>
);
export default HeadPhone;
