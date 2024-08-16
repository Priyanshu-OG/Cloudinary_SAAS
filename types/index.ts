// in @/types.ts or wherever you've defined your types
export interface Video {
    id: string;
    title: string;
    description: string | null;
    publicId: string;
    originalSize: string; // Change this to string if it's supposed to be a string
    compressedSize: string;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
  }