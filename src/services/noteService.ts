import axios from "axios";
import type { Note, NoteFormValues } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
const myToken = import.meta.env.VITE_NOTEHUB_TOKEN;

export const fetchNotes = async (
  search: string,
  page: number
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    params: {
      search: search,
      page: page,
      perPage: 12,
    },
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  return response.data;
};

export const createNote = async (newNote: NoteFormValues): Promise<Note> => {
  const response = await axios.post<Note>("/notes", newNote, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  return response.data;
};

export const deleteNote = async (noteId: Note["id"]): Promise<Note> => {
  const response = await axios.delete<Note>(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });

  return response.data;
};
