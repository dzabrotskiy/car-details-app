export function createImageSrc(file: File) {
  return URL.createObjectURL(new Blob([file]));
}
