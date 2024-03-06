import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-interview-question';
  // treeData = {
  //   foldername: 'Root',
  //   isfolder: true,
  //   children: [
  //     {
  //       foldername: 'app',
  //       isfolder: true,
  //       children: [
  //         {
  //           foldername: 'assets',
  //           isfolder: true,
  //           children: [
  //             {
  //               foldername: 'env',
  //               isfolder: true,
  //               children: []
  //             },
  //             {
  //               filename: 'env.ts',
  //               isfolder: false,
  //               children: []
  //             },
  //             {
  //               filename: 'index.html',
  //               isfolder: false,
  //               children: []
  //             },
  //           ],
  //         },
  //         {
  //           filename: 'tsconfig.ts',
  //           isfolder: false,
  //           children: []
  //         },
  //       ],
  //     },
  //     {
  //       foldername: 'src',
  //       isfolder: true,
  //       children: [
  //         {
  //           foldername: 'app',
  //           isfolder: true,
  //           children: []
  //         },
  //         {
  //           filename: 'package.json',
  //           isfolder: false,
  //           children: []
  //         },
  //       ],
  //     },
  //   ],
  // };

  treeData = {
    foldername: 'Root',
    isfolder: true,
    children: [
      {
        foldername: 'app',
        isfolder: true,
        children: [
          {
            foldername: 'assets',
            isfolder: true,
            children: [
              {
                filename: 'env.ts',
                isfolder: false,
                children: []
              },
              {
                filename: 'index.html',
                isfolder: false,
                children: []
              },
            ],
          },
          {
            filename: 'tsconfig.ts',
            isfolder: false,
            children: []
          },
        ],
      },
    ],
  };
}
