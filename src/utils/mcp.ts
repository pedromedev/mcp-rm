type McpTextResponse = {
  content: [
    {
      type: "text";
      text: string;
    }
  ];
} & Record<string, unknown>;

export const buildTextResponse = (text: string): McpTextResponse => ({
  content: [
    {
      type: "text",
      text,
    },
  ],
});

