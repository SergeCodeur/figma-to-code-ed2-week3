import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Reports = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 1.667h-5a.833.833 0 0 0-.833.833v1.667c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V2.5a.833.833 0 0 0-.833-.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.333 3.333H15A1.667 1.667 0 0 1 16.667 5v11.667A1.667 1.667 0 0 1 15 18.333H5a1.667 1.667 0 0 1-1.667-1.666V5A1.667 1.667 0 0 1 5 3.333h1.667M10 9h3.333M10 13.333h3.333M6.667 9.167h.008M6.667 13.333h.008"
    />
  </IconBase>
);
export default Reports;
