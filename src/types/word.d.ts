type Phonetics = {
  text: string;
  audio?: string;
};

type Definition = {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type license = {
  name: string;
  url: string;
};

type sourceUrls = {
  [key: string]: string;
};
export interface Word {
  word: string;
  phonetic: string;
  sourceUrls: sourceUrls;
  license: license;
  phonetics: Phonetics[];
  origin: string;
  meanings: Meaning[];
}
