export interface List {
  placeholder: boolean;
  id: number;
  name: string;
  date: string;
  content: string;
  excerpt: string;
  contentRaw: string;
  slug: string | null;
  link: string | null;
  image: string | undefined;
}
