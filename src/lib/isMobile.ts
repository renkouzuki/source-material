export type DeviceType = "mobile" | "tablet" | "desktop";

export function getDeviceType(userAgent?: string): DeviceType {
  const ua =
    userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");

  const isTablet = /ipad|tablet|(android(?!.*mobile))|silk/i.test(ua);

  const isMobile =
    /iphone|ipod|android.*mobile|windows phone|blackberry|bb10/i.test(ua);

  if (isTablet) return "tablet";
  if (isMobile) return "mobile";
  return "desktop";
}

export function isMobile(userAgent?: string): boolean {
  return getDeviceType(userAgent) === "mobile";
}

export function isTablet(userAgent?: string): boolean {
  return getDeviceType(userAgent) === "tablet";
}

export function isDesktop(userAgent?: string): boolean {
  return getDeviceType(userAgent) === "desktop";
}
