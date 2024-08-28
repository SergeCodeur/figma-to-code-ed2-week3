import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const CreditCard = (props: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 4.167H3.333c-.92 0-1.666.746-1.666 1.666v8.334c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666V5.833c0-.92-.746-1.666-1.666-1.666ZM1.667 8.333h16.666"
    />
  </IconBase>
);
export default CreditCard;
