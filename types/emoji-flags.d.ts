declare module 'emoji-flags' {
  interface CountryFlag {
    emoji: string;
    unicode: string;
    name: string;
    title: string;
  }

  const emojiFlags: Record<string, CountryFlag>;
  export = emojiFlags;
} 