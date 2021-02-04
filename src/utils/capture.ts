import html2canvas from 'html2canvas';

const retinaRatio = window.devicePixelRatio * 2;

export const captureFullPage = () => {
  html2canvas(document.getElementsByTagName('body')[0], {
    scale: retinaRatio,
  }).then((canvas) => {
    document.body.appendChild(canvas)
  });
};
