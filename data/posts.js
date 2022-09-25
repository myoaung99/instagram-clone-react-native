import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://i.pinimg.com/564x/fe/1b/97/fe1b97d317bfb84d146a472c548a52f1.jpg",
    user: USERS[0].name,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks fire. Super excited about it.",
      },
      {
        user: "amanath.dev",
        comment: "ONce I wake up, I'll finally be ready to code this up!.",
      },
    ],
  },
];
