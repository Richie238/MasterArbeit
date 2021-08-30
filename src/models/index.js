// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Visibility = {
  "PUBLIC": "public",
  "PRIVATE": "private"
};

const { Fragen, Fragen2, Antworten, S3Object } = initSchema(schema);

export {
  Fragen,
  Fragen2,
  Antworten,
  Visibility,
  S3Object
};