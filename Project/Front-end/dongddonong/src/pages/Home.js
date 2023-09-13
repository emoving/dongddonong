import { useRef, useEffect } from "react";

import "./Home.css";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="ml-4 mr-4 mt-4 max-w-7xl">
          <div className="md:w-1/2">
            <h1 className="font-bold text-3xl mb-4">동또농</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              libero porro natus, omnis tenetur molestiae quibusdam, expedita
              sint tempore nostrum fugiat recusandae aliquid maxime in inventore
              voluptatem voluptatibus sunt. Sapiente.
            </p>
          </div>
        </div>
        <svg
          className="fill-none scale-150 -translate-x-1/4 -translate-y-1/4  md:scale-100 md:translate-x-0 md:translate-y-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310.38 136.09"
        >
          <path
            className="path"
            d="m.16,111.51c7.72,2.54,14.17,4.54,19,6,4.24,1.28,7.15,2.13,11,3,2.87.65,6.76,1.54,11,2,1.87.2,9.86.99,20-1,1.88-.37,4.81-1.03,20-7,14.34-5.64,14.02-5.95,20-8,6.17-2.11,13.76-4.66,24-6,5.56-.73,15.18-1.52,27,0,9.45,1.22,16.47,3.54,24,6,6.57,2.14,11.7,4.24,16,6,2.47,1.01,5.13,2.14,18,8,11.92,5.43,16.13,7.42,23,10,8.6,3.23,3.17.54,14,4,1.81.58,4.05,1.32,7,1,1.2-.13,4.5-.49,7-3,2.09-2.1,2.47-4.54,3-8,0,0,.96-6.24-2-12-.11-.22-.41-.79-1-1-.4-.14-.76-.06-1,0-2.69.61-3.06.31-4,1-.52.38-.84.8-1,1-.69.9-.59,1.36-1,2-.92,1.43-2.55.91-3,2-.27.66.15,1.44,1,3,.6,1.1,1.05,1.65,2,3,1.1,1.57,1.66,2.36,2,3,.74,1.38,1.26,2.87,2,5,.44,1.26.66,2,1,2,.26,0,.46-.45,1-2,.61-1.74.91-2.6,1-3,.34-1.53.26-2.77,0-5-.35-3.08-.74-5.45-1-7-.65-3.85-1.12-4.62-1.09-5.43,0-.07.06-.28.09-.57.04-.37,0-.55,0-1-.02-.89.07-.83,0-1-.21-.53-.79-.47-1-1-.16-.4-.05-.78,0-1,.21-.95-.19-1.96-1-4-.26-.66-.67-1.6-1-3-.13-.54-.16-.82,0-1,.43-.47,2.08-.03,3,1,.38.43.2.47,1,2,.68,1.3.67,1.26,1,2,.45,1.01.7,2.04,1,3,.59,1.89.81,1.85,1,3,.13.83.21,1.36,0,2-.31.93-1.12,1.69-2,2-.77.27-.86,0-3,0-1.21,0-1.34.15-2,0-.89-.19-1.5-.63-2-1-1.15-.84-.94-1.12-2-2-.94-.78-1.35-.76-3-2-.86-.64-.96-.81-1-1-.19-.89,1.14-1.29,2-3,.75-1.49.18-2.05,1-3,.7-.8,1.97-1.4,3-1,.08.03.9.36,1,1,.13.84-1.03,1.71-2,2-.19.06-.76.21-2,0-1.29-.22-2.22-.63-3-1-2.01-.94-3.55-1.76-4-2-1.87-.98-2.82-1.48-4-2-2.64-1.16-4.82-1.71-6-2-.51-.13-2.83-.69-6-1-.61-.06-4.91-.48-5,0-.03.17.49.39,2,1,2.92,1.18,4.38,1.77,5,2,2.47.92,3.71,1.38,5,2,2.39,1.15,2.35,1.67,6,4,2.82,1.8,2.77,1.47,5,3,3.17,2.18,2.17,2.08,5,4,1.16.78,2.03,1.27,2,2-.03.74-.96,1.34-2,2-.75.48-1.34.86-2,1-1.75.38-3.15-1.04-6-3,0,0-2.23-1.52-5-3-.57-.3-3.22-1.7-7-3-2.96-1.02-2.66-.61-7-2-4.71-1.5-4.14-1.68-6-2-1.43-.24-2.34-.24-3-1-.82-.95-1.02-2.79,0-4,1.02-1.21,2.66-1.04,3-1,.14.01,2.13.26,3,2,.45.91.7,2.43,0,3-.61.5-1.75,0-4-1-2.64-1.18-3.96-1.77-5-3-.86-1.01-1.14-1.88-2-2-.73-.1-1.68.27-2,1-.14.32-.22.84,0,1,.28.2.84-.32,2-1,.98-.57,1.44-.71,2-1,1.67-.87,2.79-2.37,4-4,1.44-1.94,2.32-3.66,3-5,.52-1.03.95-1.99,2-4,.35-.67-.1.21,2-3,.41-.62.66-1.02,1-1,.54.03,1.02,1.09,1,2-.01.65-.29,1.59-1,2-1.58.91-4.3-1.41-5-2-1.92-1.63-2.78-3.5-3-4-.89-2.04-.94-3.89-1-6-.02-.76-.03-2.39,0-4,.03-1.51.06-1.59,0-2-.14-.99-.47-1.56-2-4-1.81-2.89-2.18-3.41-3-4-.4-.29-1.06-.75-2-1-1.27-.34-2.51-.09-5,1-1.37.6-3.69,1.71-7,4-3.01,2.08-3.68,2.96-4,4-.34,1.11-.19,2.07,0,3,1.02,5.07,3,9,3,9,2.25,4.02,3.87,6.94,5,9,.94,1.7,2.09,3.28,3,5,1.11,2.1,1.59,3.35,3,4,.28.13,1.84.84,3,0,.8-.58.95-1.59,1-2,.24-1.91-.88-3.51-2-5-2.25-2.98-4.19-5.11-5-6-4.66-5.12-5.49-6.27-6-7-1.65-2.4-1.03-2.07-3-5-1.35-2.01-2.58-3.55-3-6-.14-.8-.19-1.32,0-2,.49-1.76,2.23-2.65,5-4,2.44-1.19,4.64-1.89,5-2,3.17-.99,4.62-.97,5-2,.1-.28.1-.56-1-3-.98-2.16-1.46-3.24-2-4-1.06-1.49-2.09-2.29-3-3-.95-.74-1.59-1.22-2-1-.58.31-.45,1.88,0,3,.69,1.72,2.24,2.58,3,3,.26.14,1.4.8,3,1,.51.07.77.1,1,0,1.25-.53,1.09-3.46,1-5-.04-.75-.19-2.57-1-5-.56-1.67-1.59-4.11-2-4-.4.11-.07,2.48,0,3,.27,1.94.78,2.71,1,3,.04.05.04.04,1,1,.93.93.93.97,1,1,.22.11,3.9-2.17,6-7,.82-1.9.97-3.2,1-4,.06-1.76-.35-3.93-1-4-.28-.03-.52.32-1,1-.62.88-.84,1.61-1,2-.46,1.12-1.56,2.56-3,3-1.67.51-3.28-.54-4-1-.55-.35-1.35-.98-2-2-.21-.33-.81-1.35-1-3-.31-2.73.97-3.25,1-6,.03-2.14-.74-2.02-1-5-.25-2.94.34-4.92,0-5-.25-.06-.87.93-1,2-.13,1.08.34,1.48,0,2-.32.49-.83.29-2,1-.56.34-.99.61-1,1,0,.39.74.4,1,1,.15.34.07.68,0,1-.22.94-.81,1.12-1,2-.03.13-.1.54,0,1,.29,1.28,1.71,1.88,2,2,.33.14,1.9.8,3,0,.19-.14.68-.54,1-2,.33-1.49.13-2.46,0-4-.14-1.62-.27-3.2,0-5,.29-1.9.7-1.92,1-4,.19-1.29.37-2.54,0-4-.44-1.77-1.75-4.13-3-4-1.11.11-1.74,2.14-2,3-.23.74-.72,2.36,0,4,.5,1.13,1.55,2.2,2,2,.37-.16.23-1.1,0-3-.76-6.33-.59-7.33,0-8,.73-.83,1.85-.91,3-1,1.6-.12,2,.6,6,2,.42.15,1.28.43,3,1,2.3.76,2.48.8,3,1,1.9.72,2.33,1.83,4,2,.18.02.45.01,1,0,3.13-.07,4.02-.64,5,0,.56.37.41.65,1,1,1.18.7,2.72.11,3,0,1.16-.45,1.69-1.21,2-1,.21.14.2.65,0,1-.48.86-1.95.63-2,1-.04.3.92.81,2,1,1.65.29,2.87-.29,3,0,.09.2-.4.7-1,1-1.77.9-3.95-.15-4,0-.03.1.99.43,2,1,1.67.94,3.26,2.49,3,3-.21.42-1.62.09-2,0-2.48-.58-3.78-2.21-4-2-.2.19.57,1.89,2,3,.37.29.74.5,1,1,.42.79.35,1.87,0,2-.31.11-.62-.6-2-2-.81-.83-1.74-1.63-3-2-.59-.17-.84-.13-1,0-.34.28-.14.93,0,2,.18,1.34.22,2.95,0,3-.07.02-.19-.13-1-2-.67-1.54-.71-1.72-1-2-.73-.72-1.31-.4-2-1-.95-.82-.36-1.88-1-3-1.14-2-4.94-2-6-2-2.25,0-3.16.65-5,0-.44-.15-.96-.44-2-1-1.73-.94-2.59-1.4-3-2-1-1.46-.68-3.79,0-4,.6-.19,1.58,1.25,2,2,.28.49,1.01,1.94,1,6,0,2.9-.39,3.28,0,5,.26,1.16.46,1.09,1,3,.76,2.69.38,2.86,1,4,.78,1.42,1.58,1.52,2,3,.24.84.29,1.89,0,2-.24.09-.74-.45-1-1-.5-1.06-.03-2.08,1-5,1.06-2.99,1.11-3.43,1-4-.34-1.77-1.87-2.91-2-3-1.04-.75-2.03-.83-2-1,.04-.23,1.74-.12,4,0,5.26.28,6.06.22,7,1,.19.16.79,1.11,2,3,1.45,2.28,1.5,2.5,2,3,1.47,1.47,3.32,1.86,4,2,.78.16,3.55.7,6-1,2.19-1.52,2.74-3.87,3-5,.28-1.22.72-4.16-1-7-.35-.57-1.24-2.02-3-3-2.95-1.64-5.93-.59-6-1-.06-.38,2.47-1.71,5-1,1.31.37,2.11,1.15,3,2,.77.74,2.39,2.35,3,5,.19.84.51,2.29,0,4-.65,2.19-2.22,3.4-3,4-1.7,1.31-3.33,1.65-5,2-1.75.37-2.9.59-4,0-1.04-.56-.82-1.19-2-2-1.15-.78-2.37-.87-4-1-.99-.08-.83.03-3,0-2.15-.03-2.36-.14-3,0-1.71.38-2.77,1.71-3,2-2.12,2.65-1.16,6.41-1,7,.71,2.61,2.04,2.95,2,5-.03,1.46-.74,3.06-2,4-2.45,1.83-6.1.46-8-1-.51-.39-2.86-2.3-3-5-.06-1.13.29-1.82,0-2-.63-.38-3.2,2.28-5,5-3.05,4.6-3.79,9.14-4,11-.29,2.53-.13,4.46,0,6,.22,2.65.47,5.6,2,9,1.57,3.49,3.68,5.66,5,7,2.18,2.21,3.95,3.23,7,5,1.73,1,2.37,1.22,3,1,1.82-.65,1.93-4.48,2-7,.05-1.77.13-4.61-1-5-.81-.28-1.86.85-2,1-1.83,1.98-1.19,5.2-1,6,.4,1.71,1.22,3.01,5,7,3.6,3.81,4.33,3.52,6,6,1.68,2.5,2.81,5.48,3,6,.63,1.68,1.49,3.28,2,5,.12.42.34,1.22,1,2,.56.66,1.06.86,1,1-.12.29-2.69,0-3-1-.4-1.29,3.03-3.4,4-4,4.69-2.89,7.77-2.77,15-5,3.66-1.13,5.54-1.71,8-3,5.56-2.91,8.92-6.72,10-8,1.85-2.21,6.09-7.27,7-15,.27-2.29.89-10.32-4-16-.64-.75-3.15-3.65-5-3-1.8.63-1.97,4.25-2,5-.1,2.08.24,6.12,5,12,7.44,9.19,17.2,12.43,19,13,5.95,1.89,10.98,1.94,16,2,4.99.06,8.71.28,13-1,2.14-.64,3.84-1.41,5-2"
          />
        </svg>
        <div className="font-bold text-3xl absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          ↓
        </div>
      </div>
      <div className="h-3/4 relative">
        <img className="grayscale -scale-x-100 w-full" src={image} alt="" />
        <svg
          className="fill-none stroke-white absolute stroke-2 left-1/3 top-1/3 w-1/2 h-1/2 -translate-x-3/4 -translate-y-1/4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 470.42 627.4"
        >
          <g>
            <path d="m161.85,137.2c-15.19-4.88-28.06-6.48-37-7-7.95-.46-18.02-.39-29,4-4.2,1.68-9.09,3.63-9,6,.16,4.39,17.36,8.65,33,9,22.91.51,33.83-7.57,39-2,3.68,3.96.24,10.28-4,27-7.66,30.21-7.71,53.98-12,54-2.58.01-3.44-8.59-8-9-4.01-.36-5.65,6.07-10,6-5.17-.08-6.3-9.22-12-10-5.84-.8-9.5,8.11-13,7-3.39-1.08-2.69-10.31-3-23-.52-21.21-1.02-35.35-9-41-3.78-2.68-7.87-2.49-15-2-43.61,2.98-60.03,7.33-66,0-2.99-3.67-1.92-8.49-1-15,.36-2.52-.43-23.01-2-64C2.04,29.98-4.1,9.98,6.85,3.2c2.74-1.69,5.46-1.9,7-2,55.71-3.58,228.54,8.07,244,3,.72-.24,4.38-1.59,6,0,2.14,2.1-.6,8.04-1,9,0,0-4.95,11.87-4,142,0,0-4.84,2.9-5,3-4.79,2.85-50.82-2.45-58,0-.29.1-1.33.49-2,0-1.43-1.04-.24-5.43,1-8,3.73-7.75,13.35-10.3,16-11,6.8-1.8,12.41-1.17,14-1,17.16,1.85,8.42-1.68,48,1,28.58,1.93,37.11,4.04,45,7,11.8,4.42,15.92,8.41,18,13,2.97,6.57,2.76,16.55-4,23-6.68,6.37-16.57,6.26-23,3-11.34-5.74-16.08-23.33-8-35,8.63-12.46,27.37-8.73,31-8,3.7.74,13.78,2.76,17,10,1.5,3.36.45,5.44,0,16-.37,8.74.25,9.66,0,15-.55,11.88-4.05,16.48-7,28-5,19.53-5.83,24.39-3,28,1.58,2.02,4.01,3.4,5,7,1.1,4.01-.46,7.61-1,9-3.53,8.99-3.61,24.23,0,33,3.71,9.03,9.27,6.19,22,21,7.06,8.21,13.53,18.6,12,20-1.16,1.07-6.69-3.21-9-5-5-3.87-16.41-12.71-20-27-.37-1.47-.25-7.31,0-19,.6-28.74,2.64-33.8,1-39-.17-.52-.76-2.31,0-4,1.19-2.64,5.35-4.34,7-3,1.56,1.27,1.06,5.41-1,7-3.06,2.36-10.72,0-12-5-1.09-4.26,2.88-8.78,7-10,5.02-1.49,9.8,2.05,12,5,2.38,3.2,1.83,5.83,3,12,.95,4.99,2.3,8.33,5,15,4.36,10.78,9.92,18.68,13,23,6.5,9.12,9.33,10.61,11,17,1.53,5.84,1.41,13.15-1,14-.97.34-2.9-.15-10-10-6.83-9.48-10.92-15.16-15-25-7.13-17.21-7.16-30.13-9-30-1.31.09-2.13,6.7-2,12,.14,5.84,1.4,9.08,5,21,4.29,14.2,3.79,13.89,5,16,1.64,2.88,3.9,5.8,16,15,12.13,9.22,18.2,13.83,22,14,6.75.3,6.76-3.66,23-8,5.78-1.54,8.01-1.64,10-4,4-4.74,2.65-13.39-1-19-.48-.73-5.86-8.79-12-8-4.91.63-5.88,6.35-12,7-3.44.36-6.42-1.1-7,0-.56,1.06,2.16,2.55,2,5-.15,2.33-2.72,2.83-4,5-2.75,4.64,2.81,12.78,5,16,5.62,8.24,8.18,7.2,12,13,7.37,11.19,4.43,25.09,4,27-1.74,7.7-4.25,6.72-8,18-2.47,7.42-4.92,15.15-2,23,2.09,5.61,6.76,10.8,9,10,2.38-.85.24-7.83,2-18,1.6-9.24,4.63-10.75,8-20,1.7-4.66,9.53-26.17,0-37-5.07-5.77-14.83-8.24-19-5-1.37,1.06-1.56,2.3-3,8-3.92,15.57-5.21,17.2-6,18-4.15,4.19-12.56,5.34-17,2-6.11-4.59-2.97-16.35-6-17-2.4-.52-5.82,6.53-7,9-3.71,7.76-4.32,12.77-7,26,0,0-2.24,11.03-4,26-.45,3.86-.76,6.98,1,10,2.76,4.74,7.34,3.63,13,8,5.41,4.17,10.17,12.07,9,19-1.05,6.27-6.03,6.24-7,13-.69,4.83,1.71,5.78,3,15,1.19,8.5-.62,9.33,1,12,2.78,4.58,9.09,3.74,30,5,14.44.87,19.54,1.75,21-1,1.63-3.07-3.67-6.18-6-15-2.11-8,1-10.16,1-22,0-8.04,0-20.67-7-25-3.55-2.2-5.41-.1-17,0-8.09.07-8.2-.95-23-2-17.69-1.26-20.39-.01-22,1-5.09,3.21-4.1,7.25-9,18-8.84,19.41-20.07,23.83-18,34,.13.66,1.4,6.45,6,9,4.85,2.69,8.77-.79,20-1,6.22-.11,11.17-.2,15,3,2.92,2.45,2.49,5.29,5,14,.31,1.07,1.87,5.38,5,14,8.56,23.6,11.42,25.94,11,34-.24,4.66-1.72,14.01-6,15-4.91,1.13-8.17-10-20-23-17.14-18.83-31.25-18.48-34-32-1.25-6.17-.1-15,6-19,6.79-4.45,17.66-1.59,21,4,2.39,3.99-.11,7.64,3,11,2.82,3.05,6.25,1.52,10,4,4.54,3,5.11,8.96,6,14,.98,5.56,5.14,29.31,19,38,5.34,3.35,12.77,4.87,14,3,1.39-2.11-4.31-9.74-8-9-3.86.78-2.72,10.14-9,13-3.14,1.43-5.79.16-7,2-1.28,1.94.9,4.52,2,8,3.45,10.88-6.91,20.16-3,25,1.89,2.35,5.81,2.02,6,2,5.88-.57,9.34-7.99,21-31,5.05-9.96,6.28-12.27,9-13,9.07-2.43,18.67,20.54,23,19,5.11-1.82,1.19-26.87-4-42-.63-1.84-1.21-3.34-2-5-5.43-11.47-13.59-10.38-18-20-2.16-4.72-3.96-8.65-3-13,.28-1.25.88-2.98,0-4-1.19-1.38-4.26-.43-6,0-10.59,2.61-15.77-3.32-20,0-3.87,3.03-3.33,10.95-1,16,3.29,7.13,11.61,11.73,14,10,1.36-.98,1.23-4.29,0-5-1.74-1-6.87,2.52-7,6-.11,3.01,3.56,5.21,6,7,4,2.93,7.67,8.96,15,21,12.27,20.15,6.33,23.02,19,48,3.59,7.08,7.08,12.79,5,19-2.34,6.99-10.59,11.21-12,10-1.12-.96,2.81-4.73,4-13,.95-6.59-.95-8.36,1-11,3.04-4.13,9.03-1.66,12-6,2.22-3.24-.07-6.17,2-8,3.4-3.01,14.03.92,15,6,.47,2.44-1.66,3.24-2,8-.27,3.77.94,4.99,0,7-1.34,2.87-5.26,3.53-7,4-4.48,1.2-10.28,5.28-16,18" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Home;
