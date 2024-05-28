import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiGithubController } from './controllers/api-github.controller';
import { ApiGithubService } from './services/api-github.service';
import { ApiNumberOddController } from './controllers/api-number-odd .controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiGithubController, ApiNumberOddController],
  providers: [ApiGithubService]
})
export class ApiGithubModule {}
