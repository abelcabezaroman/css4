import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'na';

  list = [ 'Item 1', 'Item 2', 'Item 3' ];

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  gallery = [ { title: 'Gato 1', imgUrl: 'assets/img/gallery/1.jpg' },
    { title: 'Gato 2', imgUrl: 'assets/img/gallery/2.jpg' },
    { title: 'Gato 3', imgUrl: 'assets/img/gallery/3.jpg' },
    { title: 'Gato 4', imgUrl: 'assets/img/gallery/4.jpg' },
    { title: 'Gato 5', imgUrl: 'assets/img/gallery/5.jpg' },
    { title: 'Gato 6', imgUrl: 'assets/img/gallery/6.jpg' },
    { title: 'Gato 7', imgUrl: 'assets/img/gallery/7.jpg' },
    { title: 'Gato 8', imgUrl: 'assets/img/gallery/8.jpg' },
    { title: 'Gato 9', imgUrl: 'assets/img/gallery/9.jpg' } ]
}
