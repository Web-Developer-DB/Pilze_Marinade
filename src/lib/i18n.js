import de from "../i18n/de.json";
import en from "../i18n/en.json";
import ru from "../i18n/ru.json";

const maps = { de, en, ru };

export function t(locale, key) {
  return (maps[locale] && maps[locale][key]) || key;
}

export function supportedLocales() {
  return Object.keys(maps);
}
