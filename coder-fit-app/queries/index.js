import { gql } from '@apollo/client'

export const CODERS_QUERY = gql`
  query coders {
    coders {
      id
      name
      description
    }
  }
`
