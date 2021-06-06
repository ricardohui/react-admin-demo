import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import CustomUrlField from './CustomUrlField';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source={"name"}/>
            <TextField source={"username"}/>
            <EmailField source={"email"}/>
            <TextField source={"address.street"}/>
            <TextField source={"phone"}/>
            <CustomUrlField source="website"></CustomUrlField>
            <TextField source="company.name"></TextField>
        </Datagrid>
</List>);
