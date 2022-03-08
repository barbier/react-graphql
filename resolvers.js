const user = {
  _id: "1",
  name: "John Doe",
  email: "john@mail.me",
  picture: "john.jpg",
}

module.exports = {
  Query: {
    me: () => user
  }
}