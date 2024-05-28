import { Body, Controller, Post} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ApiGithubService } from '../services/api-github.service';
import { ApiGithubDto } from '../dto/api-github.dto';

@ApiTags('Repositorio')

@Controller('api-github')
export class ApiGithubController {
    constructor(private readonly apiGithubService:ApiGithubService){

    }
    
    @ApiResponse({ status: 200, description: 'Lista de repositorios.' })
    @ApiBody({ type: ApiGithubDto })
    @Post()
        getAllRepository(@Body() user: ApiGithubDto){       
        return  this.apiGithubService.repository(user.name)
    }
}
