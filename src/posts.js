import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

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

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);
