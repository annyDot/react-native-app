import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  id: string;
  title: string;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://freetestapi.com/api/v1" }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books?limit=5",
    }),
    addBook: builder.mutation<void, { title: string }>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = booksApi;
