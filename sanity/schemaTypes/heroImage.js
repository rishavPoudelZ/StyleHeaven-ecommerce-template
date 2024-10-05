export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image hotspot selection for better cropping
        },
      },
      {
        name: 'altText',
        title: 'Alt Text',
        type: 'string',
        description: 'Alternative text for the image, important for SEO and accessibility',
      },
    ],
  };
  