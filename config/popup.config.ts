export const SocialMedia = {
  TWITTER: "https://twitter.com/",
  INSTAGRAM: "https://instagram.com/",
} as const;

export type SocialMediaType = (typeof SocialMedia)[keyof typeof SocialMedia];

export interface PopupArtists {
  boothId: string;
  boothNumber: number;
  name: string;
  socialMedia: {
    socialMediaType: SocialMediaType;
    handle: string;
  }[];
}

const POPUP_ARTISTS: PopupArtists[] = [];
