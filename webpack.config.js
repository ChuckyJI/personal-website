export const module = {
  rules: [
    //...
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: { minimize: true },
        },
      ],
    },
  ],
};
