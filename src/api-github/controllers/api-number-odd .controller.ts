import { Controller, Get, Param} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Pensamiento Logico')

@Controller('pensamiento-logico')
export class ApiNumberOddController {
    constructor(){

    }
    @ApiResponse({ status: 201, description: 'El array de numeros impares es exitoso' })
    @ApiBadRequestResponse({ description: 'La solicitud es inválida.' })
    @Get(':numero') 
    datosImapres(@Param('numero') numero: string): number[] {
        const maximo = parseInt(numero, 10);
        let impares = [];
        for (let i = 1; i <= maximo; i += 2) {
          impares.push(i);
        }
        return impares;
      }
}