"use client";

import { redirect } from "next/navigation";
import Constants from "@/constants";

export default function RootPage() {
  if (typeof window === "undefined"){
    redirect("/uk");
  }
  
  var locale = localStorage.getItem(Constants.USER_LOCALE_KEY);

  if (locale === null) {
    localStorage.setItem(Constants.USER_LOCALE_KEY, "uk");

    redirect("/uk");
  }

  if (locale !== null && !Constants.LOCALES.includes(locale)) {
    localStorage.setItem(Constants.USER_LOCALE_KEY, "uk");

    redirect("/uk");
  }

  if (locale !== null) { 
    redirect("/" + locale);
  } else {
    redirect("/uk");
  }
}