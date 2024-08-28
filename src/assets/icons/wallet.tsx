import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Wallet = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <g stroke="currentColor" strokeWidth={1.5} clipPath="url(#a)">
      <path d="M13.333 11.667a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM15.75 6.667a4.167 4.167 0 1 0-8.167 0" />
      <path
        strokeLinecap="round"
        d="M5.833 6.661h7.5c2.357 0 3.536 0 4.268.733.732.732.732 1.911.732 4.27v1.667c0 2.358 0 3.537-.732 4.27-.732.732-1.91.732-4.268.732h-5c-3.142 0-4.714 0-5.69-.976-.976-.977-.976-2.55-.976-5.694V9.996c0-3.144 0-4.716.976-5.693.786-.786 1.957-.94 4.024-.97h1.666"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
export default Wallet;
