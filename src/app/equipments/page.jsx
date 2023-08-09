

"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { Table, TableBody, TableHeader, TableRow, TableColumn, TableCell, getKeyValue } from "@nextui-org/table";
import Button from "../Components/Navigation/Button";
export function equipments() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)



    const handleClick = () => {
        fetch('http://localhost:8080/getEquipments')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>
    };

    const InsertData = () => {
        fetch('http://localhost:8080/equipments')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>
    };

    return (

        <div>
            <form><center>
                <label > Equipment Name:
                    <input type="text" name="name" />
                </label>
                <label > Service Date
                    <input type="date" name="name" />
                </label>
                <label > Defected Date
                    <input type="date" name="name" />
                </label>
                
                    <button onClick={InsertData} className="button1"> Insert </button>
                
            </center>
            </form>
            {isLoading ? <p>Loading...</p> : (
                <div>
                    {data.length === 0 ? <p>No profile data</p> : (
                        <Table aria-label="Example static collection table" className="Table">
                            <TableHeader className="Table-header">
                                <TableColumn className="Table-column" key="1">EQUIPMENT NAME</TableColumn>
                                <TableColumn className="Table-column" key="2">SERVICE DATE</TableColumn>
                                <TableColumn className="Table-column" key="3">DEFECTED DATE</TableColumn>
                            </TableHeader>
                            <TableBody >
                                {data.map(equipment =>
                                    <TableRow className="Table-body" key={equipment.key}>
                                        <TableCell className="Table-body"><center>
                                            {equipment.equipmentName}</center></TableCell>
                                        <TableCell className="Table-body"><center>{equipment.serviceDate}</center></TableCell>
                                        <TableCell className="Table-body"><center>{equipment.defectedDate}</center></TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}
                </div>
            )}

            <button className="button" onClick={handleClick}>All Equipments</button>
        </div>


    );
}

export default equipments