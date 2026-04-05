export interface Product {
  id: string;
  name: string;
  description: string;
  category: "eggs" | "chicken" | "turkey" | "specialty";
  price: number;
  priceDisplay?: string;
  image: string;
  features: string[];
  inStock: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "farm" | "products" | "operations";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: "general" | "wholesale" | "support";
  createdAt: Date;
  status: "new" | "read" | "replied";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Brown Eggs",
    description:
      "A full tray of 30 rich, flavorful organic brown eggs from our certified organic operation.",
    category: "eggs",
    price: 250,
    priceDisplay: "₱250.00 / tray of 30",
    image: "/images/eggs-brown-tray.png",
    features: [
      "Tray of 30 eggs",
      "Certified organic",
      "No antibiotics",
      "Rich yolks",
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "White Eggs",
    description:
      "A full tray of 30 fresh white eggs from our healthy, happy chickens, perfect for your daily needs.",
    category: "eggs",
    price: 200,
    priceDisplay: "₱200.00 / tray of 30",
    image: "/images/eggs-white-tray.png",
    features: [
      "Tray of 30 eggs",
      "Medium to Jumbo",
      "Farm-to-table",
      "Locally raised",
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "White RTL",
    description:
      "16 to 18-week-old White hens, fully vaccinated and ready to start producing eggs within a couple of weeks.",
    category: "chicken",
    price: 350,
    priceDisplay: "₱350.00 - ₱450.00 / head",
    image: "/images/layer-white-closeup.png",
    features: [
      "16 to 18 weeks old",
      "Fully vaccinated",
      "Immediate ROI",
      "High egg production",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Brown RTL",
    description:
      "16 to 18-week-old Brown hens, fully vaccinated and ready to start producing eggs within a couple of weeks.",
    category: "chicken",
    price: 350,
    priceDisplay: "₱350.00 - ₱450.00 / head",
    image: "/images/layer-brown-closeup.png",
    features: [
      "16 to 18 weeks old",
      "Fully vaccinated",
      "Immediate ROI",
      "Excellent layers",
    ],
    inStock: true,
  },
  // {
  //   id: "5",
  //   name: "Heritage Turkey",
  //   description: "Premium heritage breed turkey, perfect for special occasions",
  //   category: "turkey",
  //   price: 24.99,
  //   image: "/images/turkey-heritage.jpg",
  //   features: [
  //     "Heritage breed",
  //     "Slow-grown",
  //     "Superior flavor",
  //     "Pre-order available",
  //   ],
  //   inStock: false,
  // },
  // {
  //   id: "6",
  //   name: "Farm Fresh Duck Eggs",
  //   description: "Rich duck eggs with larger yolks, perfect for baking",
  //   category: "specialty",
  //   price: 7.99,
  //   image: "/images/eggs-duck.jpg",
  //   features: [
  //     "Large yolks",
  //     "Rich flavor",
  //     "Dozen per carton",
  //     "Premium quality",
  //   ],
  //   inStock: true,
  // },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "The Chicken Coop",
    description: "Our state-of-the-art, climate-controlled chicken housing",
    image: "/images/coop.jpg",
    category: "farm",
  },
  {
    id: "2",
    title: "Morning Harvest",
    description: "Fresh eggs collected daily from our free-range hens",
    image: "/images/harvest.jpg",
    category: "operations",
  },
  {
    id: "3",
    title: "Fresh Eggs Display",
    description: "Our premium selection of fresh, locally-raised eggs",
    image: "/images/eggs-display.jpg",
    category: "products",
  },
  {
    id: "4",
    title: "Farm Pasture",
    description: "Lush green pasture where our birds roam freely",
    image: "/images/pasture.jpg",
    category: "farm",
  },
  {
    id: "5",
    title: "Quality Control",
    description:
      "Careful inspection ensures every product meets our high standards",
    image: "/images/quality-check.jpg",
    category: "operations",
  },
  {
    id: "6",
    title: "Farm to Table",
    description: "Our commitment to bringing quality directly to your table",
    image: "/images/truck-delivery.png",
    category: "products",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Tindera sa Palengke",
    content:
      "Laging sariwa at maganda ang kalidad ng mga produkto mula sa Otso Poultry Farm. Hinahanap-hanap talaga ito ng mga suki ko!",
    image: "/images/testimonial-vendor.png",
    rating: 5,
  },
  {
    id: "2",
    name: "Chef Mateo Reyes",
    role: "May-ari ng Restawran",
    content:
      "Ibang klase ang sariwa at linamnam ng kanilang mga itlog. Sulit na sulit ang bawat sentimo, panalo sa mga customer namin.",
    image: "/images/testimonial-chef-new.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Aling Susan Dela Cruz",
    role: "Maybahay",
    content:
      "Mula nang lumipat kami sa Otso eggs, lasang-lasa ko agad ang diperensya. Napakalinamnam at laging sariwa. The best talaga!",
    image: "/images/testimonial-housewife.png",
    rating: 5,
  },
];

export const farmStats = {
  yearsInBusiness: 15,
  chickensRaised: 50000,
  eggsProducedMonthly: 15000,
  percentageSustainable: 100,
};

export const farmInfo = {
  name: "Fhernie Otso Group",
  mission:
    "To provide premium, sustainably-raised poultry products alongside seamless, world-class logistics and distribution solutions.",
  story:
    "An alliance of two powerhouse sister-companies: Otso Dragon Corporation (sustainable, premium poultry farming) and Fhernie Logistics Corporation (rapid, reliable distribution). We handle every single step from our farm directly to your table with unmatched quality and speed.",
  address: "Sampaga, San Vicente, Apalit, Pampanga",
  phone: "+63 917 503 6946",
  email: "info@fhernieotso.com",
};

// Contact Messages Storage (in-memory)
let contactMessages: ContactMessage[] = [
  {
    id: "1",
    name: "John Retailer",
    email: "john@retailstore.com",
    phone: "555-0101",
    subject: "Wholesale Inquiry",
    message: "Interested in stocking your eggs at our store.",
    type: "wholesale",
    createdAt: new Date("2024-03-10"),
    status: "read",
  },
  {
    id: "2",
    name: "Sarah Home",
    email: "sarah@email.com",
    phone: "555-0102",
    subject: "Product Question",
    message: "Are your eggs free-range?",
    type: "general",
    createdAt: new Date("2024-03-15"),
    status: "new",
  },
];

let messageIdCounter = 3;

// Contact Message Functions
export function addContactMessage(
  message: Omit<ContactMessage, "id" | "createdAt" | "status">,
): ContactMessage {
  const newMessage: ContactMessage = {
    ...message,
    id: String(messageIdCounter++),
    createdAt: new Date(),
    status: "new",
  };
  contactMessages.push(newMessage);
  return newMessage;
}

export function getContactMessages(): ContactMessage[] {
  return contactMessages;
}

export function updateMessageStatus(
  id: string,
  status: ContactMessage["status"],
): ContactMessage | undefined {
  const message = contactMessages.find((m) => m.id === id);
  if (message) {
    message.status = status;
  }
  return message;
}

export function deleteContactMessage(id: string): void {
  contactMessages = contactMessages.filter((m) => m.id !== id);
}
