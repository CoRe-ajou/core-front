import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

const retinaRatio = window.devicePixelRatio * 2;

export const captureFullPage = () => {
  html2canvas(document.getElementsByTagName('body')[0], {
    scale: retinaRatio,
  }).then((canvas) => {
    const pdf = new jsPdf();
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
    pdf.save('screenshot.pdf');
  });
};
