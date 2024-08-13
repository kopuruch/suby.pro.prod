import React from 'react';

import { ISvgIconProps } from '../SvgIcon.types';


const diamond = (props: ISvgIconProps) => {
  const {
    color,
    ...otherProps
  } = props;
  
  const svgColor = color || 'currentColor';
  
  return (
    <svg {...otherProps} viewBox="0 0 25 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M12.5344 2.54728C12.6289 2.54711 12.718 2.59151 12.7748 2.66709L21.5095 11.6323C21.5887 11.7377 21.5898 11.8825 21.5121 11.9891L12.7076 21.3294C12.6498 21.4087 12.557 21.4547 12.459 21.4527C12.3609 21.4507 12.27 21.4009 12.2156 21.3194L3.80057 11.7108C3.73008 11.6052 3.73368 11.4667 3.80958 11.3649L12.2944 2.66795C12.3509 2.59216 12.4399 2.54745 12.5344 2.54728ZM12.5358 3.34795L4.41717 11.5538L12.4758 20.6286L20.8965 11.8152L12.5358 3.34795Z"
            fill={svgColor} />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M21.569 11.7924C21.5759 11.8936 21.531 11.9915 21.4499 12.0524L15.0312 15.3718C14.9713 15.4168 14.8966 15.4378 14.822 15.4305L10.648 15.0252C10.5974 15.0203 10.5489 15.0026 10.507 14.9738L3.88011 11.7915C3.79269 11.7314 3.74353 11.6295 3.75083 11.5237C3.75813 11.4178 3.82081 11.3237 3.91566 11.2761L10.3509 9.0523C10.3899 9.03278 10.4326 9.02197 10.4762 9.02062L14.5728 8.89446C14.6271 8.89279 14.6808 8.9059 14.7283 8.9324L21.416 11.5507C21.5046 11.6001 21.5622 11.6911 21.569 11.7924ZM14.5082 9.49673L10.5607 9.6183L4.63851 11.5849L10.7832 14.4355L14.764 14.8221L20.7209 11.8496L14.5082 9.49673Z"
            fill={svgColor} />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M12.5341 2.54706C12.6646 2.54671 12.7804 2.63077 12.8204 2.75497L14.8675 9.10192C14.8757 9.12734 14.8804 9.15375 14.8816 9.18043L15.1507 15.118C15.1526 15.1604 15.1455 15.2027 15.1299 15.2421L12.744 21.2631C12.6965 21.3829 12.5779 21.459 12.4492 21.4522C12.3206 21.4453 12.2106 21.3571 12.1761 21.233L10.388 14.8067C10.3816 14.784 10.378 14.7606 10.3772 14.737L10.1855 9.3308C10.1843 9.29653 10.189 9.2623 10.1993 9.22961L12.2489 2.7565C12.2883 2.63209 12.4036 2.54741 12.5341 2.54706ZM12.5375 3.83258L10.787 9.36133L10.9755 14.6802L12.5149 20.2125L14.5484 15.0809L14.2841 9.24779L12.5375 3.83258Z"
            fill={svgColor} />
    </svg>
  );
};

export default diamond;
