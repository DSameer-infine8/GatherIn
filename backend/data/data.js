const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "Alice Morgan",
          email: "alicem@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "Alice Morgan",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Sneha Sharma",
          email: "sneha@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Sneha Sharma",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Carlos Vega",
          email: "carlosv@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Carlos Vega",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Alice Morgan",
          email: "alicem@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
        {
          name: "Sneha Sharma",
          email: "sneha@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Sneha Sharma",
        email: "sneha@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Nina Kapoor",
          email: "nina.kapoor@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Nina Kapoor",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Alice Morgan",
          email: "alicem@example.com",
        },
        {
          name: "Ravi Kumar",
          email: "ravi.k@example.com",
        },
        {
          name: "Sneha Sharma",
          email: "sneha@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Sneha Sharma",
        email: "sneha@example.com",
      },
    },
  ];
  
module.exports= chats;