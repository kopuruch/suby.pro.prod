import React from 'react';

import { ISvgIconProps } from '../SvgIcon.types';


const people = (props: ISvgIconProps) => {
  const {
    color,
    ...otherProps
  } = props;
  
  const svgColor = color || 'currentColor';
  
  return (
    <svg {...otherProps} viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M9.39284 5.62429C9.87238 5.51988 10.3699 5.53146 10.8441 5.65807C11.3119 5.78297 11.7436 6.01627 12.1043 6.33895C13.8726 7.73954 13.5672 9.99883 12.5462 11.4286C12.0248 12.1587 11.2747 12.7509 10.4034 12.9651C9.50938 13.185 8.54469 12.991 7.6773 12.246C6.40664 11.19 6.22621 9.64941 6.64248 8.35878C7.05193 7.08933 8.07466 5.93939 9.38194 5.62678L9.39281 5.62418L9.39284 5.62429ZM9.63234 6.69792C8.78398 6.90341 8.00925 7.7047 7.68938 8.69644C7.37609 9.66775 7.53492 10.6993 8.38321 11.4023L8.39121 11.409L8.39114 11.409C9.00033 11.9336 9.60402 12.0289 10.1408 11.8969C10.7016 11.759 11.2459 11.3566 11.651 10.7894C12.4799 9.62868 12.5568 8.09144 11.4104 7.19261C11.4001 7.18454 11.3901 7.1761 11.3804 7.16732C11.1465 6.95534 10.8653 6.80227 10.5603 6.72083C10.2571 6.63988 9.9391 6.63204 9.63234 6.69792Z"
            fill={svgColor} />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M14.5098 14.347C15.936 15.7888 16.8356 17.8123 16.9546 19.8736C16.9721 20.1769 16.7405 20.4369 16.4372 20.4544C16.134 20.4719 15.874 20.2403 15.8564 19.937C15.7527 18.1402 14.9636 16.37 13.7277 15.1205C12.5 13.8793 10.8507 13.167 8.99248 13.4133C7.34626 13.6819 5.86669 14.5744 4.86129 15.9056C3.85436 17.2388 3.40069 18.9091 3.59483 20.5685C3.63012 20.8702 3.41416 21.1434 3.11246 21.1787C2.81076 21.214 2.53758 20.998 2.50228 20.6963C2.27522 18.7555 2.80582 16.8019 3.98352 15.2426C5.16122 13.6834 6.89517 12.6387 8.82408 12.3262L8.83902 12.324C11.094 12.0221 13.0771 12.8985 14.5098 14.347Z"
            fill={svgColor} />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M15.0129 4.00024C14.2224 3.78521 13.2727 3.95108 12.2972 4.96048C12.0862 5.17891 11.738 5.18485 11.5195 4.97376C11.3011 4.76268 11.2952 4.41449 11.5063 4.19606C12.7237 2.9363 14.0754 2.60524 15.3016 2.93881C16.4875 3.2614 17.4602 4.17922 18.0402 5.23196C18.6181 6.28086 18.8624 7.56903 18.4398 8.67758C18.2322 9.22243 17.8777 9.68859 17.3759 10.0454C18.4174 10.4439 19.3125 11.1437 19.9995 12.0119C21.154 13.4709 21.75 15.4371 21.4881 17.353C21.447 17.654 21.1697 17.8646 20.8687 17.8235C20.5678 17.7823 20.3571 17.505 20.3983 17.2041C20.6172 15.6019 20.1167 13.9327 19.1369 12.6945C18.1612 11.4614 16.7392 10.6875 15.1148 10.7913C14.8141 10.8105 14.554 10.5842 14.5313 10.2838C14.5086 9.98336 14.7319 9.7206 15.032 9.69445C16.4935 9.56714 17.1576 8.95311 17.412 8.2858C17.6846 7.57044 17.5529 6.62683 17.0768 5.76278C16.6029 4.90256 15.8437 4.22625 15.0129 4.00024Z"
            fill={svgColor} />
    </svg>
  );
};

export default people;
