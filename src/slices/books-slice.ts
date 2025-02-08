import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  id: string;
  title: string;
}
const mockBooks: Book[] = [
  { id: "1", title: "Mock Book 1" },
  { id: "2", title: "Mock Book 2" },
];

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      queryFn: async () => {
        return { data: [...mockBooks] };
      },
    }),

    addBook: builder.mutation<void, { title: string }>({
      queryFn: async ({ title }) => {
        const newBook = { id: Date.now().toString(), title };
        mockBooks.push(newBook);
        return { data: undefined };
      },
    }),
  }),
});

/*export const booksApi = createApi({
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
});*/

export const { useGetBooksQuery, useAddBookMutation } = booksApi;
