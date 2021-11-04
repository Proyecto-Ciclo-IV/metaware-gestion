import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div>
            <div>Página Admin/usuarios</div>
            <Link href='/'>
                <a >Ir al Home</a>
            </Link>
        </div>
    )
}

export default index
