function findAdmin(list, lang) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(
    (dev) => dev.language === lang && dev.githubAdmin === 'yes'
  );
}
