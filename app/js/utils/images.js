import md5 from 'blueimp-md5';

export function gravatar(dce, image) { // eslint-disable-line import/prefer-default-export
  if (image) return image;
  const hash = md5(`${dce}@rit.edu`);
  return `https://gravatar.com/avatar/${hash}?d=mm`;
}
