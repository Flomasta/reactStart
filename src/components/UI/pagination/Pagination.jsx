import React from 'react';
import cl from './Pagination.module.css'
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    let active_page = [cl.pagination__page, cl.pagination__active].join(' ')
    let page_class = cl.pagination__page
    console.log(active_page)
    return (

        <div className={cl.pagination__wrapper}>
            {pagesArray.map(p =>
                <span onClick={() => changePage(p)}
                      className=
                          {page === p ? `${active_page}` : `${page_class}`}>
            {p}</span>)}
        </div>

    );
};

export default Pagination;
