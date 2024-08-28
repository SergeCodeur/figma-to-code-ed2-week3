import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const News = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 6.667h6.667M8.75 10h2.083m4.584 0h-2.084M8.75 13.333h2.083m4.584 0h-2.084M5.833 6.25H5c-1.571 0-2.357 0-2.845.488s-.488 1.274-.488 2.845V15a2.083 2.083 0 1 0 4.166 0V6.25Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.333 2.917H9.167c-.775 0-1.163 0-1.48.085A2.5 2.5 0 0 0 5.918 4.77c-.086.318-.086.705-.086 1.48V15c0 1.15-.932 2.083-2.083 2.083h9.583c2.357 0 3.536 0 4.268-.732.732-.732.732-1.91.732-4.268V7.917c0-2.357 0-3.536-.732-4.268-.732-.732-1.91-.732-4.268-.732Z"
    />
  </IconBase>
);
export default News;
