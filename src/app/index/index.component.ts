import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Element {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'},
  {position: "Werlte", name: 'Kevin', weight: 6, symbol: '2,50€'},
  {position: "Rastdorf", name: 'Peter', weight: 8, symbol: '2,50€'},
  {position: "Papenburg", name: 'Heinz', weight: 3, symbol: '2,50€'},
  {position: "Dörpen", name: 'Detlef', weight: 9, symbol: '2,50€'},
  {position: "Lathen", name: 'Lena', weight: 5, symbol: '2,50€'},
  {position: "Esterwegen", name: 'Christoph', weight: 6, symbol: '2,50€'}
];
