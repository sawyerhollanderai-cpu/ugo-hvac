import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow flex items-center gap-3 ${
          centered ? "justify-center" : ""
        } ${dark ? "text-paper/60" : "text-body"}`}
      >
        {index && <span className="text-ember">/ {index}</span>}
        {eyebrow}
      </p>
      <h2
        className={`display mt-4 text-4xl md:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? "text-paper/65" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
