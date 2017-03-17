// @flow

/* eslint-disable no-console */

import path from 'path';
import Concise from 'concise';
import { input } from 'concise-yaml';
import { output } from 'concise-pg';

const run = async () => {
  try {
    const concise = new Concise();
    await concise.input(input, {
      file: path.join(__dirname, '../fixtures/schema1.yaml'),
    });
    await concise.input(input, {
      file: path.join(__dirname, '../fixtures/schema2.yaml'),
    });
    console.log(await concise.output(output));
  } catch (err) {
    console.error(err);
  }
};

run();
