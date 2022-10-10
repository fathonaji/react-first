import React from "react";

const Rendering = ({userList}) => {
    const ui = tableRendering(userList)
    return ui
}

const variableRendering = (a) => {
    const b = null
    const c = false
    const d = " "
    const e = 0
    const ui = <div>
        <div>a - undefined: {a}</div>
        <div>b - null: {b}</div>
        <div>c - true/false: {c}</div>
        <div>d - empty/whitespace: {d}</div>
        <div>e - 0: {e}</div>
    </div>
    return ui
}

const conditionalRendering = () => {
    const isLogin = false;
    return <div>{isLogin ? 'sudah login' : 'belum login'}</div>
}

const listRendering = (userList=[]) => {
    const displayUsers = userList.length > 0 && userList.map((user) => <li key={user.id}>{user.name} ({user.gender})</li>)
    const ui = <ul>{displayUsers}</ul>

    return ui
}

const tableRendering = (userList=[]) => {
    const ui = <table border="1" width="80%" style={{marginBottom:"2rem"}}>
    <thead>
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>GENDER</th>
    </tr>
    </thead>
    <tbody>
        {userList.length > 0 && userList.map(userList => {
            const {id, name, gender} = userList
            return <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{gender}</td>
            </tr>
        })}
    </tbody>
    </table>

    return ui
}

export default Rendering