import React from 'react'
import { Link } from 'react-router-dom'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon'

import './../styles/Paginator.css'

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null

    return (
        <div className="pagination">
            <Link
                to={`#${currentPage > 1 ? currentPage - 1 : 1}`}
                className={`pagination__link ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={(e) => {
                    e.preventDefault()
                    onPageChange(currentPage > 1 ? currentPage - 1 : 1)
                }}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : 0}
            >
                <Icon css='icon' icon={faChevronLeft} />
            </Link>

            {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1
                return (
                    <Link
                        key={pageNumber}
                        to={`#${pageNumber}`}
                        className={`pagination__link ${currentPage === pageNumber ? 'pagination__link--selected' : ''}`}
                        onClick={(e) => {
                            e.preventDefault()
                            onPageChange(pageNumber)
                        }}
                    >
                        {pageNumber}
                    </Link>
                )
            })}

            <Link
                to={`#${currentPage < totalPages ? currentPage + 1 : totalPages}`}
                className={`pagination__link ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={(e) => {
                    e.preventDefault()
                    onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
                }}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : 0}
            >
                <Icon css='icon' icon={faChevronRight} />
            </Link>
        </div>
    )
}