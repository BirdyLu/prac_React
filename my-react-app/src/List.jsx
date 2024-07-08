function List(){
    const fruits = [
        {name: 'Coconut', amount: 32, id: 1},
        {name: 'Apple', amount: 12, id: 2}, 
        {name: 'Orange', amount: 3, id: 3}, 
        {name: 'Stupidity', amount: 30, id: 4}, 
        {name: 'Hamburger', amount: 5, id: 5}, 
        {name: '魔芋爽', amount: 9, id: 6},
    ];
    fruits.sort((a,b) => b.amount - a.amount); //weird function syntax!
    const listItems = fruits.map(i => <li key={i.id} id={i.id}>{i.name} * {i.amount}</li>);
    return (<ol>{listItems}</ol>);
}

export default List