export interface ArticlesFormProps {
  error: string;
  loading: boolean;
  success: string;
  defaultValues: {
    email: string;
  };
  onFormSubmit: any;
}
