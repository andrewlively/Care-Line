import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface AddUserData {
  fn: string;
  ln: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  public addUserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {    
    this.addUserForm = this.formBuilder.group({
      fn: ['', Validators.required],
      ln: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  add() {
    this.dialogRef.close(this.addUserForm.value);    
  }

  onNoClick(): void {
  }

}
