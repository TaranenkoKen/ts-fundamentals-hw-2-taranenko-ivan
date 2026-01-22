export interface PixabayImage {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
};

export interface PixabayResponse {
  totalHits: number;
  hits: PixabayImage[];
};
