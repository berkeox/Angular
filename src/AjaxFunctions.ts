import { Component } from '@angular/core';
import * as $ from 'jquery';

const URLBASE = 'http://localhost:3002/api/';

export function SignIn(UserName: string, Password: string) {
  $.ajax({
    type: 'POST',
    url: URLBASE + 'signin',
    data: { username: UserName, password: Password },
  })
    .done((res) => {
      console.log(res);
      //res değeri done fonksiyonu dışında
      // KULLANILAMAZ!
    })
    .fail((err) => {
      console.log(err);
    });
}

export function SignUp(
  UserName: string,
  Password: string,
  Name: string,
  Surname: string
) {
  $.ajax({
    type: 'POST',
    url: URLBASE + 'signup',
    data: {
      username: UserName,
      password: Password,
      name: Name,
      surname: Surname,
    },
  })
    .done((SignedUp) => {
      console.log(SignedUp);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function GetCategories() {
  $.ajax({
    type: 'GET',
    url: URLBASE + 'categories',
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function GetCategoryById(CategoryID: number) {
  $.ajax({
    type: 'GET',
    url: URLBASE + 'categories/' + CategoryID,
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function AddCategory(CategoryName: string, token: string) {
  $.ajax({
    type: 'POST',
    url: URLBASE + 'categories',
    data: { name: CategoryName },
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function UpdateCategory(
  CategoryID: number,
  NewCategoryName: string,
  token: string
) {
  $.ajax({
    type: 'PUT',
    url: URLBASE + 'categories/' + CategoryID,
    data: { name: NewCategoryName },
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function DeleteCategory(CategoryID: number, token: string) {
  $.ajax({
    type: 'DELETE',
    url: URLBASE + 'categories/' + CategoryID,
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function GetNews() {
  $.ajax({
    type: 'GET',
    url: URLBASE + 'news',
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function GetNewsById(NewsID: number) {
  $.ajax({
    type: 'GET',
    url: URLBASE + 'news/' + NewsID,
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function AddNews(
  CategoryID: number,
  Title: string,
  Content: string,
  Thumbnail: string,
  token: string
) {
  $.ajax({
    type: 'POST',
    url: URLBASE + 'news',
    data: {
      categoryID: CategoryID,
      title: Title,
      content: Content,
      thumbnail: Thumbnail,
    },
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function UpdateNews(
  CategoryID: number,
  Title: string,
  Content: string,
  Thumbnail: string,
  token: string
) {
  $.ajax({
    type: 'PUT',
    url: URLBASE + 'news/' + CategoryID,
    data: {
      categoryID: CategoryID,
      title: Title,
      content: Content,
      thumbnail: Thumbnail,
    },
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

export function DeleteNews(CategoryID: number, token: string) {
  $.ajax({
    type: 'DELETE',
    url: URLBASE + 'news/' + CategoryID,
    beforeSend: function (request) {
      request.setRequestHeader('authorization', token);
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

// /api/signin	POST<	{'username': emresmsk, 'password': *******}	Kullanıcı giriş yönetimi.	false ok
// /api/signup	POST	{'username': emresmsk, 'password': ******* , 'name': Emre, 'surname': Şimşek,}	Kullanıcının üye olma yönetimi.	fals ok
// /api/categories/	POST	{'name': Son Dakika}	Kategori ekler.	true ok
// /api/categories/:id	PUT	{'name': Spor}	Kategoriyi günceller.	true ok
// /api/categories/:id	DELETE	-----	Kategoriyi siler.	true ok
// /api/categories/	GET	-----	Tüm kategorleri listeler.	false ok
// /api/categories/:id	GET	-----	ID'ye göre kategori listeler.	false ok
// /api/news/	POST	{'categoryID': 1, 'title': Haber Başlığı, 'content': lorem ipsum , 'thumbnail': url,}	Haber ekler.	true ok
// /api/news/:id	PUT	{'categoryID': 1, 'title': Haber Başlığı, 'content': lorem ipsum , 'thumbnail': url,}	Haber günceller.	true OK
// /api/news/:id	DELETE	-----	Haberi siler.	true OK
// /api/news/	GET	-----	Tüm haberleri listeler.	false ok
// /api/news/:id OK
