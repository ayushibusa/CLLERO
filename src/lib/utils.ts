import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    console.log(`[Analytics Event] Registered: "${eventName}"`, params || {});
  }
}
