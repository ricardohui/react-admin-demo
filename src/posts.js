import * as React from "react";
import {List, Datagrid, TextField, ReferenceField, EditButton} from 'react-admin';

export const PostList = props =>(
    <List {...props}>
        <Datagrid>
            <TextField source="id"></TextField>
            <ReferenceField reference={"users"} source="userId">
                <TextField source="name"></TextField>
            </ReferenceField>
            <TextField source="title"></TextField>
            <EditButton/>
        </Datagrid>
    </List>
)

