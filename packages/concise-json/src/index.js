// @Flow

import fs from 'fs';

const parse = async (filePath: string): Object => {
  const raw = await load(filePath);
  return JSON.parse(raw);
};

const load = (filePath: string): Promise<string> => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});

export default parse;
