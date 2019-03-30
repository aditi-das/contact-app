export interface ContactModel {
  name: string;
  rating: number;
  img: string;
  Description: string;
  Likes: string[];
  Dislikes: string[];
}

export interface People {
  People: ContactModel[];
}
