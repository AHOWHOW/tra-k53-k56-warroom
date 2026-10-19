/**
 * 臺鐵北迴線 K53 及 K56 路段改建暨崇德車站改善工程 — 施工中臨時方案互動地理戰情室
 * Google Apps Script (GAS) Web App 入口腳本
 *
 * // WHY: 採用 HtmlService.createHtmlOutputFromFile 搭配 XFrameOptionsMode.ALLOWALL，
 * // 確保此 Web App 除了可透過獨立網址開啟外，也能無縫嵌入 Google Sites (Google 協作平台) 或 Google Workspace。
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('臺鐵北迴線 K53 & K56 改建工程｜施工臨時方案與運碴調度動態地理戰情室')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}
