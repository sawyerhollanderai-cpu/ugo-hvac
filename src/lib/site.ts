export const PHONE_DISPLAY = "860-296-1281";
export const PHONE_TEL = "tel:8602961281";
export const EMAIL = "ugo@ugohvac.com";
export const ADDRESS = "436 Franklin Ave, Hartford, CT 06114";
export const LICENSE = "CT Lic. #306632";
export const HOURS = "Mon–Fri · 8:00a – 4:30p";

export type Accent = "ember" | "glacier" | "ink";

export type IconName =
  | "flame"
  | "snowflake"
  | "leaf"
  | "split"
  | "package"
  | "droplet"
  | "metal"
  | "gauge"
  | "wrench";

export interface Service {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stat?: string;
  accent: Accent;
  icon: IconName;
}

export const services: Service[] = [
  {
    id: "heating",
    index: "01",
    title: "Heating",
    tagline: "Furnaces, boilers & heat pumps tuned for Connecticut winters.",
    description:
      "Connecticut winters are no joke, and a reliable heating system isn't optional — it's essential. We install, service, and repair Carrier gas furnaces, hot water boilers, and heat pump systems. Every installation is sized for your home and tuned for maximum efficiency.",
    features: [
      "Carrier gas furnaces & boilers",
      "Heat pump systems (13–21 SEER)",
      "2-stage compressors & variable-speed fans",
      "Heating tune-ups & maintenance",
      "Emergency heating repair",
      "System replacement & upgrade",
    ],
    accent: "ember",
    icon: "flame",
  },
  {
    id: "cooling",
    index: "02",
    title: "Air Conditioning",
    tagline: "Central AC sized right, installed properly, built to last.",
    description:
      "Stay cool all summer with a system that's sized right and installed properly. Carrier systems range from 13 SEER to 21 SEER, with sound-reduction Silencer System II™ design and WeatherArmor Ultra™ protection built in.",
    features: [
      "Carrier central AC installation",
      "Silencer System II™ sound reduction",
      "WeatherArmor Ultra™ durability",
      "Seasonal tune-ups",
      "Emergency AC repair",
      "Air handlers & condenser replacement",
    ],
    accent: "glacier",
    icon: "snowflake",
  },
  {
    id: "air-quality",
    index: "03",
    title: "Indoor Air Quality",
    tagline: "Cleaners, UV lights & ventilators for healthier air.",
    description:
      "Allergens, bacteria, humidity imbalance, and stale air all affect how your family feels day to day. We integrate a full range of air-quality products directly with your existing HVAC system.",
    features: [
      "Whole-home air cleaners",
      "UV germicidal lights",
      "Whole-home humidifiers",
      "Energy recovery ventilators",
      "Carbon monoxide detectors",
      "Programmable thermostats & zoning",
    ],
    stat: "The air inside your home can be 2–5× more polluted than the air outside.",
    accent: "glacier",
    icon: "leaf",
  },
  {
    id: "duct-free",
    index: "04",
    title: "Duct-Free Systems",
    tagline: "Mini-splits for additions, sunrooms & rooms ducts can't reach.",
    description:
      "Mini-split heat pumps are the most flexible, efficient way to heat and cool spaces that don't have ductwork — sunrooms, finished basements, additions, garages. Also ideal for whole-home zoning when you want independent temperature control in different rooms.",
    features: [
      "Single & multi-zone mini-splits",
      "Heat pump & cooling-only options",
      "No ductwork required",
      "Year-round heating & cooling",
      "Ideal for additions & retrofits",
    ],
    accent: "ember",
    icon: "split",
  },
  {
    id: "packaged",
    index: "05",
    title: "Packaged Units",
    tagline: "Heating & cooling in one outdoor unit — no basement required.",
    description:
      "Packaged HVAC systems combine heating and cooling in a single outdoor unit, keeping mechanical equipment out of your living space. Common in Connecticut homes without a basement or utility closet for a traditional split system.",
    features: [
      "Gas/electric packaged systems",
      "Rooftop & ground-mount units",
      "All-in-one heating & cooling",
      "Installation & replacement",
      "Preventive maintenance plans",
    ],
    accent: "ink",
    icon: "package",
  },
  {
    id: "water-heaters",
    index: "06",
    title: "Water Heaters",
    tagline: "Tank & tankless — hot water on demand, every time.",
    description:
      "Don't wait until your water heater fails. We install tank and tankless heaters and help you choose the right size and fuel type for your household. Tankless units deliver hot water on demand and last significantly longer than tank heaters.",
    features: [
      "Tank & tankless installation",
      "Gas & electric options",
      "Emergency replacement",
      "Efficiency upgrades",
      "Annual inspections",
    ],
    accent: "ember",
    icon: "droplet",
  },
  {
    id: "sheet-metal",
    index: "07",
    title: "Sheet Metal Fabrication",
    tagline: "Custom duct, lab hoods & exhaust — bent in our own shop.",
    description:
      "What sets us apart: we fabricate sheet metal in-house. That means custom duct systems, lab hoods, and specialty exhaust built precisely for your space — in welded black iron, aluminum, or stainless steel — without waiting on third-party shops.",
    features: [
      "Custom duct systems",
      "Lab hoods & exhaust systems",
      "Welded black iron fabrication",
      "Aluminum & stainless steel work",
      "Specialty one-off pieces",
    ],
    accent: "ink",
    icon: "metal",
  },
  {
    id: "duct-sealing",
    index: "08",
    title: "Duct Sealing",
    tagline: "Stop paying to heat air that never reaches the room.",
    description:
      "Leaky ductwork is one of the biggest hidden causes of high utility bills and uneven temperatures. We test, seal, and rebalance duct systems so the air you pay to heat or cool actually reaches the rooms it's supposed to.",
    features: [
      "Duct leak testing",
      "Sealing & rebalancing",
      "Lower utility bills",
      "Better whole-home comfort",
      "Existing system optimization",
    ],
    stat: "Approximately 20% of conditioned air is lost through leaks and poorly connected ducts.",
    accent: "glacier",
    icon: "gauge",
  },
  {
    id: "plumbing",
    index: "09",
    title: "Plumbing",
    tagline: "One call, one team — for projects that touch both systems.",
    description:
      "We handle plumbing installation and repair alongside our HVAC work. One call, one trusted team — useful when a project touches both systems (water heater swaps, gas line work, condensate drains).",
    features: [
      "Installation & repair",
      "On-site assessment",
      "Gas line work",
      "Drain & condensate work",
      "Coordinated with HVAC projects",
    ],
    accent: "glacier",
    icon: "wrench",
  },
];

export const towns = [
  "Hartford",
  "West Hartford",
  "East Hartford",
  "Wethersfield",
  "Newington",
  "Glastonbury",
  "Rocky Hill",
  "Manchester",
  "Bloomfield",
  "Berlin",
  "Cromwell",
  "Kensington",
];

export const agreementPerks = [
  "2 annual performance tune-ups (furnace + AC)",
  "24-hour priority emergency service, 365 days/year",
  "10% off replacement parts and repair labor",
  "No trip charges",
  "Energy-saving coil cleaning included",
  "30-day labor warranty",
  "10% off new unit purchases",
];
