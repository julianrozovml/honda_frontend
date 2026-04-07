import type { IconXProps } from "./IconX.types";

export default function IconX({ size = 24, className }: IconXProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M13.4808 10.7749L19.267 4H17.8956L12.8728 9.88229L8.85904 4H4.23047L10.299 12.896L4.23047 20H5.6019L10.907 13.7874L15.1459 20H19.7745L13.4808 10.7749ZM11.603 12.9737L10.9882 12.088L6.09561 5.04H8.2019L12.1493 10.728L12.7642 11.6137L17.8968 19.008H15.7905L11.603 12.9737Z"
        fill="currentColor"
      />
    </svg>
  );
}
