import React from "react";
import {Link, useParams} from 'react-router-dom'

export function TaskPage() {
    const {id} = useParams();

    return <>
        <h1>UD</h1>
        <Link to="/list">back</Link>
    </>;
}