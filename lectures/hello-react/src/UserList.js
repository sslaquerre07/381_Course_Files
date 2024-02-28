import React from 'react';

const list = [
    {
        title:"React",
        number: 1
    },
    {
        title:"Node",
        number: 2
    }
]

function UserList(){
    return(
        <div>
            <h1>List Results: </h1>
            <hr />
            {list.map(function(item){
                return (<div>
                            <div>{item.title}</div>
                            <div>{item.number}</div>
                        </div>
                )
            })}
        </div>
    )
}
export default UserList;