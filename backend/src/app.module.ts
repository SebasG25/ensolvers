import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NoteSchema } from './notes/schemas/note.schema';
import { NotesController } from './notes/note.controller';
import { NotesService } from './notes/note.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kzjrzfa.mongodb.net/?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class AppModule {}
