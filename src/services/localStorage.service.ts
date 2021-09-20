export function getValue(id: string) {
  localStorage.getItem(id);
}

export function setValue(id: string, value: number) {
  localStorage.setItem(id, String(value));
}
