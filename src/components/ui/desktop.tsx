import { SVGProps } from "react"

export interface DesktopProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  src?: string
  videoSrc?: string
}

export function Desktop({
  width = 1280,
  height = 800,
  src,
  videoSrc,
  ...props
}: DesktopProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={width}
        height={height}
        rx="12"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <rect
        x="8"
        y="8"
        width={width - 16}
        height={height - 40}
        rx="8"
        className="fill-white dark:fill-[#262626]"
      />
      <g clipPath="url(#clip-desktop)">
        <rect
          x="8"
          y="8"
          width={width - 16}
          height={height - 40}
          rx="8"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
      </g>
      <rect
        x="8"
        y={height - 32}
        width={width - 16}
        height="24"
        rx="0"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <circle cx="24" cy={height - 20} r="6" className="fill-[#FF5F56]" />
      <circle cx="44" cy={height - 20} r="6" className="fill-[#FFBD2E]" />
      <circle cx="64" cy={height - 20} r="6" className="fill-[#27C93F]" />
      {src && (
        <image
          href={src}
          width={width - 16}
          height={height - 40}
          x="8"
          y="8"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip-desktop)"
        />
      )}
      {videoSrc && (
        <foreignObject
          x="8"
          y="8"
          width={width - 16}
          height={height - 40}
          clipPath="url(#clip-desktop)"
          preserveAspectRatio="xMidYMid slice"
        >
          <video
            className="size-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </foreignObject>
      )}
      <defs>
        <clipPath id="clip-desktop">
          <rect
            x="8"
            y="8"
            width={width - 16}
            height={height - 40}
            rx="8"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
