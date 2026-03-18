export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  applications: string[];
  technicalSpecs: { parameter: string; specification: string; unit: string }[];
  thumbnails: string[];
}

export const categories = [
  "All",
  "Current Transformers",
  "Relays",
  "Smart Meters",
  "Power Supplies",
  "Breakers",
];

export const products: Product[] = [
  {
    id: "ct-50-5",
    name: "CT 50/5 Current Transformer",
    category: "Current Transformers",
    image: "https://placehold.co/600x400/111827/06b6d4?text=CT+50/5",
    description:
      "High-precision split-core 50/5A current transformer designed for industrial energy monitoring and billing metering applications. Provides accurate current sensing up to 50A for heavy-duty industrial environments.",
    specs: [
      "Ratio: 50/5A",
      "Accuracy Class: 0.5S",
      "Burden: 5VA",
      "Frequency: 50/60Hz",
    ],
    applications: [
      "Switchgear Panels & Distribution Boards",
      "Industrial Energy Management Systems",
      "Motor Protection Units",
      "Revenue Metering Applications",
    ],
    technicalSpecs: [
      { parameter: "Rated Primary Current", specification: "50", unit: "A" },
      { parameter: "Rated Secondary Current", specification: "5", unit: "A" },
      { parameter: "Insulation Level", specification: "0.72 / 3.0", unit: "kV" },
      { parameter: "Frequency Range", specification: "50 / 60", unit: "Hz" },
      { parameter: "Operating Temperature", specification: "-25 to +55", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=CT+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=CT+Top",
      "https://placehold.co/200x200/111827/06b6d4?text=CT+Detail",
    ],
  },
  {
    id: "ct-100-5",
    name: "CT 100/5 Industrial Transformer",
    category: "Current Transformers",
    image: "https://placehold.co/600x400/111827/06b6d4?text=CT+100/5",
    description:
      "Heavy-duty 100/5A wound-type current transformer with enhanced accuracy for industrial power monitoring and protection relay systems.",
    specs: [
      "Ratio: 100/5A",
      "Accuracy Class: 0.2S",
      "Burden: 10VA",
      "Frequency: 50/60Hz",
    ],
    applications: [
      "Power Distribution Monitoring",
      "Protection Relay Systems",
      "SCADA Integration",
      "Load Management Systems",
    ],
    technicalSpecs: [
      { parameter: "Rated Primary Current", specification: "100", unit: "A" },
      { parameter: "Rated Secondary Current", specification: "5", unit: "A" },
      { parameter: "Insulation Level", specification: "0.72 / 3.0", unit: "kV" },
      { parameter: "Frequency Range", specification: "50 / 60", unit: "Hz" },
      { parameter: "Operating Temperature", specification: "-25 to +55", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=CT100+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=CT100+Top",
      "https://placehold.co/200x200/111827/06b6d4?text=CT100+Detail",
    ],
  },
  {
    id: "relay-pr200",
    name: "PR-200 Protection Relay",
    category: "Relays",
    image: "https://placehold.co/600x400/111827/06b6d4?text=PR-200+Relay",
    description:
      "Microprocessor-based digital protection relay with overcurrent, earth fault, and thermal overload protection for medium voltage applications.",
    specs: [
      "Type: Overcurrent/Earth Fault",
      "Rated Voltage: 220V AC",
      "Contact Rating: 5A/250V",
      "Communication: RS485 Modbus",
    ],
    applications: [
      "Medium Voltage Switchgear",
      "Transformer Protection",
      "Motor Protection Circuits",
      "Feeder Protection",
    ],
    technicalSpecs: [
      { parameter: "Rated Voltage", specification: "220", unit: "V AC" },
      { parameter: "Contact Rating", specification: "5", unit: "A" },
      { parameter: "Operating Time", specification: "< 30", unit: "ms" },
      { parameter: "Power Consumption", specification: "< 5", unit: "W" },
      { parameter: "Operating Temperature", specification: "-20 to +60", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=Relay+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=Relay+Back",
      "https://placehold.co/200x200/111827/06b6d4?text=Relay+Side",
    ],
  },
  {
    id: "sm-3000",
    name: "SM-3000 Smart Meter",
    category: "Smart Meters",
    image: "https://placehold.co/600x400/111827/06b6d4?text=SM-3000",
    description:
      "Three-phase digital smart meter with real-time energy monitoring, power quality analysis, and cloud connectivity for industrial facilities.",
    specs: [
      "Phases: 3-Phase 4-Wire",
      "Accuracy: Class 0.5S",
      "Display: LCD Backlit",
      "Communication: Wi-Fi + RS485",
    ],
    applications: [
      "Industrial Energy Auditing",
      "Building Management Systems",
      "Demand Side Management",
      "Sub-metering Applications",
    ],
    technicalSpecs: [
      { parameter: "Voltage Range", specification: "3x57.7/100 - 277/480", unit: "V" },
      { parameter: "Current Range", specification: "0.05 - 6", unit: "A" },
      { parameter: "Frequency", specification: "50 / 60", unit: "Hz" },
      { parameter: "Accuracy Class", specification: "0.5S", unit: "" },
      { parameter: "Operating Temperature", specification: "-25 to +70", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=Meter+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=Meter+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=Meter+LCD",
    ],
  },
  {
    id: "ps-500w",
    name: "PS-500W Industrial Power Supply",
    category: "Power Supplies",
    image: "https://placehold.co/600x400/111827/06b6d4?text=PS-500W",
    description:
      "500W DIN-rail mount industrial switching power supply with wide input range, overcurrent protection, and high MTBF for 24/7 operation.",
    specs: [
      "Output: 24V DC / 20A",
      "Input: 85-264V AC",
      "Efficiency: >93%",
      "Protection: OVP/OCP/SCP",
    ],
    applications: [
      "PLC & Automation Systems",
      "Control Panel Power",
      "Industrial IoT Gateways",
      "DCS System Power",
    ],
    technicalSpecs: [
      { parameter: "Output Voltage", specification: "24", unit: "V DC" },
      { parameter: "Output Current", specification: "20", unit: "A" },
      { parameter: "Input Range", specification: "85 - 264", unit: "V AC" },
      { parameter: "Efficiency", specification: "> 93", unit: "%" },
      { parameter: "MTBF", specification: "> 300,000", unit: "Hours" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=PSU+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=PSU+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=PSU+DIN",
    ],
  },
  {
    id: "mcb-63a",
    name: "MCB 63A Miniature Circuit Breaker",
    category: "Breakers",
    image: "https://placehold.co/600x400/111827/06b6d4?text=MCB+63A",
    description:
      "63A thermal-magnetic miniature circuit breaker with C-curve tripping characteristics, suitable for motor and transformer protection in industrial panels.",
    specs: [
      "Rating: 63A",
      "Poles: 3P",
      "Breaking Capacity: 10kA",
      "Curve: C",
    ],
    applications: [
      "Motor Protection Circuits",
      "Industrial Panel Boards",
      "Transformer Secondary Protection",
      "Commercial Building Distribution",
    ],
    technicalSpecs: [
      { parameter: "Rated Current", specification: "63", unit: "A" },
      { parameter: "Rated Voltage", specification: "415", unit: "V AC" },
      { parameter: "Breaking Capacity", specification: "10", unit: "kA" },
      { parameter: "Number of Poles", specification: "3P", unit: "" },
      { parameter: "Tripping Curve", specification: "C", unit: "" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=MCB+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=MCB+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=MCB+DIN",
    ],
  },
  {
    id: "relay-tr100",
    name: "TR-100 Thermal Overload Relay",
    category: "Relays",
    image: "https://placehold.co/600x400/111827/06b6d4?text=TR-100+Relay",
    description:
      "Adjustable thermal overload relay with trip class 10/20 selection, phase loss sensitivity, and manual/auto reset for motor protection.",
    specs: [
      "Current Range: 63-100A",
      "Trip Class: 10/20",
      "Reset: Manual/Auto",
      "Mounting: DIN Rail",
    ],
    applications: [
      "Motor Overload Protection",
      "Pump Control Circuits",
      "Conveyor Motor Protection",
      "HVAC Compressor Protection",
    ],
    technicalSpecs: [
      { parameter: "Adjustment Range", specification: "63 - 100", unit: "A" },
      { parameter: "Trip Class", specification: "10 / 20", unit: "" },
      { parameter: "Rated Voltage", specification: "690", unit: "V AC" },
      { parameter: "Aux Contacts", specification: "1NO + 1NC", unit: "" },
      { parameter: "Operating Temperature", specification: "-20 to +60", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=TR100+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=TR100+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=TR100+Back",
    ],
  },
  {
    id: "sm-1000",
    name: "SM-1000 Single Phase Smart Meter",
    category: "Smart Meters",
    image: "https://placehold.co/600x400/111827/06b6d4?text=SM-1000",
    description:
      "Compact single-phase smart energy meter with Modbus communication, harmonic measurement, and tamper detection for commercial metering.",
    specs: [
      "Phase: Single Phase",
      "Accuracy: Class 1.0",
      "Display: LED Segment",
      "Communication: RS485 Modbus",
    ],
    applications: [
      "Commercial Sub-metering",
      "Tenant Billing Systems",
      "Solar Inverter Monitoring",
      "EV Charging Stations",
    ],
    technicalSpecs: [
      { parameter: "Voltage Range", specification: "180 - 280", unit: "V AC" },
      { parameter: "Current Range", specification: "5 - 80", unit: "A" },
      { parameter: "Frequency", specification: "50 / 60", unit: "Hz" },
      { parameter: "Accuracy Class", specification: "1.0", unit: "" },
      { parameter: "Operating Temperature", specification: "-25 to +55", unit: "°C" },
    ],
    thumbnails: [
      "https://placehold.co/200x200/111827/06b6d4?text=SM1000+Front",
      "https://placehold.co/200x200/111827/06b6d4?text=SM1000+Side",
      "https://placehold.co/200x200/111827/06b6d4?text=SM1000+LCD",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(id: string, count = 3): Product[] {
  const product = getProductById(id);
  if (!product) return products.slice(0, count);
  const sameCat = products.filter((p) => p.category === product.category && p.id !== id);
  const others = products.filter((p) => p.category !== product.category && p.id !== id);
  return [...sameCat, ...others].slice(0, count);
}
