import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

interface Pagination {
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}

export interface ResponsePagination<T> {
  data: T;
  pagination: Pagination;
}
