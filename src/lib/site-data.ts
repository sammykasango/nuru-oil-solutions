import industrialImg from "@/assets/industrial-oil.jpg";
import wellnessImg from "@/assets/wellness-oil.jpg";

export const site = {
  name: "Nuru Oils",
  tagline: "Premium Oil Solutions",
  phone: "+254 700 000 000",
  whatsapp: "https://wa.me/254700000000",
  email: "sales@nuruoils.com",
};

export type Product = {
  code: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    code: "Product 01",
    name: "Premium Engine Oil",
    category: "Automotive & Industrial",
    description: "Reliable lubrication engineered for demanding engine environments.",
    applications: ["Automotive", "Engines"],
    image: industrialImg,
    imageAlt: "Golden industrial oil being poured into mechanical equipment",
    featured: true,
  },
  {
    code: "Product 02",
    name: "Heavy-Duty Lubricant",
    category: "Industrial",
    description: "Designed for machinery operating under demanding conditions.",
    applications: ["Machinery", "Industrial Equipment"],
    image: industrialImg,
    imageAlt: "Amber lubricant flowing over industrial machinery components",
    featured: true,
  },
  {
    code: "Product 03",
    name: "Natural Essential Oil",
    category: "Wellness",
    description: "Premium aromatic oil for wellness and lifestyle applications.",
    applications: ["Wellness", "Spa"],
    image: wellnessImg,
    imageAlt: "Premium amber wellness oils with white flower and rolled towel",
    featured: true,
  },
  {
    code: "Product 04",
    name: "Premium Body & Wellness Oil",
    category: "Personal Care",
    description: "Refined oil solution for beauty and wellness routines.",
    applications: ["Beauty", "Personal Care"],
    image: wellnessImg,
    imageAlt: "Glass bottles of golden body oil on a wooden tray",
    featured: true,
  },
];

export const categories = [
  {
    id: "industrial",
    title: "Industrial & Automotive Oils",
    description:
      "High-performance lubrication solutions designed to support engines, machinery and demanding mechanical environments.",
    tags: ["Automotive", "Engines", "Machinery", "Industrial Equipment", "Mechanical Systems"],
    cta: "Explore Industrial Oils",
    image: industrialImg,
    imageAlt: "Golden industrial oil being poured into mechanical equipment",
    tone: "dark" as const,
  },
  {
    id: "wellness",
    title: "Natural & Wellness Oils",
    description:
      "Premium oil products designed for wellness, beauty, personal care and lifestyle applications.",
    tags: ["Wellness", "Beauty", "Spa", "Personal Care", "Lifestyle"],
    cta: "Explore Wellness Oils",
    image: wellnessImg,
    imageAlt: "Premium amber wellness oils with white flower and rolled towel",
    tone: "light" as const,
  },
];

export const trustItems = [
  { title: "Quality Focus", copy: "Consistent product standards." },
  { title: "Reliable Supply", copy: "Built for dependable commercial demand." },
  { title: "Versatile Applications", copy: "Solutions across multiple markets." },
  { title: "Business Partnership", copy: "Supporting retailers, distributors and buyers." },
];

export const reasons = [
  {
    num: "01",
    title: "Quality First",
    copy: "Every product is developed around consistent quality and dependable performance.",
  },
  {
    num: "02",
    title: "Reliable Supply",
    copy: "Built to support customers who need dependable product availability.",
  },
  {
    num: "03",
    title: "Market Versatility",
    copy: "Serving diverse requirements across industrial, automotive, commercial and wellness markets.",
  },
  {
    num: "04",
    title: "Partnership Mindset",
    copy: "We work with customers, retailers and distributors to build long-term value.",
  },
];

export const applications = [
  { title: "Automotive", copy: "Engine and vehicle lubrication solutions." },
  { title: "Industrial", copy: "Solutions for machinery and operational environments." },
  { title: "Manufacturing", copy: "Oil products supporting production and equipment requirements." },
  { title: "Wellness", copy: "Premium oils for lifestyle and wellness applications." },
  { title: "Beauty & Personal Care", copy: "Natural oil products for beauty-related applications." },
  { title: "Commercial Supply", copy: "Bulk and wholesale solutions for business customers." },
];

export const testimonials = [
  {
    quote:
      "The product quality and consistency have made it easier for us to serve our customers.",
    name: "Business Customer",
    company: "Automotive & Industrial Sector",
  },
  {
    quote:
      "Supply has been dependable, which helps us plan stock with far more confidence.",
    name: "Retail Partner",
    company: "Retail & Distribution Sector",
  },
  {
    quote:
      "The wellness range presents well on shelf and fits the standard our clients expect.",
    name: "Wellness Business",
    company: "Spa & Personal Care Sector",
  },
];

export const faqs = [
  {
    q: "What types of oil products do you offer?",
    a: "Our portfolio is organised into two clear families: industrial and automotive oils for engines, machinery and mechanical environments, and natural and wellness oils for beauty, personal care and lifestyle use. Specific product details are shared on enquiry.",
  },
  {
    q: "Do you supply wholesale quantities?",
    a: "Wholesale supply is available as a configurable business option. Share your requirement through the enquiry form and our team will confirm what can be supported.",
  },
  {
    q: "Do you work with distributors?",
    a: "Distributor partnerships are an available business pathway. We work with partners who want dependable products and long-term commercial opportunities.",
  },
  {
    q: "Where can I purchase your products?",
    a: "Purchasing and stockist information is configurable per market. Contact our team by phone, email or WhatsApp and we will direct you to the right purchase route.",
  },
  {
    q: "Can businesses request product information?",
    a: "Yes. Use the enquiry form and select your customer type and product interest, and our team will respond with the relevant product information.",
  },
  {
    q: "Do you offer bulk supply?",
    a: "Bulk supply is a configurable option based on product family and requirement. Tell us your volumes and we will advise on availability.",
  },
];