import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const TradeUp = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 10.833V6.667H12.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.667 6.667 12.5 10.833c-.736.736-1.103 1.104-1.555 1.144-.074.007-.15.007-.224 0-.451-.04-.819-.408-1.554-1.144-.736-.735-1.104-1.103-1.555-1.144a1.245 1.245 0 0 0-.224 0c-.452.041-.82.409-1.555 1.144l-2.5 2.5"
    />
  </IconBase>
);
export default TradeUp;
