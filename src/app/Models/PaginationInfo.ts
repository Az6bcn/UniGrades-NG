
export class PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}


export class PaginatedResult<T> {

  paginationInfo: PaginationInfo;
  result: Array<T>;
}
