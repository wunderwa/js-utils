export default function calculatePagination(totalPages, activePage, pageNeighbours = 1, ellipsis = '...') {
  if (!Number.isInteger(pageNeighbours) || pageNeighbours < 1 ) {
    pageNeighbours = 1;
  }
  const rowLength =  pageNeighbours * 2 + 5;
  const additionalLength = rowLength - 1;

  if (totalPages <= rowLength) {
    return (new Array(totalPages)).fill(0).map((v,i) => i + 1);
  }

  let pageStart = activePage - (pageNeighbours + 2);
  if (pageStart < 1) {
    pageStart = 1;
  }
  let pageEnd = pageStart + additionalLength;
  if (pageEnd > totalPages) {
    pageEnd = totalPages;
  }
  // add pages in start of row if row length less then needed rowLength
  if (pageEnd < pageStart + additionalLength) {
    pageStart = pageStart - (pageStart + additionalLength - pageEnd);
  }

  let range = [];
  for (let page = pageStart; page <= pageEnd; page++) {
    range.push(page);
  }
  //Make sure we dont show pages that dont exist
  range = range.filter(page=> page > 0 && page <= totalPages);

  //Allow user to go to the first page if need be
  //The second entry should be either 2 or ellipsis(...)
  if (range[0] !== 1) {
    range[0] = 1;
    range[1] = ellipsis;
  }
  //Allow user to go the last page, second last entry should be second last page or ellipsis
  if (range[range.length-1] !== totalPages) {
    range[range.length - 2] = ellipsis;
    range[range.length - 1] = totalPages;
  }

  return range;
}
