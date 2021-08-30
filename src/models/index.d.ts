import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Visibility {
  PUBLIC = "public",
  PRIVATE = "private"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type FragenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Fragen2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AntwortenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Fragen {
  readonly id: string;
  readonly titel?: string;
  readonly beschreibung?: string;
  readonly titelid?: string;
  readonly refID?: string;
  readonly Frage?: string;
  readonly Fragenbeschreibung?: string;
  readonly SubFragen?: (string | null)[];
  readonly FragenTyp?: string;
  readonly Pflicht?: boolean;
  readonly Dateinotwendig?: boolean;
  readonly FragenZahl?: string;
  readonly Erfasser?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fragen, FragenMetaData>);
  static copyOf(source: Fragen, mutator: (draft: MutableModel<Fragen, FragenMetaData>) => MutableModel<Fragen, FragenMetaData> | void): Fragen;
}

export declare class Fragen2 {
  readonly id: string;
  readonly Fragen?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fragen2, Fragen2MetaData>);
  static copyOf(source: Fragen2, mutator: (draft: MutableModel<Fragen2, Fragen2MetaData>) => MutableModel<Fragen2, Fragen2MetaData> | void): Fragen2;
}

export declare class Antworten {
  readonly id: string;
  readonly titel?: string;
  readonly FragenId?: string;
  readonly Bestaetigung?: string;
  readonly titelid?: string;
  readonly refID?: string;
  readonly FragenAntwort?: string;
  readonly SubFragenAntwort?: (string | null)[];
  readonly FragenZahl?: string;
  readonly Vorname?: string;
  readonly Nachname?: string;
  readonly Email?: string;
  readonly Control?: (string | null)[];
  readonly AntwortID: string;
  readonly Dateien?: S3Object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Antworten, AntwortenMetaData>);
  static copyOf(source: Antworten, mutator: (draft: MutableModel<Antworten, AntwortenMetaData>) => MutableModel<Antworten, AntwortenMetaData> | void): Antworten;
}