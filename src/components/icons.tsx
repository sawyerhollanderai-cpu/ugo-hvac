import type { IconName } from "@/lib/site";

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

function base({ className = "", strokeWidth = 1.6 }: IconProps) {
  return {
    className,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

export function FlameIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 21c3.9 0 6.5-2.6 6.5-6.1 0-2.6-1.5-4.5-2.9-6.2-.6-.8-1.9-.5-2.1.5l-.4 1.7c-1-1.7-1.5-3.9-1.3-6.1.1-.9-.9-1.5-1.6-.9C7.6 6 5.5 9.6 5.5 13c0 4.6 2.8 8 6.5 8Z" />
      <path d="M12 21c1.8 0 3-1.4 3-3.1 0-1.5-.9-2.5-1.8-3.5-.3-.4-.9-.3-1.1.2l-.3.9c-.5-.7-.8-1.6-.8-2.6-1 1.1-2 2.6-2 4.2 0 2.2 1.2 3.9 3 3.9Z" />
    </svg>
  );
}

export function SnowflakeIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 2.5v19M4 7.2l16 9.6M4 16.8l16-9.6" />
      <path d="M12 2.5 9.8 4.7M12 2.5l2.2 2.2M12 21.5l-2.2-2.2M12 21.5l2.2-2.2M4 7.2l3 .6M4 7.2l.6-3M20 16.8l-3-.6M20 16.8l-.6 3M4 16.8l.6 3M4 16.8l3-.6M20 7.2l-.6-3M20 7.2l-3 .6" />
    </svg>
  );
}

export function LeafIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 19c0-8 4-13.5 14-14-0.5 10-5 14-11 14-1.2 0-2.2-.2-3 0Z" />
      <path d="M5 19c2.5-5.5 6-9 11-11.5" />
    </svg>
  );
}

export function SplitIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="7" rx="2" />
      <path d="M6.5 8.5h7M17 8.5h.5" />
      <path d="M7 15.5c0 1.2-1 1.8-1 3M12 15.5c0 1.2-1 1.8-1 3M17 15.5c0 1.2-1 1.8-1 3" />
    </svg>
  );
}

export function PackageIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M3.5 11h17M7 14.5h4M7 7V5.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 5.5V7" />
      <circle cx="16.5" cy="15" r="1.6" />
    </svg>
  );
}

export function DropletIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 21a6.5 6.5 0 0 0 6.5-6.5c0-4-4.2-8.5-6-11-.3-.4-.8-.4-1.1 0-1.7 2.5-5.9 7-5.9 11A6.5 6.5 0 0 0 12 21Z" />
      <path d="M8.8 14.5a3.2 3.2 0 0 0 2.5 3.2" />
    </svg>
  );
}

export function MetalIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3.5 18h6.5a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h6.5" />
      <path d="M3.5 21.5h17" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GaugeIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4.5 19a9 9 0 1 1 15 0" />
      <path d="M12 14.5 16 9" />
      <circle cx="12" cy="15" r="1.4" />
      <path d="M5.5 13.5h1.2M12 7v1.2M18.5 13.5h-1.2" />
    </svg>
  );
}

export function WrenchIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M14.5 6.5a4 4 0 0 1 5-1.4l-2.8 2.8 2.4 2.4 2.8-2.8a4 4 0 0 1-5.4 5.1L8 21.1a2 2 0 0 1-2.8-2.8l8.5-8.5a4 4 0 0 1 .8-3.3Z" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 12h16M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <svg {...base(p)} fill="currentColor" stroke="none">
      <path d="M12 2.8l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.5l-5.4 2.9 1.2-6L3.3 9.2l6.1-.8L12 2.8Z" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />
    </svg>
  );
}

const map = {
  flame: FlameIcon,
  snowflake: SnowflakeIcon,
  leaf: LeafIcon,
  split: SplitIcon,
  package: PackageIcon,
  droplet: DropletIcon,
  metal: MetalIcon,
  gauge: GaugeIcon,
  wrench: WrenchIcon,
} satisfies Record<IconName, (p: IconProps) => React.ReactNode>;

export function ServiceGlyph({
  name,
  className,
  strokeWidth,
}: IconProps & { name: IconName }) {
  const Cmp = map[name];
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
