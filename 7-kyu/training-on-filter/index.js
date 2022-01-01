function searchNames(logins) {
  return logins.filter((acct) => acct[0].slice(-1) == '_');
}
