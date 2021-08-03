import React from 'react';
import { Sidebar } from '../components/home/Sidebar';

export default function HomeScreen({ id }) {

    return (
        <div className="d-flex" style={{ height: '100vh' }} >
            <Sidebar id={id} />
        </div>
    )
}
