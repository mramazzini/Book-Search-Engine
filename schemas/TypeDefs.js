const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link:String
    title:String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    
    me(username: String!): User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookdId:ID!):Book
    removeBook(bookId: ID!):Book

  }
`;

module.exports = typeDefs;