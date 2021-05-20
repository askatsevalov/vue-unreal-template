type LocaleCodeToNameMap = {
  [key: string]: string;
};

const map: LocaleCodeToNameMap = {
  en: "English",
  ru: "Русский",
};

export default function localeCodeToName(code: string): string {
  return map[code];
}
