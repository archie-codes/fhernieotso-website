// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: "eggs" | "chicken" | "turkey" | "specialty";
  price: number;
  image: string;
  features: string[];
  inStock: boolean;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "farm" | "products" | "operations";
}

// Contact Form Types
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

// Farm Info Types
export interface FarmStats {
  yearsInBusiness: number;
  chickensRaised: number;
  eggsProducedMonthly: number;
  percentageSustainable: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
}
