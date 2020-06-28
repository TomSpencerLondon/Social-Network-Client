export function failLogin() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('password');
}
