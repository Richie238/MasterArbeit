/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFragen = /* GraphQL */ `
  mutation CreateFragen(
    $input: CreateFragenInput!
    $condition: ModelFragenConditionInput
  ) {
    createFragen(input: $input, condition: $condition) {
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

export const createFragenBatch = `mutation CreateFragenBatch($input: [CreateFragenInput]) {
  createFragenBatch(input: $input) {
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


export const updateFragen = /* GraphQL */ `
  mutation UpdateFragen(
    $input: UpdateFragenInput!
    $condition: ModelFragenConditionInput
  ) {
    updateFragen(input: $input, condition: $condition) {
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
export const deleteFragen = /* GraphQL */ `
  mutation DeleteFragen(
    $input: DeleteFragenInput!
    $condition: ModelFragenConditionInput
  ) {
    deleteFragen(input: $input, condition: $condition) {
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
export const createFragen2 = /* GraphQL */ `
  mutation CreateFragen2(
    $input: CreateFragen2Input!
    $condition: ModelFragen2ConditionInput
  ) {
    createFragen2(input: $input, condition: $condition) {
      id
      Fragen
      createdAt
      updatedAt
    }
  }
`;
export const updateFragen2 = /* GraphQL */ `
  mutation UpdateFragen2(
    $input: UpdateFragen2Input!
    $condition: ModelFragen2ConditionInput
  ) {
    updateFragen2(input: $input, condition: $condition) {
      id
      Fragen
      createdAt
      updatedAt
    }
  }
`;
export const deleteFragen2 = /* GraphQL */ `
  mutation DeleteFragen2(
    $input: DeleteFragen2Input!
    $condition: ModelFragen2ConditionInput
  ) {
    deleteFragen2(input: $input, condition: $condition) {
      id
      Fragen
      createdAt
      updatedAt
    }
  }
`;
export const createAntworten = /* GraphQL */ `
  mutation CreateAntworten(
    $input: CreateAntwortenInput!
    $condition: ModelAntwortenConditionInput
  ) {
    createAntworten(input: $input, condition: $condition) {
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
export const updateAntworten = /* GraphQL */ `
  mutation UpdateAntworten(
    $input: UpdateAntwortenInput!
    $condition: ModelAntwortenConditionInput
  ) {
    updateAntworten(input: $input, condition: $condition) {
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
export const deleteAntworten = /* GraphQL */ `
  mutation DeleteAntworten(
    $input: DeleteAntwortenInput!
    $condition: ModelAntwortenConditionInput
  ) {
    deleteAntworten(input: $input, condition: $condition) {
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
