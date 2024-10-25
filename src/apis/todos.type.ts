export interface Item {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface DetailItem {
  id: number;
  name: string;
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
}
