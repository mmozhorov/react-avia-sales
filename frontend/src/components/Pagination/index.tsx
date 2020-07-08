import React from 'react';

import './pagination.css';

export const Pagination = ( props ) => {
    const {
        ticketsCount,
        limit,
        offset,
        handlePagination
    } = props;

    const countOfPage = Math.ceil (ticketsCount / limit );

    const handlePreviousPage = ( ) => {
        handlePagination( offset - 1 )
    }

    const handleNextPage = ( ) => {
        handlePagination( offset + 1 )
    }

    const generatePaginationLinks = ( pageCount: number ) =>
        Array(pageCount).fill(0).map(
            (item, i) =>
                <li key={i} className="page-item" onClick={() => handlePagination(i)}>
                    <span className={`page-link ${offset === i ? 'page-item--active': ''}`}>{i+1}</span>
                </li>
        );

    return (
        <nav className="pagination-block">
            <ul className="pagination">
                <li className="page-item" onClick={handlePreviousPage}><span className="page-link">Previous</span></li>
                {generatePaginationLinks(countOfPage)}
                <li className="page-item" onClick={handleNextPage}><span className="page-link">Next</span></li>
            </ul>
        </nav>
    )
}