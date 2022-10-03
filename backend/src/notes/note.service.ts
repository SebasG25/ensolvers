import { Injectable } from '@nestjs/common';
import { Note, NoteDocument } from './schemas/note.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel('Note') private readonly noteModel: Model<NoteDocument>,
  ) {}

  // create a new note
  async createNote(note: Note): Promise<Note> {
    const newNote = new this.noteModel(note);
    return await newNote.save();
  }

  // get all notes
  async getNotes(): Promise<Note[]> {
    return await this.noteModel.find().exec();
  }

  // get one specific note
  async getNote(id: string): Promise<Note[]> {
    return await this.noteModel.findById(id);
  }

  // update note
  async updateNote(id: string, note: Note): Promise<Note> {
    return await this.noteModel.findByIdAndUpdate(id, note, { new: true });
  }

  // delete note
  async deleteNote(id: string): Promise<any> {
    return await this.noteModel.findByIdAndRemove(id);
  }
}
