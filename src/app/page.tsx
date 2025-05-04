"use client";

import { redirect } from "next/navigation";
import Constants from "@/constants";

export default function RootPage() {
  if (typeof window === "undefined"){
    redirect("/uk");
  }
  
  var langs = navigator.languages.map((lang) => new Intl.Locale(lang).language);

  var intersection = langs.filter(item => Constants.LOCALES.includes(item))[0];
  
  var userLocale = localStorage.getItem(Constants.USER_LOCALE_KEY);

  if (userLocale && Constants.LOCALES.includes(userLocale)) {
    intersection = userLocale;
  }

  if (intersection) { 
    redirect("/" + intersection);
  } else {
    redirect("/uk");
  }
}