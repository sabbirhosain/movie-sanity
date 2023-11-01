export default {
  title: 'Movies',
  name: 'movies',
  type: 'document',
  fields: [
    {
      title: 'Movies Name',
      name: 'movies_name',
      type: 'string',
    },
    {
      title: 'Movies Trailer URL',
      name: 'movies_trailer',
      type: 'url'
    },
    {
      title: 'Movies Description',
      name: 'movies_description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Movies Image',
      name: 'movies_image',
      type: 'image',
    },
    {
      title: 'Movies Categories',
      name: 'movies_categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'movie_category' }] }],
    },
  ],
};
