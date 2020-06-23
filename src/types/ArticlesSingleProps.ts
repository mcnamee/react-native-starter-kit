import { Article } from "./Article";

export interface ArticlesSingleProps {
  error: string;
  loading: boolean,
  article: Article,
  reFetch: any,
}
