declare module '*.scss' {
  const styles: { [key: string]: string };
  export default styles;
}
declare module '*.css' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*?raw' {
  const content: string;
  export default content;
}
