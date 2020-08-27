import { Component, OnInit } from '@angular/core';

import { faClipboardList,faUser,faBook,faCaretRight,faCaretLeft,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {

  // Required Icons
  faClipboardList = faClipboardList;  
  faUser = faUser;
  faBook = faBook;
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  faSignOutAlt = faSignOutAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
