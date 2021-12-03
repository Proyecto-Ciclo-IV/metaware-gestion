import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import { PrismaClient } from '.prisma/client';
import { InferGetServerSidePropsType } from "next";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const productos = [];
    return {
    props: { productos: JSON.parse(safeJsonStringify(productos)) }, // will be passed to the page component as props
};
}

const Productos = ({ productos }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log('Esta es la variable en el front', productos);
    return (
        <div>
        Productos:
        <div>Tabla productos</div>
        {productos &&
            productos.map((p) => {
            return <div key={p.id}>{p.nombre}</div>;
            })}
        </div>
    );
    };

    export default Productos;