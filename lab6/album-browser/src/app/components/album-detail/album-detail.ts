import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: any;
  tempTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.tempTitle = data.title;
      this.cdr.detectChanges();
    });
  }

  save(): void {
    const updatedAlbum = { ...this.album, title: this.tempTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe(result => {
      this.album = result;
      alert('Changes saved (simulated)!');
      this.cdr.detectChanges();
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}