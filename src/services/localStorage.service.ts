export function getTomerValue(id: string) {
  localStorage.getItem(id);
}

export function setTomerValue(id: string, value: number) {
  localStorage.setItem(id, String(value));
}
