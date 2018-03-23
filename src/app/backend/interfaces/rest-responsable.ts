export interface RestResponsable<T> {
  status: number;
  id: number;
  msg: string;
  body: T;
}
