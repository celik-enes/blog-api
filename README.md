# Blog API

Bu proje, Node.js ve PostgreSQL kullanılarak geliştirilmiş bir RESTful backend API’dir.  
Amaç; Express.js ile API katmanı oluşturmak, PostgreSQL ile kalıcı veri yönetimi yapmak ve temel CRUD işlemlerini uygulamaktır.

## Kullanılan Teknolojiler
- Node.js (JavaScript runtime)
- Express.js (HTTP server ve routing)
- PostgreSQL (ilişkisel veritabanı)
- pg (PostgreSQL client)

## Proje Yapısı
- `server.js`: Uygulamanın ayağa kaldırıldığı dosya
- `app.js`: Express yapılandırmaları ve route bağlantıları
- `routes/posts.js`: Post işlemlerinin tanımlandığı route dosyası
- `config/db.js`: PostgreSQL bağlantı ayarları

## Yapılan İşlemler
- `GET /posts` → Tüm blog postlarını listeler
- `POST /posts` → Yeni blog postu oluşturur
- `PUT /posts/:id` → Var olan bir postu günceller
- `DELETE /posts/:id` → Post siler

## Veritabanı
- PostgreSQL kullanılarak veriler kalıcı olarak saklanmaktadır
- SQL sorguları parametreli şekilde yazılmıştır (SQL Injection önlemi)
- Veriler `posts` tablosu üzerinden yönetilmektedir

## Neden Frontend Yok?
Bu proje backend geliştirmeye odaklanmak için oluşturulmuştur.  
API endpoint’leri Postman üzerinden test edilmiştir ve frontend katmanı özellikle eklenmemiştir.

## Çalıştırma
- PostgreSQL üzerinde `blog_db` veritabanı oluşturulmalıdır
- Server `4000` portunda çalışır
