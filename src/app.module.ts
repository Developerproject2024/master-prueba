import { Module } from '@nestjs/common';
import { ApiGithubModule } from './api-github/api-github.module';

@Module({
  imports: [ApiGithubModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
