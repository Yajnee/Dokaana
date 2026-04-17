export type SellerProfile = {
  shopName?: string;
  ownerName?: string;
  category?: string;
  city?: string;
  phone?: string;
  gst?: string;
};

export const sellerStorageKey = "dokaanaSellerProfile";

let cachedRawProfile: string | null = null;
let cachedParsedProfile: SellerProfile | null = null;

export function readStoredSellerProfile(): SellerProfile | null {
  if (typeof window === "undefined") {
    return null;
  }

  const savedProfile = window.localStorage.getItem(sellerStorageKey);

  if (!savedProfile) {
    cachedRawProfile = null;
    cachedParsedProfile = null;
    return null;
  }

  if (savedProfile === cachedRawProfile) {
    return cachedParsedProfile;
  }

  try {
    cachedRawProfile = savedProfile;
    cachedParsedProfile = JSON.parse(savedProfile) as SellerProfile;
    return cachedParsedProfile;
  } catch {
    cachedRawProfile = savedProfile;
    cachedParsedProfile = null;
    return null;
  }
}

export function getSellerDisplayName(profile: SellerProfile | null) {
  return profile?.ownerName?.trim() || profile?.shopName?.trim() || "Seller";
}
