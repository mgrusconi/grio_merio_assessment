import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Repositories {
  avatar: string;
  owner: string;
  full_name: string;
  forks: number;
  open_issues: number;
  stargazers: number;
}

@Injectable()
export class CnxService {

  constructor(private http: HttpClient) { }

  async getRepos(server: string): Promise<Repositories[]> {
    const uri = `${server}/app/github/symfony/repos`;
    return await this.http.get(uri).toPromise() as Repositories[];
  }

}
