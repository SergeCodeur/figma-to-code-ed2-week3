import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const TradeDown = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 9.167v4.166H12.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 13.333 12.5 9.167c-.736-.736-1.103-1.104-1.555-1.144a1.248 1.248 0 0 0-.224 0c-.451.04-.819.408-1.554 1.144-.736.735-1.104 1.103-1.555 1.143-.075.007-.15.007-.224 0-.452-.04-.82-.408-1.555-1.143l-2.5-2.5"
    />
  </IconBase>
);
export default TradeDown;
