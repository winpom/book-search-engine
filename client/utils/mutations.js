import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(userame: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $title: String!, $bookId: ID!, $image: String!, $link: String!) {
    saveBook(authors: $authors, title: $title, bookId: $bookId, image: $image, link: $link) {
      authors
      title
      _id
      bookId
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($title: String!) {
    removeBook(title: $title) {
      _id
      title
    }
  }
`;
