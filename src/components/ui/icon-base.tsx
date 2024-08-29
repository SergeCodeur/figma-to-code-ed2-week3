import { IconProps } from "@/types";

const IconBase = ({ width = 18, height = 18, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  />
);

export default IconBase;
