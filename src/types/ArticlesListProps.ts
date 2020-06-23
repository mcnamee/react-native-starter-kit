import { List } from "./List";

export interface ArticlesListProps {
  error: string;
  loading: boolean;
  listFlat: ReadonlyArray<List>;
  reFetch: any;
  meta: { page: number; lastPage: number };
}
