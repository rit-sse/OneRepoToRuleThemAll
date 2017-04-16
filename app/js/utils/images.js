import crypto from 'crypto';

export function gravatar(dce, image) { // eslint-disable-line import/prefer-default-export
  if (image) return image;
  const hash = crypto.createHash('md5').update(`${dce}@rit.edu`).digest('hex');
  return `https://gravatar.com/avatar/${hash}?d=mm`;
}
