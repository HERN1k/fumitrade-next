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

  var ruLang = langs.find(e => e === "ru-RU" || e === "ru");

  if (userLocale === null) {
    localStorage.setItem(Constants.USER_LOCALE_KEY, intersection);
  }

  if (ruLang !== undefined && ruLang !== null) {
    localStorage.setItem(Constants.USER_LOCALE_KEY, "uk");

    redirect("/uk");
  }

  if (userLocale !== null && !Constants.LOCALES.includes(userLocale)) {
    localStorage.setItem(Constants.USER_LOCALE_KEY, "uk");

    redirect("/uk");
  }

  if (userLocale !== null && Constants.LOCALES.includes(userLocale)) {
    intersection = userLocale;
  }

  if (intersection !== undefined && intersection !== null) { 
    redirect("/" + intersection);
  } else {
    redirect("/uk");
  }
}