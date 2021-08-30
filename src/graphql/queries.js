/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFragen = /* GraphQL */ `
  query GetFragen($id: ID!) {
    getFragen(id: $id) {
      id
      titel
      beschreibung
      titelid
      refID
      Frage
      Fragenbeschreibung
      SubFragen
      FragenTyp
      Pflicht
      Dateinotwendig
      FragenZahl
      Erfasser
      createdAt
      updatedAt
    }
  }
`;
export const listFragens = /* GraphQL */ `
  query ListFragens(
    $filter: ModelFragenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFragens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titel
        beschreibung
        titelid
        refID
        Frage
        Fragenbeschreibung
        SubFragen
        FragenTyp
        Pflicht
        Dateinotwendig
        FragenZahl
        Erfasser
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFragen2 = /* GraphQL */ `
  query GetFragen2($id: ID!) {
    getFragen2(id: $id) {
      id
      Fragen
      createdAt
      updatedAt
    }
  }
`;
export const listFragen2s = /* GraphQL */ `
  query ListFragen2s(
    $filter: ModelFragen2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFragen2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Fragen
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAntworten = /* GraphQL */ `
  query GetAntworten($id: ID!) {
    getAntworten(id: $id) {
      id
      titel
      FragenId
      Bestaetigung
      titelid
      refID
      FragenAntwort
      SubFragenAntwort
      FragenZahl
      Vorname
      Nachname
      Email
      Control
      AntwortID
      Dateien {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAntwortens = /* GraphQL */ `
  query ListAntwortens(
    $filter: ModelAntwortenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAntwortens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titel
        FragenId
        Bestaetigung
        titelid
        refID
        FragenAntwort
        SubFragenAntwort
        FragenZahl
        Vorname
        Nachname
        Email
        Control
        AntwortID
        Dateien {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
