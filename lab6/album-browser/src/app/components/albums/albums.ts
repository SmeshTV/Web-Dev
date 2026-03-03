import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
  this.albumService.deleteAlbum(id).subscribe({
    next: () => {
      this.albums = [...this.albums.filter(a => a.id !== id)];
      this.cdr.detectChanges();
    }
  });
}
}