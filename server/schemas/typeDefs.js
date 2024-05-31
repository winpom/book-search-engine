
const typeDefs = `
type Auth {
  token: ID!
  username: User
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]!
}

type Book {
  bookId: ID
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(authors: String!, title: String!, bookId: ID!, image: String!, link: String!): User
  removeBook(title: String!): User
}
`;

module.exports = typeDefs;
