# REST-api for Lost And Found course-work Angular course 2022

## Getting started

```https://localhost:3000```

## Base URL
The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

```https://localhost:3000```

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

## Authentication
Authentication is required to store and get data. You can use the connected app to make registration and sign in. 

# Endpoints: Users

* ```/users/register``` -- signing up;
* ```/users/login``` -- signing in;
* ```/users/logout``` -- logging out;

## Register User
Signs up user and returns the registered data as json.

### URL --> ```/users/register```

### Method --> ```POST```

### Body -->

```
{
    "email":"john@email.com",
    "password":"12345",
    "rePassword":"12345"
}
```

Required:

```email``` : [string] -- The email of the person is required and must be unique;

```password``` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 4 chars, allowed are latin letters and numbers;

### Success Response:

Code: 201 Created

Content: 
``` 
{
    "email": "john@email.com",
    "_id": "622ca72c264c0fa1e23ee58f",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBldGVyQGFidi5iZyIsIl9pZCI6IjYyMmNhNzJjMjY0YzBmYTFlMjNlZTU4ZiIsImlhdCI6MTY0NzA5MzU0OH0.jbP0UaUI29gwO_RNIJ7zV1oip-9ULV93nUI9YBuj9II"
}

```

### Error Response:

Code: 400 Bad Request

Content: 
```
{
    "message": "Email already exists"
}
```

## Login User
Signs in user and returns the registered data as json.

### URL --> ```/users/login```

### Method --> ```POST```

### Body -->

```
{
    "email":"john.email@com",
    "password":"12345"
}
```

Required:

```email``` : [string] -- The user's email 

```password``` : [string] -- The user's password 

### Success Response:

Code: 200 OK

Content: 
``` 
{
    "email": "john.email@com",
    "_id": "622ca72c264c0fa1e23ee58f",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBldGVyQGFidi5iZyIsIl9pZCI6IjYyMmNhNzJjMjY0YzBmYTFlMjNlZTU4ZiIsImlhdCI6MTY0NzA5NDAyMn0.mCLb1PABnoO2QGw15YokE26ivoPexYzt-bNrJqZOO6c"
}
```

### Error Response:

Code: 400 Bad Request

Content: 
```
{
    "message": "Incorrect email or password"
}
```

## Logout User
Logout user.

### URL --> ```/users/logout```

### Method --> ```POST```

### Success Response:

Code: 204 No Content

# Endpoints: Catalog

* ```/catalog```
* ```/catalog/:itemId```

## Get Catalog
Returns all items as json.

### URL --> ```/catalog```

### Method --> ```GET```

### Success Response:

Code: 200 OK

Content: 
``` 
[
    {
        "_id": "622cb04d40395d3f393d5d38",
        "itemTitle": "Lost car keys",
        "category": "keys",
        "description": "Opel Corola car keys",
        "location": "Sofia",
        "owner": "622c9d6e0c7c607855e82354",
        "claimed": false,
        "claimedBy": [],
        "createdAt": "2022-03-12T14:33:16.930Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Get FoundItem
Returns an item as a json.

### URL --> ```/catalog/:itemId```

### Method --> ```GET```

### Success Response:

Code: 200 OK

Content: 
``` 
[
    {
        "_id": "622cb04d40395d3f393d5d38",
        "itemTitle": "Lost car keys",
        "category": "keys",
        "description": "Opel Corola car keys",
        "location": "Sofia",
        "owner": "622c9d6e0c7c607855e82354",
        "claimed": false,
        "claimedBy": [],
        "createdAt": "2022-03-12T14:33:16.930Z",
        "__v": 0
    }
]
```

## Post FoundItem
Creates new FoundItem and returns the item as json.

### URL --> ```/catalog```

### Method --> ```POST```

### Body -->

```
{
    "itemTitle": "Lost car keys",
    "category": "keys",
    "description": "Opel Corola car keys",
    "location": "Sofia",
    "itemImage: "something"
}
```

Required:

```itemTitle``` : [string] -- The title of the found item you want to create
```category``` : [string] -- The category of the item.
```location``` : [string] -- The city/location where the item was found.
<!-- ```itemImage``` : [string] -- A photo of the item. add to model and example-->

Optional:
```description``` : [string] -- Short description of the found item.

### Success Response:

Code: 201 Created

Content: 
``` 
{
    "itemTitle": "Lost car keys",
    "category": "keys",
    "description": "Opel Corola car keys",
    "location": "Sofia",
    "owner": "622c9d6e0c7c607855e82354",
    "claimed": false,
    "claimedBy": [],
    "createdAt": "2022-03-12T14:33:16.930Z",
    "_id": "622cb04d40395d3f393d5d38",
    "__v": 0
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
```

## Edit FoundItem
Edit FoundItem if the user is the author of the post and returns the changed post.

### URL --> ```/catalog/:itemId```

### Method --> ```PUT```

### Body -->

```
{
    "itemTitle": "Lost car keys from Opel car",
    "category": "keys",
    "description": "Opel Corola car keys",
    "location": "Sofia"
}
```

### Success Response:

Code: 200 OK

Content: 
``` 
{
    "_id": "622cb04d40395d3f393d5d38",
    "itemTitle": "Lost car keys from Opel car",
    "category": "keys",
    "description": "Opel Corola car keys",
    "location": "Sofia",
    "owner": "622c9d6e0c7c607855e82354",
    "claimed": false,
    "claimedBy": [],
    "createdAt": "2022-03-12T14:33:16.930Z",
    "__v": 0
}
```

### Error Response:

Code: 403 Forbidden

Content: 
```
{
    "message": "You cannot modify this record"
}
```

## Delete FoundItem
Deletes a FoundItem posting if the user is the author of the post and returns the deleted post.

### URL --> ```/catalog/:itemId```

### Method --> ```DELETE```

### Success Response:

Code: 204 No Content

### Error Response:

Code: 403 Forbidden

Content: 
```
{
    "message": "You cannot modify this record"
}
```

## Claim FoundItem
Adds an item to the user's claimed items.

### URL --> ```/claim/:itemId```

### Method --> ```POST```

### Success Response:

Code: 200

Content: 
``` 
{
    message: "Liked successful!"
}
```

### Error Response:

Code: 500 Internal Server Error

Content: 
```
{
    message: "Something went wrong!"
}
``` 

<!-- users
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info
.post /profile - post user info
.put /profile - edit user info

themes
.get /themes - lists all themes
.post /themes - create new theme only for registered users

posts:
.get themes/id - get all posts for theme
.post themes/id - create post in theme by id only for registered users
.put themes/id/posts/id - edit post only possible for author
.delete themes/id/posts/id - delete post only possible for author -->


<!-- http://localhost:3000/api/users/register --  {"name":"SomeName","email":"some@email.com","username":"someUsername","password":"12345","rePassword":"12345"} -->
<!--http://localhost:3000/api/themes -- {"themeName":"Some Theme", "userId":"5f85bf709a517d36f4abe656", "post": "Some Post" } -->
<!-- http://localhost:3000/api/themes/5f858dd2d895ad23602db9d4  -- {"userId":"5f8580d25d1da62568dd38fd", "postText": "Some Post textsdfasdf" } -->
