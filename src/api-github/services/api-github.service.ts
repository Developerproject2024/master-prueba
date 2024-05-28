import { Injectable  } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiGithubService {
    private readonly baseURL = 'https://api.github.com';
    constructor(private readonly httpService: HttpService){}

    public repository = (username: string): Observable<any[]> => {
        const url = `${this.baseURL}/users/${username}/repos`;
        return this.httpService.get(url).pipe(
            map((response: AxiosResponse<any[]>) => response.data.slice(0, 10))
          );
    }

}
