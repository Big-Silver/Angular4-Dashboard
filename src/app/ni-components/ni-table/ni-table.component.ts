import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'ni-table',
  templateUrl: './ni-table.component.html',
  styleUrls: ['./ni-table.component.scss'],
  host: {
    '[class.ni-table]': 'true'
  }
})
export class NiTableComponent implements OnInit {
  @Input() headers: any = [];
  @Input() data: any = [] ;
  @Output() showRequestDialog = new EventEmitter();

  constructor(private apiService: ApiService, private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  changePage(id) {
    this.apiService.showSpinner.next(true);
    this.apiService.isClickedDetails.next(true);
    this.apiService.groupId.next(id);
  }

  showDialog(groupId) {
    this.showRequestDialog.emit(groupId);
  }

  removeUser(groupId, memberId) {
    let dialogRef = this.dialog.open(DialogRemoveComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.apiService.removeUser(groupId, memberId).then(res => {
          console.log(res);
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-remove',
  templateUrl: 'dialog-remove.html',
})
export class DialogRemoveComponent {
  constructor(public dialogRef: MdDialogRef<DialogRemoveComponent>) {}
}