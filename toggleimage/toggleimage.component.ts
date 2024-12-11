import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimage',
  imports: [],
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {
  switchImgs(): void {
    const imgElement = document.getElementById("img1") as HTMLImageElement | null;
    const titleElement = document.getElementById("title1") as HTMLElement | null;

    if (!imgElement || !titleElement) {
        console.error("Image or Title element not found");
        return;
    }

    const val: string = imgElement.alt;
    console.log(val);

    if (val === "Zoro") {
        imgElement.src = "./images/duke.jpg";
        imgElement.alt = "Sanji";
        titleElement.innerHTML = "duke";
    } else {
        imgElement.src = "./images/download.jpg";
        imgElement.alt = "Zoro";
        titleElement.innerHTML = "ktm";
    }
}

 switchimg2(vals: string): void {
  const imgElement = document.getElementById("img2") as HTMLImageElement | null;
  const titleElement = document.getElementById("imgtitle") as HTMLElement | null;

  if (!imgElement || !titleElement) {
      console.error("Image or Title element not found");
      return;
  }

  if (vals === "Sanji") {
      imgElement.src = "./images/duke.jpg";
      titleElement.innerHTML = "duke";
  } else if (vals === "Zoro") {
      imgElement.src = "./images/download.jpg";
      titleElement.innerHTML = "ktm";
  } else if (vals === "Luffy") {
      imgElement.src = "./images/ktm.jpg";
      titleElement.innerHTML = "ktm2";
  } else {
      imgElement.src = "./images/RC.jfif";
      titleElement.innerHTML = "rc";
  }
}
}
