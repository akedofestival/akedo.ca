interface Opportunity {
  title: string;
  description: string;
  reviewNote?: string;
  isFeatured?: boolean;
  postedOn?: Date;
  applicationLinks?: {
    label: string;
    href: string;
  }[];
  statusLabel?: string;
  image?: {
    src: string;
    width: number;
    height: number;
    isWide?: boolean;
    fadeLeft?: boolean;
  };
}

export type { Opportunity };
