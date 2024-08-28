import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Search = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <g
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path strokeLinecap="round" d="m14.583 14.583 3.75 3.75" />
      <path d="M16.667 9.167a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
export default Search;
