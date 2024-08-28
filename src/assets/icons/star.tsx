import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Star = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.567 2.916a.468.468 0 0 1 .866 0l1.771 4.259a.47.47 0 0 0 .396.288l4.598.368a.469.469 0 0 1 .268.823l-3.504 3.002a.469.469 0 0 0-.151.464l1.07 4.488a.468.468 0 0 1-.7.508l-3.937-2.404a.468.468 0 0 0-.488 0l-3.938 2.405a.469.469 0 0 1-.7-.509L6.19 12.12a.468.468 0 0 0-.152-.464L2.534 8.654a.468.468 0 0 1 .268-.823L7.4 7.463a.47.47 0 0 0 .396-.288l1.77-4.26Z"
    />
  </IconBase>
);
export default Star;
