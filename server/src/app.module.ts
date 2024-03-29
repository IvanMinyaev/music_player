import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './files/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
	imports: [
		ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
		MongooseModule.forRoot(
			'mongodb+srv://test:test@cluster0.50j1gyk.mongodb.net/?retryWrites=true&w=majority',
		),
		TrackModule,
		FileModule
	],
})
export class AppModule { }
