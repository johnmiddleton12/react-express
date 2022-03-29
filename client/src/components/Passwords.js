import React, { useState, useEffect } from 'react';
import { Grid, Text, Table, Button } from '@mantine/core';
import '../App.css';

export default function Passwords() {

    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        getPasswords();
    }, []);

    const getPasswords = () => {
        // Get the passwords and store them in state
        fetch('/api/passwords')
            .then(res => res.json())
            .then(passwords => setPasswords(passwords));
    };

    const rows =

        passwords.length ?

            (passwords.map(password => (
                <tr key={password}>
                    <td>{password}</td>
                </tr>
            )))

            :

            (<tr key={"empty"}>
                <td>No passwords found</td>
            </tr>);


    return (

            <Grid>
                <Grid.Col style={{textAlign: 'center'}} span={12}>
                <Text style={{fontSize : '4rem'}} weight={700}>5 Passwords.</Text>
                </Grid.Col>

                <Grid.Col span={2}></Grid.Col>
                <Grid.Col span={8}>
                <Table>
                    <thead>
                        <tr>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>

                </Table>
                </Grid.Col>
                <Grid.Col span={2}></Grid.Col>

                <Grid.Col span={4}></Grid.Col>
                <Grid.Col style={{textAlign: 'center'}} span={0}>
                <Button
                    onClick={getPasswords}>
                    Get More Passwords
                </Button>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>

            </Grid>

            
    );

};