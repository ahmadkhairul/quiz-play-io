export const quizzes = [
  {
    id: '1',
    title: 'SOLID Principles',
    description:
      'Kumpulan prinsip desain dalam OOP yang membantu menulis kode yang maintainable, scalable, dan mudah dites',
    questions: [
      {
        term: 'Singleton',
        definition: 'Untuk memastikan hanya ada satu instance, contohnya konfigurasi database.',
      },
      { term: 'Factory', definition: 'Untuk membuat objek tanpa menyebut class-nya langsung.' },
      { term: 'Strategy', definition: 'Untuk memisahkan algoritma agar bisa saling diganti.' },
      { term: 'Observer', definition: 'Untuk kasus event-driven, seperti notifikasi real-time.' },
    ],
  },
  {
    id: '2',
    title: 'Design Pattern',
    description:
      'Solusi yang sudah terbukti dan umum digunakan untuk mengatasi masalah tertentu dalam arsitektur atau struktur kode program. Tujuannya agar kode lebih mudah dibaca, dikelola, dan di-scale',
    questions: [
      {
        term: 'Single Responsibility',
        definition: '1 class punya 1 tugas.',
      },
      {
        term: 'Open/Closed',
        definition: 'class boleh ditambah, tapi jangan diubah.',
      },
      {
        term: 'Liskov Substitution',
        definition: 'subclass harus bisa menggantikan superclass tanpa merusak fungsionalitas.',
      },
      {
        term: 'Interface Segregation',
        definition: 'interface harus spesifik sesuai kebutuhan, jangan terlalu umum.',
      },
      {
        term: 'Dependency Inversion',
        definition: 'high-level module tergantung pada abstraksi, bukan implementasi.',
      },
    ],
  },
];
