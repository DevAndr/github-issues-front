import { ResponsePagination } from ".";

export enum MethodRequestType {
  POST='POST',
  GET='GET',
  PATCH='PATCH',
  PUT='PUT',
  DELETE='DELETE',
}

export type MethodRequestTypeAsset = {
  color: string
  backgroundColor: string
}

export interface Log {
  _id: number;
  datetime: string;
  method: MethodRequestType;
  statusCode: number;
  path: string;
  body?: string;
  error?: string;
  ip: string;
}

export type ResponsePaginationLogs = ResponsePagination<Log[]>;
