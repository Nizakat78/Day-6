export interface Food {
    _id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    tags?: string[];
    description?: string;
    available: boolean;
    image?: {
      asset: {
        url: string;
      };
    };
  }
  