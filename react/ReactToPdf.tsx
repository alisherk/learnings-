import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';

interface Props {
  children: (toPdf: Function) => JSX.Element;
  targetRef: React.RefObject<HTMLParagraphElement>;
  fileName: string;
  options?: { [key: string]: any };
}

const defaultOptions = {
  orientation: 'p',
  unit: 'mm',
  format: 'a4',
};

export const ReactToPdf: React.FC<Props> = ({
  children,
  targetRef,
  fileName,
  options = defaultOptions,
}) => {
  const toPdf = async (): Promise<void> => {
    setTimeout( async () => {
      const targetComponent = targetRef.current;
      if (!targetComponent) {
        throw new Error(
          'Target ref must be used or informed. See https://github.com/ivmarcos/react-to-pdf#usage.'
        );
      }
      const canvas = await html2canvas(targetComponent);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new JsPdf(options);
      pdf.addImage(imgData, 'PNG', 20, 20, 0, 0);
      pdf.save(fileName);
    }, 100);
  };

  return children(toPdf);
};
