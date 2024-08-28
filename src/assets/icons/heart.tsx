import IconBase from "@/components/ui/icon-base";
import { IconProps } from "@/types";
const Heart = ({ ...props }: IconProps) => (
  <IconBase {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.219 3.328c-2.235-1.37-4.185-.818-5.357.062-.48.36-.72.541-.862.541-.141 0-.381-.18-.862-.541-1.172-.88-3.122-1.432-5.357-.062C.848 5.128.185 11.062 6.95 16.07c1.288.953 1.932 1.43 3.05 1.43 1.118 0 1.762-.477 3.05-1.43 6.765-5.008 6.102-10.943 3.169-12.742Z"
    />
  </IconBase>
);
export default Heart;
