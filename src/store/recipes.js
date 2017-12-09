/**
 * Recipe Default Store
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
export default {
  meals: [
    { id: 1, title: 'Lunch' },
    { id: 2, title: 'Dinner' },
  ],
  recipes: [
    {
      id: 1,
      slug: 'this-is-an-article',
      title: 'This is an Article',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      author: 'John Smith',
      category: 1,
      image: 'https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5',
      ingredients: [
        'sed do eiusmod tempor incididunt',
        'aute irure dolor in',
        'do eiusmod tempor',
        'uis aute irure dolor in',
        'doloremque laudantium',
        'cupidatat non proident',
      ],
      method: [
        'iste natus error sit voluptatem accusantium doloremque laudantium',
        'magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
        'sed quia non numquam eius modi tempora incidunt ut labore',
      ],
    },
    {
      id: 2,
      slug: 'dummy-text-of-the-printing',
      title: 'Dummy text of the printing',
      body: 'Typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      author: 'Jane Doe',
      category: 2,
      image: 'https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-2.jpg?alt=media&token=6ed1740b-529b-4772-9a92-615e92b544b2',
      ingredients: [
        'sed do eiusmod tempor incididunt',
        'aute irure dolor in',
        'do eiusmod tempor',
        'uis aute irure dolor in',
        'doloremque laudantium',
        'cupidatat non proident',
      ],
      method: [
        'iste natus error sit voluptatem accusantium doloremque laudantium',
        'magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
        'sed quia non numquam eius modi tempora incidunt ut labore',
      ],
    },
  ],
  favourites: [],
};
