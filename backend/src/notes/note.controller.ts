import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './note.service';

@Controller('api/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async createNote(@Body() noteDto) {
    return this.notesService.createNote(noteDto);
  }

  @Get()
  async getNotes() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  async getNote(@Param('id') id: string) {
    return this.notesService.getNote(id);
  }

  @Put(':id')
  async updateNote(@Body() noteDto, @Param('id') id: string) {
    return this.notesService.updateNote(id, noteDto);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}
