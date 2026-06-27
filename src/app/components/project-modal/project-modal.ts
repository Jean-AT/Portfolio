import { Component, input, output } from '@angular/core';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectData {
  title: string;
  role: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  links: ProjectLink[];
}

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.html',
})
export class ProjectModal {
  project = input.required<ProjectData>();
  close = output<void>();

  selectedImage = 0;

  selectImage(index: number) {
    this.selectedImage = index;
  }

  prevImage() {
    if (this.project().images.length > 1) {
      this.selectedImage = this.selectedImage === 0
        ? this.project().images.length - 1
        : this.selectedImage - 1;
    }
  }

  nextImage() {
    if (this.project().images.length > 1) {
      this.selectedImage = this.selectedImage === this.project().images.length - 1
        ? 0
        : this.selectedImage + 1;
    }
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
