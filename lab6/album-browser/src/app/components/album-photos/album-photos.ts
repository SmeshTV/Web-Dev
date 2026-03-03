import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Photo } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}