offline
=======

Offline version of the app.

its occured to me that I cannot upload **users.json** to GitHub
as it contains email addresses... Need to fake it for testing.

## Sample Data

### Posts

```
{ _id: 'KoRgLqcvhjy2ACGji',
  authorAvatar: '/images/avatar.png',
  authorName: 'Jimmy Nutron',
  authorUsername: jimmy,
  body: 'My First Post!',
  comments_count: 0,
  created_at: '2014-05-20T17:34:04.603Z',
  flagged: 0,
  gid: 'qDEsZjT34S568YQi5',
  images:
   { full: 'https://secret.s3.amazonaws.com/full_c0bcb1c6bd1987a913cc9dbd3591320fca999113.png',
     mobile: 'https://secret.s3.amazonaws.com/mobile_c0bcb1c6bd1987a913cc9dbd3591320fca999113.png',
     thumb: 'https://secret.s3.amazonaws.com/thumb_c0bcb1c6bd1987a913cc9dbd3591320fca999113.png' },
  like_count: 2,
  likes: [ 'oGzPsJSowNTcMo3qs', 'Na4sPCGu7iZh37F2s', '6mru2JoHku3bhdE7r' ],
  user_id: 'PdiGBRfnLK8LuMp8X' }
```


### Install Dependencies

```
npm install
```

### Boot the App:

```
npm start
```
