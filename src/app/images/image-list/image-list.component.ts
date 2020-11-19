import { Component, OnInit } from "@angular/core";
import { ImageService } from "../../image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html",
  styleUrls: ["./image-list.component.css"]
})
export class ImageListComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(list => {
      console.log(list);
      this.imageList = list.map(item => {
        return item.payload.val();
      });
      this.rowIndexArray = Array.from(
        Array(Math.ceil((this.imageList.length + 1) / 3)).keys()
      );
    });
  }
}