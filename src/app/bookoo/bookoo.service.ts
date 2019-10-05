import { Injectable } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';

@Injectable({
  providedIn: 'root'
})
export class BookooService {

  private _bookoo: Bookoo[] = [
    new Bookoo(
      'b1',
      'Lusi Lindri',
      'Panglima-panglima medan perang, raja, serta adipati adalah jago-jago perang, pendekar dalam seni menyebar maut. Mungkin itu nasib lelaki. Tetapi kita kaum perempuan, Lusiku sayang, kita punya keunggulan lain: mengandung, menyusui, mengemban, dan memekarkan kehidupan. ',
      'Fiksi',
      'https://cdn.gramedia.com/uploads/items/9786020633411_LUSI_LINDRI_C_1_4-1__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b2',
      'Confessions',
      'Moriguchi Yuko adalah seorang guru SMP.Saat anaknya yang berusia 4 tahun ditemukan meninggal, semua orangmengira itu cuma kecelakaan nahas.',
      'Remaja',
      'https://cdn.gramedia.com/uploads/items/9786025385889_Confessions__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b3',
      'Rara Mendut',
      '"Kita kan hanya perempuan rampasan belaka, Den Rara. Kenapa Den Rara tidak mau dipersunting Tumenggung yang kuasa dan kaya raya?"',
      'Fiksi Populer',
      'https://cdn.gramedia.com/uploads/items/9786020634753_RARA_MENDUT_C_1_4-1__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b4',
      'He is My Boss',
      'Setelah tahu Nakajima akan ke New York selama kurang lebih 3 tahun, perasaan Megumi jadi kacau balau.',
      'Komik',
      'https://cdn.gramedia.com/uploads/items/9786024807047_HE-IS-MY-BOSS__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b5',
      'Sherlock Holmes',
      'Sebuah tragedi pembunuhan terjadi lagi, kali ini menggemparkan penduduk di sekitar Birlstone Manor. ',
      'Fiksi',
      'https://cdn.gramedia.com/uploads/items/9786237115922_Sherlock-Holmes-Misteri-Di-Lembah-Ketakutan__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b6',
      'Silam',
      'Baskara hanyalah seorang anak berumur 13 tahun yang merasa tak pernah mendapatkan kasih sayang. Seumur hidup, batin dan fisiknya kerap tersiksa oleh perlakuan orang tua, dan teman-temannya di sekolah.',
      'Horror',
      'https://cdn.gramedia.com/uploads/items/207985690-_silam__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b7',
      'Dasar - Dasar Agronomi',
      'Dasar-dasar Agronomi',
      'Pertanian',
      'https://cdn.gramedia.com/uploads/items/9786020613802_Dasar_dasar_A__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b8',
      'Tip & Trik Program Database Java',
      'Mengetahui teknik koneksi program Java terhadap database tertentu akan memudahkan pembuatan program aplikasi bisnis dengan Java memakai database apa saja. ',
      'Komputer',
      'https://cdn.gramedia.com/uploads/items/9786230005527_Cov_Tip_Trik___w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
    new Bookoo(
      'b9',
      'Lovable Cake',
      'Memasak dengan hati akan memberikan hasil masakan enak serta selalu dinanti untuk dinikmati.',
      'Buku Masakan',
      'https://cdn.gramedia.com/uploads/items/9789790823198_Lovable-Cake__w200_hauto.jpg',
      'heart-outline',
      'heart-empty'
    ),
  ];
  get allBookoo(){
    return[...this._bookoo];
  }

  getBookoo(bookooId: string){
    return{
      ...this._bookoo.find(book =>{
        return book.id === bookooId
      })
    };
  }

  addFav(id: string){
    this._bookoo.find( book => {
      if(book.id === id){
        book.liked = 'heart'
        return true;
      }
    })
  }

  constructor() { }
}
