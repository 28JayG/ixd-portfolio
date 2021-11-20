import { FC } from 'react';
import { IconModal } from '../../modals/icon.modal';

const HomeIcon: FC<IconModal> = ({
  fill = 'currentColor',
  size = 24,
  stroke = 1,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      strokeWidth={stroke}
      stroke={fill}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.39888 1.10441C5.56134 0.950815 5.77643 0.865234 6 0.865234C6.22357 0.865234 6.43866 0.950815 6.60113 1.10441L10.8396 5.11103C11.1021 5.35866 11.25 5.70428 11.25 6.06478V10.9385C11.25 11.2866 11.1117 11.6205 10.8656 11.8666C10.6194 12.1128 10.2856 12.251 9.9375 12.251H8.1875C8.01507 12.251 7.84432 12.2171 7.68503 12.151C7.52573 12.085 7.381 11.9883 7.25911 11.8663C7.13722 11.7443 7.04056 11.5995 6.97466 11.4402C6.90875 11.2809 6.87489 11.1101 6.875 10.9377V8.75016C6.875 8.63413 6.82891 8.52285 6.74686 8.4408C6.66481 8.35875 6.55353 8.31266 6.4375 8.31266H5.5625C5.44647 8.31266 5.33519 8.35875 5.25314 8.4408C5.17109 8.52285 5.125 8.63413 5.125 8.75016V10.9377C5.125 11.2858 4.98672 11.6196 4.74058 11.8657C4.49444 12.1119 4.1606 12.2502 3.8125 12.2502H2.0625C1.7144 12.2502 1.38056 12.1119 1.13442 11.8657C0.888281 11.6196 0.75 11.2858 0.75 10.9377V6.06391C0.75 5.70341 0.89875 5.35778 1.16125 5.11016L5.39888 1.10266V1.10441ZM6 1.73966L1.7615 5.74716C1.71847 5.78795 1.68418 5.83706 1.66072 5.89152C1.63725 5.94597 1.6251 6.00462 1.625 6.06391V10.9377C1.625 11.0537 1.67109 11.165 1.75314 11.247C1.83519 11.3291 1.94647 11.3752 2.0625 11.3752H3.8125C3.92853 11.3752 4.03981 11.3291 4.12186 11.247C4.20391 11.165 4.25 11.0537 4.25 10.9377V8.75016C4.25 8.40206 4.38828 8.06822 4.63442 7.82208C4.88056 7.57594 5.2144 7.43766 5.5625 7.43766H6.4375C6.7856 7.43766 7.11944 7.57594 7.36558 7.82208C7.61172 8.06822 7.75 8.40206 7.75 8.75016V10.9377C7.75 11.0537 7.79609 11.165 7.87814 11.247C7.96019 11.3291 8.07147 11.3752 8.1875 11.3752H9.9375C10.0535 11.3752 10.1648 11.3291 10.2469 11.247C10.3289 11.165 10.375 11.0537 10.375 10.9377V6.06391C10.375 6.00447 10.3629 5.94565 10.3395 5.89104C10.316 5.83643 10.2816 5.78718 10.2385 5.74628L6 1.73966Z'
        fill={fill}
      />
    </svg>
  );
};

export default HomeIcon;
