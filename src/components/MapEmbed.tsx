interface MapEmbedProps {
  query?: string;
  height?: number;
  className?: string;
}

export default function MapEmbed({
  query = "436 Franklin Ave, Hartford, CT 06114",
  height = 420,
  className = "",
}: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        border: "1px solid #e2e8f0",
        background: "#ffffff",
        boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
      }}
    >
      <iframe
        title="Ugo DiGrazia Heating & Cooling — Hartford, CT"
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, display: "block" }}
      />
    </div>
  );
}
