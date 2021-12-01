import React from 'react';
import Input from "./UI/input/Input";
import SortSelect from "./SortSelect";

const FilterAndSort = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <SortSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Sort by'}
                options={[
                    {value: 'title', name: 'Title'},
                    {value: 'body', name: 'Description'}
                ]}
            />
        </div>
    );
};

export default FilterAndSort;
