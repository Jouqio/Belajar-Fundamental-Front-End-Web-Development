// Contoh memakai dua package pihak ketiga sekaligus:
// - chalk  : untuk mewarnai output di terminal
// - dayjs  : untuk memformat tanggal

const chalk = require('chalk');
const dayjs = require('dayjs');
require('dayjs/locale/id'); // memuat format bahasa Indonesia
dayjs.locale('id');

const sekarang = dayjs();

console.log(chalk.bold.blue('=== Laporan Harian ==='));
console.log(chalk.green('✔ Tugas selesai:'), 'Belajar npm');
console.log(chalk.yellow('Tanggal:'), sekarang.format('DD MMMM YYYY'));
console.log(chalk.red('✘ Jangan lupa:'), 'Kerjakan latihan modul berikutnya!');
