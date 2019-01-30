import { Component } from '@angular/core';
import { FileService } from "./services/file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CriminalContact';

  constructor(
    private fileService: FileService)
  { }

  ngOnInit() {
    // this.fileService.getFiles()
    //   .then((files: string[]) => {
    //     console.log(files);
    //   });
  }
}
