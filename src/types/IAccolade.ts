export interface IAccolade {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
  dateUpdated: string;
  editToken: string;
  tags?: Array<string | null>;
  authorId?: string;
}
