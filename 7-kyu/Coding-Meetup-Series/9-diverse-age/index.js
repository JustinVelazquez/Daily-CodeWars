function isAgeDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)

  return list.some((h) => h.age >= 100)
    ? [10, 20, 30, 40, 50, 60, 70, 80, 90].every((e) =>
        list.some((dev) => dev.age - e >= 0 && dev.age - e <= 9)
      )
    : false;
}
