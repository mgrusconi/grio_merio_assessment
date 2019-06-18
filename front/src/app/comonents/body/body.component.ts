import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ExportToCsv } from 'export-to-csv';
import { Configs } from '../../config';
import { CnxService, Repositories } from '../../services/cnx.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BodyComponent implements OnInit {

  public server: string;
  public backends = Configs.backends;
  public dataSource: Repositories[];
  public loading: boolean;
  private options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: false,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true
  };
  public displayedColumns: string[] = ['full_name', 'avatar', 'owner', 'forks', 'open_issues', 'stargazers'];

  constructor(private cnx: CnxService) { }

  async ngOnInit() {
    this.server = Configs.backends[1].url;
    await this.processData();
  }

  public async processData() {
    this.loading = true;
    this.dataSource = await this.cnx.getRepos(this.server);
    this.loading = false;
  }

  public export() {
    const csvExporter = new ExportToCsv(this.options);
    csvExporter.generateCsv(this.dataSource);
  }

}
