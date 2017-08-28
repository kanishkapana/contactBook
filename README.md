# Contact Book Api

### Clone Contact Book Api

`git clone https://github.com/kanishkapana/contactBook.git`

## Run the Project
`npm start`
Default port is 3000 and default host is localhost. (http://localhost:3000)

# Api Endpoints
- Create Contact - `POST - localhost:3000/contacts`
```
Sample Request Body 
{
    "first_name": "k",
    "last_name": "b",
    "email": "k@test.com",
    "phone": "+94 (881) 426-2334"
}

Sample Response 
{
    "__v": 0,
    "updatedAt": "2017-08-28T15:16:52.450Z",
    "createdAt": "2017-08-28T15:16:52.450Z",
    "first_name": "k",
    "last_name": "b",
    "email": "k@test.com",
    "phone": "+94 (881) 426-2334",
    "_id": "59a433e459b241569f26af6d"
}
```

- List Contacts - `GET - localhost:3000/contacts`

```
Sample Response
[
    {
        "_id": "59a42cd0489b22da91ba694b",
        "updatedAt": "2017-08-28T14:46:40.042Z",
        "createdAt": "2017-08-28T14:46:40.042Z",
        "first_name": "kk",
        "last_name": "bb",
        "email": "kk@rodemco.com",
        "phone": "+94 (881) 426-2334",
        "__v": 0
    },
    {
        "_id": "59a42cd7489b22da91ba694c",
        "updatedAt": "2017-08-28T14:46:47.908Z",
        "createdAt": "2017-08-28T14:46:47.908Z",
        "first_name": "kk",
        "last_name": "bb",
        "email": "kk@rodemco.com",
        "phone": "+94 (881) 426-2334",
        "__v": 0
    },
]
```


