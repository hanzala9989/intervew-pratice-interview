import { Component, HostListener, Input, OnInit } from '@angular/core';
import { exploreJson } from './explore';

@Component({
  selector: 'app-file-explore',
  templateUrl: './file-explore.component.html',
  styleUrls: ['./file-explore.component.scss']
})
export class FileExploreComponent implements OnInit {
  @Input() node: any;
  folderFlag: boolean = false;
  createFolderFlag: boolean = false;
  createFileFlag: boolean = false;
  nodeArray: any[] = [];
  folderName: string;
  constructor() { }

  ngOnInit(): void {
    this.nodeArray = this.node.children;
  }

  openclose(node) {
    this.folderFlag = !this.folderFlag;
    this.nodeArray = this.folderFlag ? [] : node.children;
  }
  

  createFolder(type) {
    this.hide_input();
    this[type === 'folder' ? 'createFolderFlag' : 'createFileFlag'] = !this[type === 'folder' ? 'createFolderFlag' : 'createFileFlag'];
  }
  

  handleEnterKey(node: any): void {
    console.log('node :: enter', node, this.folderName);

    const isFile = this.folderName.includes('.');
    const isDuplicate = node.children.some(child => child.foldername === this.folderName);

    if ((this.createFolderFlag && isFile) || (!this.createFolderFlag && !isFile)) {
      alert(`Please provide a ${this.createFolderFlag ? 'folder' : 'filename with extension'}`);
      return;
    }

    if (isDuplicate) {
      alert(`${this.folderName} ${this.createFolderFlag ? 'folder' : 'filename'} is already present!`);
      return;
    }

    const newNode = {
      [this.createFolderFlag ? 'foldername' : 'filename']: this.folderName,
      isfolder: this.createFolderFlag,
      children: []
    };

    node.children.push(newNode);

    this.hide_input();
  }

  hide_input() {
    console.log('bulr');
    
    this.createFolderFlag = false;
    this.createFileFlag = false;
    this.folderName = undefined;
  }


  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.hide_input();
  }

}
