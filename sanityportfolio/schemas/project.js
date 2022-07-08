export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
          { value: "school", title: "School" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
      options: {
        includeFromRelated: "tags",
      },
    },
    {
      name: "selectedWork",
      title: "Selected work",
      type: "boolean",
      description: "Do you want to show this project on the front page?",
      initialValue: false,
    },
    {
      name: "website",
      title: "Website URL",
      type: "url",
    },
    {
      name: "github",
      title: "Github URL",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
