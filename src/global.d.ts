declare module '*.css' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*.jpg' {
  const url: string;
  export default url;
}
