// PDF dosyasının Google Drive ID'si - Buraya kendi PDF dosyanızın ID'sini girin
var PDF_DOSYA_ID = '1KSsIMeXKKH4zMuwFDthvdtC9ia0AgIWg';

/**
 * Web uygulamasını başlatır
 */
function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('PDF Flipbook')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * HTML dosyasına CSS ve diğer dosyaları dahil etmek için yardımcı fonksiyon
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Google Drive'dan PDF dosyasını alır ve base64 formatında döndürür
 */
function getPdfAsBase64() {
  try {
    // PDF dosyasını Drive'dan al
    var file = DriveApp.getFileById(PDF_DOSYA_ID);

    // Dosyayı blob olarak al
    var blob = file.getBlob();

    // Base64'e çevir
    var base64 = Utilities.base64Encode(blob.getBytes());

    return base64;
  } catch (error) {
    throw new Error('PDF dosyası yüklenirken hata oluştu: ' + error.message);
  }
}
