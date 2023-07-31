import React from 'react';

const List = () => {
    const names = ['Jack', 'Wilson', 'John', 'Jack'];

    const nameElements = names.map((name, index) => <h1 key={index}>{index} {name}</h1>);
    return (
        <div>
            {nameElements}
        </div>
    )
}

export default List;