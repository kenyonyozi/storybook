// import React, { forwardRef,useState } from "react";
// import DatePicker from "react-datepicker";
// import  './';

// import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export default function date() {
//     const [startDate, setStartDate] = useState(new Date());
//     const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
//         <input
//           value={value}
//           className="example-custom-input"
//           onClick={onClick}
//           onChange={onChange}
//           ref={ref}
//         ></input>
//       ));

//     return (
//         <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

//         <DatePicker
//             selected={startDate}
//               onChange={this.handleChange}
//             minDate={new Date()}
//               minDate={moment().toDate()}
//             placeholderText="Select a day"
//         />
//     );
// };

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function date() {
    const [startDate, setStartDate] = useState();
    const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <input
                name="end"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date end"
                onClick={onClick}
                value={value}
                onChange={onChange}
                ref={ref}
            />
        </div>
        // <input
        //   value={value}
        //   className="bg-[ url('calender.svg')] bg-right bg-no-repeat bg-[length:20px] w-[240px] h-[24px]" 
        //   onClick={onClick}
        //   onChange={onChange}
        //   placeholder='select'
        //   ref={ref}
        // ></input>
    ));
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            customInput={<ExampleCustomInput />}
            dayClassName={() => "example-datepicker-day-class"}
            popperClassName="example-datepicker-class"
            todayButton="TODAY"
        />
    );
}