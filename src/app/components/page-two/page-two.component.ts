import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from 'src/app/shared/image-popup/image-popup.component';
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  basicInfo = {
    lang: 'Kannada',
    name: 'Lakshmi Reddy',
    dob: '1990 Jan 31 (30 Y 5 M)',
    cond: ['Hypertension', 'Diabetics']
  }
  checklist: any = ['Explained Treatment', 'Follow Up Suggested', 'Medication Intake'];

  prescription: any = [
    'Name of the drug', 'Dose', 'Qty', 'Frequency', 'Days',
    'Before Food', 'After Food', 'Any space for notes if any'
  ];
  newPres: string = '';

  drugsList: any = [
    'Name of the drug', 'Dose', 'Qty', 'Frequency', 'Days',
    'Before Food', 'After Food', 'Any', 'Notes'
  ];
  newDrug: string = '';

  history: any = [
    {
      date: null,
      issue: '',
      historyRid: 1
    },
    {
      date: '2020/07/17',
      issue: 'Headache',
      historyRid: 2
    },
    {
      date: '2020/06/05',
      issue: 'Stomach Pain',
      historyRid: 3
    }
  ];
  historyDetailedList: any = [
    {
      historyRid: 1,
      problem: 'some issue',
      date: null,
      photos: ['/assets/video.svg', '/assets/video.svg', '/assets/video.svg'],
      diagnosis: '',
      treatment: '',
      labTestRecord: '',
      suggestions: '',
      recommendations: null
    },
    {
      historyRid: 2,
      date: '2020/07/17',
      problem: 'some issue 2',
      photos: ['/assets/video.svg', '/assets/video.svg', '/assets/video.svg'],
      diagnosis: 'Headache',
      treatment: 'Some treatment',
      labTestRecord: 'length desc',
      suggestions: 'some suggestions 1',
      recommendations: 1
    },
    {
      historyRid: 3,
      date: '2020/06/05',
      problem: 'some issue 3',
      photos: ['/assets/video.svg', '/assets/video.svg', '/assets/video.svg'],
      diagnosis: 'Stomach Pain',
      treatment: 'Some treatment',
      labTestRecord: 'length desc',
      suggestions: 'some suggestions 2',
      recommendations: null
    }
  ];
  activeHistory: any = this.historyDetailedList[0];
  today: Date = new Date();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeActiveHis(historyRid: any) {
    this.historyDetailedList.forEach(h => {
      if (h.historyRid == historyRid) {
        this.activeHistory = h;
      }
    });
  }
  addNewPres() {
    this.prescription.push(this.newPres);
    this.newPres = '';
  }
  addNewdrug() {
    this.drugsList.push(this.newDrug);
    this.newDrug = '';
  }

  openPhotos(photos: any) {
    const dialogRef = this.dialog.open(ImagePopupComponent, {
      data: photos,
      height: 'fit-content',
      width: '50%',
      disableClose: true,
      panelClass: 'modal-wrapper',
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
